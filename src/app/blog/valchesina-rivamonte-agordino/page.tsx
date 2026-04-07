import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import HikingInfo from "@/app/components/HikingInfo";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "valchesina-rivamonte-agordino")!;

export const metadata = defaultMetadata(
  "Valchesina: Passeggiata delle Fontane",
  "Scopri la passeggiata di Valchesina a Rivamonte Agordino. Escursione contemplativa tra fontane secolari e la potenza dell'acqua nelle Dolomiti Bellunesi.",
  "/blog/valchesina-rivamonte-agordino/",
  ["https://passolento.com/blog/1/fontana-1.webp"],
);

export default function ValchesinaArticle() {
  return (
    <article className="blog-article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": `https://passolento.com${post.image}`,
            "author": { "@type": "Person", "name": "Marco Fracassi", "url": "https://passolento.com" },
            "publisher": { "@type": "Organization", "name": "PassoLento", "url": "https://passolento.com" },
            "datePublished": post.date,
            "dateModified": post.date,
            "url": `https://passolento.com/blog/${post.slug}/`,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://passolento.com/blog/${post.slug}/` }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Come fare la Passeggiata delle Fontane a Valchesina",
            "description": "Guida passo per passo per la passeggiata tra le fontane storiche di Valchesina a Rivamonte Agordino, nelle Dolomiti bellunesi.",
            "totalTime": "PT1H30M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Scarpe comode da camminata" },
              { "@type": "HowToSupply", "name": "Borraccia da riempire alle fontane" },
            ],
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Raggiungi Rivamonte Agordino", "text": "Raggiungi il centro di Rivamonte Agordino, in provincia di Belluno (Veneto). Parcheggia nel paese." },
              { "@type": "HowToStep", "position": 2, "name": "Imbocca il sentiero per Valchesina", "text": "Prendi la strada di Valchesina che lascia il paese diventando presto sterrata. Costeggia il torrente e incontra le prime fontane storiche." },
              { "@type": "HowToStep", "position": 3, "name": "Percorri il sentiero delle fontane", "text": "Cammina lentamente lungo i 3 km del percorso, fermandoti ad ogni fontana. Ogni sorgente ha carattere diverso: vasca di legno, pietra, getti multipli." },
              { "@type": "HowToStep", "position": 4, "name": "Ritorna tra le vie del paese", "text": "Rientra nel centro storico di Rivamonte esplorando le viette dove l'acqua sgorga dalle fontane di pietra con getti multipli." },
              { "@type": "HowToStep", "position": 5, "name": "Ritorno al punto di partenza", "text": "Completa l'anello tornando al punto di partenza." },
            ],
          })
        }}
      />
      <BlogHero
        title={post.title} 
        subtitle={post.excerpt}
      /> 

      {/* Tag località */}
      <section className="article-location">
        <div className="container">
          <LocationTags regione={post.regione} provincia={post.provincia} luogo={post.luogo} />
        </div>
      </section>

      {/* Contenuto dell'articolo */}
      <section className="article-content">
        <div className="container">  
        <img
            src="/blog/1/fontana-1.webp"
            alt="La fontana con la sua vasca di pietra antica"
            width={800}
            height={450}
                style={{ width: '100%', height: 'auto' }}
            />

          {/* Introduzione */}
          <div className="article-intro">
            <p className="lead">
              Nel cuore delle Dolomiti Bellunesi, a <strong>Rivamonte Agordino</strong>, si nasconde un tesoro che pochi conoscono: la passeggiata di <strong>Valchesina</strong>. Un percorso dove il tempo sembra essersi fermato, dove l'acqua sussurra storie antiche e dove il passo lento diventa meditazione.
            </p>
            <p>
              Un <strong>anello di 3 km</strong> con soli <strong>80 m di dislivello</strong>, difficoltà <strong>facilissima</strong>, completabile in circa <strong>1 ora e mezza</strong>. Adatto a tutti, dai bambini agli anziani.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Il Richiamo dell'Acqua</h2>
            <p>
              La valle di Valchesina è un inno alla potenza silenziosa dell'acqua. Lungo il sentiero, che si snoda dolcemente tra facili sentieri e strade di paese, incontriamo le <strong>fontane storiche</strong> che da secoli dissetano viandanti e animali. Ogni fontana ha la sua personalità, il suo suono unico, la sua storia da raccontare.
            </p>

            <blockquote className="article-quote">
              "L'acqua è la forza motrice di tutta la natura" - Leonardo da Vinci
            </blockquote>

            <h3>La Prima Fontana: La Guardiana</h3>
            <p>
              Appena lasciato il centro di Rivamonte, si prende la strada di Valchesina con un sentiero che presto diventa sterrato. Pochi minuti attraverso il sentiero che costeggia il torrente, ci imbattiamo nella prima delle fontane: <em>La Guardiana della cascata</em>. Il suo getto cristallino sgorga da una vasca di legno locale, levigata dal tempo e dalle mani di generazioni.
            </p>
            
            <p>
              Qui facciamo la prima sosta. Non c'è fretta. Il <strong>passo lento</strong> ci insegna ad apprezzare ogni dettaglio: il suono dell'acqua che cade, il muschio che cresce sui bordi della vasca, il riflesso del cielo nell'acqua ferma. Assaggiamo l'acqua fresca e pura, sentendo il suo sapore minerale che parla di rocce dolomitiche e lunghi viaggi sotterranei.
            </p>

            <div className="article-image">
              <img
                src="/blog/1/fontana-guardiana.webp"
                alt="La Fontana Guardiana con la sua vasca di legno antico"
                width={800}
                height={450}
                    style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>La Fontana Guardiana, prima tappa del nostro viaggio contemplativo</figcaption>
            </div>

            <h3>Il Sentiero della Contemplazione</h3>
            <p>
              Proseguendo lungo il sentiero, ogni passo ci allontana dal rumore del mondo moderno. I nostri sensi si affinano: udiamo il canto degli uccelli, sentiamo il profumo del sottobosco, vediamo i giochi di luce che filtrano tra le foglie.
            </p>
            
            <p>
              Finisce il sentiero sterrato, si ritorna verso il paese per immergersi nelle sue viette. In alcune l'acqua sgorga da tre bocche di pietra, ognuna con un sapore leggermente diverso. È incredibile come l'acqua, percorrendo strade diverse nel sottosuolo, acquisisca sfumature uniche.
            </p>

            <img
            src="/blog/1/fontana-2.webp"
            alt="La fontana con la sua vasca a tre getti"
            width={800}
            height={450}
                style={{ width: '100%', height: 'auto' }}
            />

            <h2>La Lezione delle Fontane</h2>
            <p>
              Ogni fontana di Valchesina ci insegna qualcosa di prezioso:
            </p>
            
            <ul className="article-list">
              <li><strong>Pazienza:</strong> L'acqua ha impiegato anni per filtrare attraverso la roccia</li>
              <li><strong>Costanza:</strong> Goccia dopo goccia, ha modellato la pietra</li>
              <li><strong>Purezza:</strong> Il lungo viaggio l'ha resa cristallina</li>
              <li><strong>Generosità:</strong> Si offre gratuitamente a chiunque ne abbia bisogno</li>
              <li><strong>Abbondanza:</strong> Sgorga copiosa, fresca, non si ferma mai</li>
            </ul>

            <div className="article-tip">
              <h4>💧 Consiglio di PassoLento</h4>
              <p>Porta sempre una borraccia vuota: assaggiare l'acqua di ogni fontana è parte integrante dell'esperienza. Ogni sorso è una connessione diretta con il territorio e la sua storia geologica.</p>
              <p>Percepisci il potere dell'acqua, la sua grandezza che si unisce con l'ingegno dell'uomo per canalizzarla nella fontana.</p>
            </div>
        
            <p>
              In questo angolo di paradiso, comprendiamo il vero significato del <strong>passo lento</strong>: non è solo camminare più lentamente, è aprire i sensi, è lasciare che la natura ci parli, è ritrovare la connessione perduta con gli elementi.
            </p>

            <img
            src="/blog/1/fontana-3.webp"
            alt="La fontana con la sedia in legno"
            width={800}
            height={450}
                style={{ width: '100%', height: 'auto' }}
            />

            <HikingInfo {...post.infoEscursione!} />

            <FAQSection items={[
              {
                question: "La Passeggiata delle Fontane a Valchesina è adatta ai bambini?",
                answer: "Sì, è adatta a tutta la famiglia. Il percorso è facilissimo: solo 3 km con 80 m di dislivello, su sterrato e strade di paese, completabile in circa 1 ora e mezza. Perfetta per bambini e anziani."
              },
              {
                question: "Quando è il momento migliore per visitare Valchesina?",
                answer: "Il momento migliore è in primavera ed estate, quando le fontane storiche sono al massimo della portata. Il percorso è piacevole in ogni stagione, ma in primavera l'acqua abbonda e il paesaggio è rigoglioso."
              },
              {
                question: "Dove si parcheggia per la passeggiata di Valchesina?",
                answer: "Si parcheggia nel centro di Rivamonte Agordino, in provincia di Belluno (Veneto). Da lì si raggiunge Valchesina a piedi in pochi minuti, imboccando la strada che diventa presto sentiero sterrato."
              },
              {
                question: "Cosa portare per la passeggiata di Valchesina?",
                answer: "Non è necessario equipaggiamento tecnico. Bastano scarpe comode da camminata e una borraccia vuota: le fontane storiche lungo il percorso offrono acqua freschissima e purissima."
              },
            ]} />

          </div>

        </div>
      </section>
      <section className="article-cta">
        <h3>Vuoi vivere questa esperienza?</h3>
        <p>Unisciti a me in una delle prossime escursioni guidate alla scoperta di Valchesina. Insieme esploreremo il significato profondo del camminare lento e della contemplazione.</p>
        <Button 
          href="https://wa.me/393471364144?text=Ciao Marco! Ho visitato PassoLento e sono interessato alle tue escursioni nelle Dolomiti"
          variant="neutral"
          size="large"
          icon="fa-mountain"
        >
          Prenota la tua escursione
        </Button>
      </section>
    </article>
  );
}