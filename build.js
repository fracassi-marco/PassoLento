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
        title: 'PassoLento - Marco Fracassi | Guida Hiking & Nordic Walking Dolomiti',
        description: 'Scopri le Dolomiti con PassoLento. Marco Fracassi, guida hiking e nordic walking certificata tra Trento e Rivamonte Agordino. Escursioni consapevoli nelle Dolomiti trentine e bellunesi.',
        canonical: 'https://tuodominio.com',
        ogType: 'website',
        keywords: 'hiking dolomiti, nordic walking trento, guida hiking, escursioni dolomiti, trekking belluno, PassoLento, Marco Fracassi, cammino lento'
    },
    blog: {
        title: 'Blog PassoLento - Guide e Consigli per Hiking e Nordic Walking nelle Dolomiti',
        description: 'Guide pratiche, consigli per l\'escursionismo e articoli sulla filosofia del cammino lento nelle Dolomiti. Scopri tutti gli articoli del blog PassoLento di Marco Fracassi.',
        canonical: 'https://tuodominio.com/blog.html',
        ogType: 'website',
        keywords: 'blog hiking dolomiti, guide trekking, consigli nordic walking, PassoLento blog, Marco Fracassi articoli'
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
    <meta property="og:image" content="https://tuodominio.com/dolomiti-bellunesi.jpg">
    <meta property="og:url" content="${template.canonical}">
    <meta property="og:type" content="${template.ogType}">
    <meta property="og:locale" content="it_IT">

    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${template.title}">
    <meta name="twitter:description" content="${template.description}">
    <meta name="twitter:image" content="https://tuodominio.com/dolomiti-bellunesi.jpg">

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

// Genera entrambe le pagine
generatePage('index', indexContent, templates.index);
generatePage('blog', blogContent, templates.blog);

console.log('🎉 Build completato! Generati index.html e blog.html');