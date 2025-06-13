const fs = require('fs');
const path = require('path');

// Verifica che le cartelle esistano
function ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Creata cartella: ${dir}`);
    }
}

// Funzione per leggere i componenti con gestione errori
function readComponent(componentName) {
    try {
        const componentPath = path.join(__dirname, 'components', `${componentName}.html`);
        if (!fs.existsSync(componentPath)) {
            console.log(`⚠️  File non trovato: ${componentPath}`);
            return `<!-- Componente ${componentName} non trovato -->`;
        }
        return fs.readFileSync(componentPath, 'utf-8');
    } catch (error) {
        console.error(`❌ Errore nel leggere ${componentName}:`, error.message);
        return `<!-- Errore nel componente ${componentName} -->`;
    }
}

// Funzione per leggere il contenuto template
function readTemplate(templateName) {
    try {
        const templatePath = path.join(__dirname, 'templates', `${templateName}.html`);
        if (!fs.existsSync(templatePath)) {
            console.log(`⚠️  Template non trovato: ${templatePath}`);
            return `<!-- Template ${templateName} non trovato -->`;
        }
        return fs.readFileSync(templatePath, 'utf-8');
    } catch (error) {
        console.error(`❌ Errore nel leggere template ${templateName}:`, error.message);
        return `<!-- Errore nel template ${templateName} -->`;
    }
}

// Crea le cartelle se non esistono
ensureDirectoryExists('./components');
ensureDirectoryExists('./templates');

console.log('🔧 Inizio build...');

// Template per le pagine
const templates = {
    index: {
        title: 'PassoLento - Marco Fracassi | Guida Hiking nelle Dolomiti',
        description: 'Scopri le Dolomiti con PassoLento. Marco Fracassi, guida hiking certificata tra Trento e Rivamonte Agordino. Escursioni consapevoli nelle Dolomiti trentine e bellunesi.',
        canonical: 'https://passolento.com',
        ogType: 'website',
        keywords: 'hiking dolomiti, camminate trento, guida hiking, escursioni dolomiti, trekking belluno, PassoLento, Marco Fracassi, cammino lento'
    },
    blog: {
        title: 'Blog PassoLento - Guide e Consigli per Hiking nelle Dolomiti',
        description: 'Guide pratiche, consigli per l\'escursionismo e articoli sulla filosofia del cammino lento nelle Dolomiti. Scopri tutti gli articoli del blog PassoLento di Marco Fracassi.',
        canonical: 'https://passolento.com/blog.html',
        ogType: 'website',
        keywords: 'blog hiking dolomiti, guide trekking, consigli nordic walking, PassoLento blog, Marco Fracassi articoli'
    },
    privacy: {
        title: 'PassoLento - Informativa sulla Privacy',
        description: 'Informativa sulla Privacy e sul trattamento dei dati',
        canonical: 'https://passolento.com/privacy_policy.html',
        ogType: 'website',
        keywords: 'hiking dolomiti, guide trekking, consigli nordic walking, PassoLento, privacy polici, informativa privacy'
    }
};

// Leggi i componenti
console.log('📖 Leggo i componenti...');
const head = readComponent('head');
const header = readComponent('header');
const footer = readComponent('footer');
const cookieBanner = readComponent('cookie-banner');

// Leggi i template
console.log('📖 Leggo i template...');
const indexContent = readTemplate('index-content');
const blogContent = readTemplate('blog-content');
const privacyContent = readTemplate('privacy_policy-content');

// Funzione per generare una pagina
function generatePage(pageName, content, template) {
    const html = `<!DOCTYPE html>
<html lang="it">

<head>
    ${head}
    
    <!-- SEO Meta Tags -->
    <title>${template.title}</title>
    <meta name="description" content="${template.description}">
    <meta name="keywords" content="${template.keywords}">
    <meta name="author" content="Marco Fracassi">

    <!-- Open Graph (Facebook/Social) -->
    <meta property="og:title" content="${template.title}">
    <meta property="og:description" content="${template.description}">
    <meta property="og:image" content="https://passolento.com/dolomiti-bellunesi.jpg">
    <meta property="og:url" content="${template.canonical}">
    <meta property="og:type" content="${template.ogType}">
    <meta property="og:locale" content="it_IT">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${template.title}">
    <meta name="twitter:description" content="${template.description}">
    <meta name="twitter:image" content="https://passolento.com/dolomiti-bellunesi.jpg">

    <!-- Canonical URL -->
    <link rel="canonical" href="${template.canonical}">
</head>

<body>
    ${cookieBanner}
    
    ${header}
    
    <main>
        ${content}
    </main>

    ${footer}
</body>

</html>`;

    try {
        fs.writeFileSync(`${pageName}.html`, html);
        console.log(`✅ Generato ${pageName}.html`);
    } catch (error) {
        console.error(`❌ Errore nel generare ${pageName}.html:`, error.message);
    }
}

generatePage('index', indexContent, templates.index);
generatePage('privacy_policy', privacyContent, templates.privacy);
generatePage('blog', blogContent, templates.blog);

// Genera pagina articolo di esempio
const articleContent = readTemplate('article-content');
generatePage('article-preparazione', articleContent, {
    title: 'Come prepararsi per un\'escursione nelle Dolomiti | Blog PassoLento',
    description: 'Guida completa per prepararsi alle escursioni nelle Dolomiti: equipaggiamento, abbigliamento e filosofia PassoLento per un trekking consapevole.',
    canonical: 'https://passolento.com/article-preparazione.html',
    ogType: 'article',
    keywords: 'preparazione escursioni dolomiti, equipaggiamento trekking, abbigliamento montagna, PassoLento preparazione'
});

console.log('🎉 Build completato! Generati index.html, privacy_policy.html, blog.html e article-preparazione.html');