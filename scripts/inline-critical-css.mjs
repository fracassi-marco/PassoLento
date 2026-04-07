import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const outDir = join(process.cwd(), 'out');
const nextStaticCss = join(outDir, '_next', 'static', 'css');

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function loadCssFiles() {
  const entries = await readdir(nextStaticCss);
  const cssMap = {};
  for (const entry of entries) {
    if (entry.endsWith('.css')) {
      cssMap[entry] = await readFile(join(nextStaticCss, entry), 'utf-8');
    }
  }
  return cssMap;
}

/**
 * Rimuove i riferimenti stylesheet dal payload RSC negli <script> tag.
 * React 19 usa il payload RSC per ricreare <link rel="stylesheet"> durante
 * l'idratazione, causando CSS render-blocking anche se già inlined.
 *
 * Formato nel payload: [\"$\",\"link\",\"KEY\",{\"rel\":\"stylesheet\",\"href\":\"PATH\",...}]
 */
function removeRscStylesheetLink(html, cssFile) {
  const href = `/_next/static/css/${cssFile}`;
  // Marker: l'href con escaped quotes come appare nel payload RSC
  const hrefMarker = `\\"href\\":\\"${href}\\"`;
  let removedCount = 0;

  let searchStart = 0;
  while (true) {
    const hrefIdx = html.indexOf(hrefMarker, searchStart);
    if (hrefIdx === -1) break;

    // Cerca la [ di apertura dell'elemento RSC
    let start = hrefIdx;
    let bracketDepth = 0;
    while (start > 0) {
      start--;
      if (html[start] === ']') bracketDepth++;
      if (html[start] === '[') {
        if (bracketDepth === 0) break;
        bracketDepth--;
      }
    }

    // Cerca la ] di chiusura dell'elemento RSC
    let end = hrefIdx + hrefMarker.length;
    bracketDepth = 0;
    while (end < html.length) {
      if (html[end] === '[') bracketDepth++;
      if (html[end] === ']') {
        if (bracketDepth === 0) break;
        bracketDepth--;
      }
      end++;
    }

    const element = html.slice(start, end + 1);

    // Verifica che sia un elemento link stylesheet
    if (element.includes('\\"link\\"') && element.includes('\\"stylesheet\\"')) {
      html = html.slice(0, start) + 'false' + html.slice(end + 1);
      searchStart = start + 5; // lunghezza di 'false'
      removedCount++;
    } else {
      searchStart = end + 1;
    }
  }

  return { html, removedCount };
}

/**
 * Rimuove le istruzioni :HL["path","style"] dal payload RSC negli <script> tag.
 * React 19 le processa chiamando preinit() durante l'idratazione, che inietta
 * <link rel="stylesheet"> dinamicamente → browser ri-scarica il CSS → render-blocking.
 *
 * Formato nel payload (quotes escaped nel JSON): :HL[\"PATH\",\"style\"]
 */
function removeRscHlStyleHint(html, cssFile) {
  const href = `/_next/static/css/${cssFile}`;
  let removedCount = 0;

  // Il path può apparire con quotes escaped (dentro JSON string) o non escaped
  for (const q of ['\\"', '"']) {
    const prefix = `:HL[${q}${href}${q},${q}`;
    let idx = 0;
    while (true) {
      const start = html.indexOf(prefix, idx);
      if (start === -1) break;

      // Trova la ] di chiusura dell'array :HL[...]
      let end = start + prefix.length;
      let depth = 1;
      while (end < html.length && depth > 0) {
        if (html[end] === '[') depth++;
        if (html[end] === ']') depth--;
        end++;
      }

      const element = html.slice(start, end);
      if (element.includes(`${q}style${q}`)) {
        html = html.slice(0, start) + html.slice(end);
        removedCount++;
        // Non avanzare idx: abbiamo rimosso contenuto
      } else {
        idx = end;
      }
    }
  }

  return { html, removedCount };
}

async function run() {
  const cssMap = await loadCssFiles();
  const htmlFiles = await findHtmlFiles(outDir);

  console.log(`CSS inline per ${htmlFiles.length} pagine...`);
  console.log(`File CSS trovati: ${Object.keys(cssMap).join(', ')}`);

  for (const file of htmlFiles) {
    let html = await readFile(file, 'utf-8');
    let inlinedCount = 0;
    let rscRemovedCount = 0;
    let hlRemovedCount = 0;

    for (const [cssFile, cssContent] of Object.entries(cssMap)) {
      const cssPath = `/_next/static/css/${cssFile}`;

      // 1. Sostituisce <link rel="stylesheet" href="...css"> con <style> inline
      const linkRegex = new RegExp(
        `<link[^>]*rel="stylesheet"[^>]*href="${cssPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
        'g'
      );

      // Primo match: inline il CSS, successivi: rimuovi i duplicati
      let firstMatch = true;
      html = html.replace(linkRegex, (match) => {
        if (firstMatch) {
          firstMatch = false;
          inlinedCount++;
          return `<style>${cssContent}</style>`;
        }
        return '';
      });

      // 2. Rimuove i riferimenti stylesheet dal payload RSC
      // React 19 ricrea <link> durante l'idratazione dal payload RSC
      const rscResult = removeRscStylesheetLink(html, cssFile);
      html = rscResult.html;
      rscRemovedCount += rscResult.removedCount;

      // 3. Rimuove le istruzioni :HL["path","style"] dal payload RSC
      // React 19 le processa con preinit() → inietta <link rel="stylesheet"> dinamicamente
      const hlResult = removeRscHlStyleHint(html, cssFile);
      html = hlResult.html;
      hlRemovedCount += hlResult.removedCount;
    }

    if (inlinedCount > 0 || rscRemovedCount > 0 || hlRemovedCount > 0) {
      await writeFile(file, html);
      console.log(`  ✓ ${file.replace(outDir, '')} (${inlinedCount} CSS inlined, ${rscRemovedCount} RSC ref rimossi, ${hlRemovedCount} :HL hint rimossi)`);
    }
  }

  console.log('CSS render-blocking eliminato!');
}

run().catch(err => {
  console.error('Errore:', err);
  process.exit(1);
});
