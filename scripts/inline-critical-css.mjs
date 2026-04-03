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

async function run() {
  const cssMap = await loadCssFiles();
  const htmlFiles = await findHtmlFiles(outDir);

  console.log(`CSS inline per ${htmlFiles.length} pagine...`);
  console.log(`File CSS trovati: ${Object.keys(cssMap).join(', ')}`);

  for (const file of htmlFiles) {
    let html = await readFile(file, 'utf-8');
    let inlinedCount = 0;

    for (const [cssFile, cssContent] of Object.entries(cssMap)) {
      const cssPath = `/_next/static/css/${cssFile}`;

      // Sostituisce <link rel="stylesheet" href="...css"> con <style> inline
      // Gestisce sia i link nel <head> che nel RSC payload
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
    }

    if (inlinedCount > 0) {
      await writeFile(file, html);
      console.log(`  ✓ ${file.replace(outDir, '')} (${inlinedCount} CSS inlined)`);
    }
  }

  console.log('CSS render-blocking eliminato!');
}

run().catch(err => {
  console.error('Errore:', err);
  process.exit(1);
});
