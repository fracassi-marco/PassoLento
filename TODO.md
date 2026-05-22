Priorità alta
Immagini non ottimizzate - Tutto il sito usa <img> invece di next/image. Perdi srcset automatici, lazy loading, formati moderni (WebP/AVIF) e dimensionamento adattivo. Impatto diretto su LCP e peso pagina. File coinvolti: page.tsx, BlogPostCard.tsx, tutti i post blog.

Sorting che muta gli array importati - In page.tsx:102 e page.tsx:114 gli array JSON vengono ordinati in-place con .sort(), mutando i dati a livello di modulo. Servono copie: .slice().sort(...).

Non-null assertions pericolose - I post blog fanno blogPosts.find(...)! senza fallback. Se slug e dati divergono, il build crasha. Meglio un guard con notFound().

Sitemap e robots manuali - Il sitemap.xml è statico e rischia di andare fuori sync. Next.js 15 supporta generazione programmatica da app/sitemap.ts.

Blog listing interamente client-side - blog/page.tsx è 'use client' per i filtri, ma tutto il contenuto statico viene idratato inutilmente. Meglio separare i filtri in un piccolo componente client e tenere il resto server-rendered.

Priorità media
DONE CSS globale molto grande con duplicazioni - globals.css ha selettori duplicati (hero, blog-grid, back-link in più punti). Meglio deduplicare e spostare stili per-route in CSS Modules.

Nessun skip-link per accessibilità - Gli stili .skip-link esistono nel CSS ma nessun elemento viene renderizzato. Gli utenti da tastiera devono tabbare l'intera navbar.

Cookie banner senza semantica dialog - CookieBanner.tsx non ha role="dialog", aria-label, né gestione del focus. Problematico per screen reader.

DONE Metadata mancanti per il blog index - blog/page.tsx non esporta metadata, si affida solo ai default ereditati.

DONE OG image probabilmente rotta - page.tsx:8 punta a un'immagine che potrebbe non esistere in public.

Anno statico nel footer - Footer.tsx:5 ha l'anno hardcoded. Meglio calcolarlo dinamicamente.

Priorità bassa
File morto - page.module.css non è importato da nessuna parte.
allowJs: true nel tsconfig senza file JS nel progetto.
Chiave webpack nel tsconfig - non è un'opzione TypeScript, viene ignorata.
Structured data (JSON-LD) solo nel layout - Manca lo schema BlogPosting sui singoli articoli, utile per rich snippets su Google.
Feature suggerite per un blog di escursionismo
Schema BlogPosting su ogni articolo (autore, data, immagine, località)
Mappa interattiva o embed per i percorsi
Generazione sitemap automatica da blogPosts.json
Supporto prefers-reduced-motion per le animazioni CSS