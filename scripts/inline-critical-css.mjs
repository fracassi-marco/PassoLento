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

async function run() {
  const cssMap = await loadCssFiles();
  const htmlFiles = await findHtmlFiles(outDir);

  console.log(`CSS inline per ${htmlFiles.length} pagine...`);
  console.log(`File CSS trovati: ${Object.keys(cssMap).join(', ')}`);

  for (const file of htmlFiles) {
    let html = await readFile(file, 'utf-8');
    let inlinedCount = 0;
    let rscRemovedCount = 0;

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
      const result = removeRscStylesheetLink(html, cssFile);
      html = result.html;
      rscRemovedCount += result.removedCount;
    }

    if (inlinedCount > 0 || rscRemovedCount > 0) {
      await writeFile(file, html);
      console.log(`  ✓ ${file.replace(outDir, '')} (${inlinedCount} CSS inlined, ${rscRemovedCount} RSC ref rimossi)`);
    }
  }

  console.log('CSS render-blocking eliminato!');
}

run().catch(err => {
  console.error('Errore:', err);
  process.exit(1);
});
