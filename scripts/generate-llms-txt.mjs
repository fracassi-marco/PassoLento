// Genera public/llms.txt dinamicamente a partire da src/data/blogPosts.json,
// così il file resta sempre sincronizzato con i contenuti pubblicati.
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const BASE_URL = 'https://passolento.com';

const blogPosts = JSON.parse(
  readFileSync(join(rootDir, 'src/data/blogPosts.json'), 'utf-8')
);

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

const escursioni = sortedPosts.filter(p => p.category === 'Escursioni');
const riflessioni = sortedPosts.filter(p => p.category !== 'Escursioni');

function formatEscursioneLine(post) {
  const info = post.infoEscursione;
  const url = `${BASE_URL}/blog/${post.slug}/`;
  const localita = [post.luogo, post.provincia, post.regione].filter(Boolean).join(', ');

  if (info) {
    return `- [${post.title}](${url}) - Percorso di ${info.lunghezza}, dislivello ${info.dislivello}, difficolt\u00e0 ${info.difficolta.toLowerCase()}. ${localita}.`;
  }

  return `- [${post.title}](${url}) - ${post.excerpt}${localita ? ` (${localita})` : ''}.`;
}

function formatRiflessioneLine(post) {
  const url = `${BASE_URL}/blog/${post.slug}/`;
  return `- [${post.title}](${url}) - ${post.excerpt}.`;
}

const escursioniSection = escursioni.map(formatEscursioneLine).join('\n');
const riflessioniSection = riflessioni.map(formatRiflessioneLine).join('\n');

const content = `# PassoLento - Guida Escursionistica nelle Dolomiti

> Marco Fracassi, guida escursionistica nelle Dolomiti bellunesi e trentine. Escursioni lente e consapevoli tra Veneto e Trentino-Alto Adige.

## Chi sono

Marco Fracassi \u00e8 una guida escursionistica con esperienza nelle Dolomiti, specializzato nel turismo lento e nella scoperta consapevole della montagna. PassoLento promuove escursioni guidate a passo d'uomo, dove la contemplazione vale quanto la destinazione.

Profili: [Komoot](https://www.komoot.com/user/645771041343) - [Facebook](https://www.facebook.com/profile.php?id=61577747603882&locale=it_IT)

## Contenuti disponibili

### Guide Escursionistiche

${escursioniSection}

### Riflessioni

${riflessioniSection}

### Tracce GPX

Tracce GPS scaricabili per le escursioni documentate: [${BASE_URL}/tracce-gpx/](${BASE_URL}/tracce-gpx/)

### Escursioni Guidate

Calendario eventi e prenotazioni escursioni di gruppo: [${BASE_URL}](${BASE_URL})

## Area geografica

Dolomiti Bellunesi e Dolomiti Trentine - Veneto e Trentino-Alto Adige, Italia.

## Contatto

Per informazioni su escursioni guidate: ${BASE_URL}
`;

writeFileSync(join(rootDir, 'public/llms.txt'), content, 'utf-8');

console.log(`llms.txt generato con ${sortedPosts.length} articoli (${escursioni.length} escursioni, ${riflessioni.length} riflessioni).`);
