import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import HikingInfo from "@/app/components/HikingInfo";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "val-di-fassa-pera-canazei")!;

export const metadata = defaultMetadata(
  "Val di Fassa: da Pera a Canazei",
  "Scopri la passeggiata lungo il fiume Avisio da Pera di Fassa a Canazei. Escursione facile tra panorami dolomitici e fontane di montagna cristalline.",
  "/blog/val-di-fassa-pera-canazei/",
  ["https://passolento.com/blog/2/montagna.webp"],
);

export default function ValDiFassaArticle() {
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
            "name": "Come fare la passeggiata da Pera di Fassa a Canazei",
            "description": "Guida passo per passo per la passeggiata lungo il fiume Avisio da Pera di Fassa a Canazei, nelle Dolomiti trentine.",
            "totalTime": "PT5H",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Scarpe comode" },
              { "@type": "HowToSupply", "name": "Borraccia" },
              { "@type": "HowToSupply", "name": "Crema solare e cappello" },
              { "@type": "HowToSupply", "name": "Pranzo al sacco o denaro per ristorante a Canazei" },
            ],
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Raggiungi Pera di Fassa", "text": "Raggiungi il borgo di Pera di Fassa, in Val di Fassa (Trento, Trentino-Alto Adige). Parcheggia nel paese." },
              { "@type": "HowToStep", "position": 2, "name": "Imbocca il sentiero sterrato lungo l'Avisio", "text": "Imbocca il sentiero sterrato che costeggia il fiume Avisio in direzione Canazei. È ben segnalato e segue l'acqua per tutto il percorso di andata." },
              { "@type": "HowToStep", "position": 3, "name": "Cammina fino a Canazei con soste alle fontane", "text": "Percorri i 10 km di sentiero sterrato godendo dei panorami sulle Dolomiti — Gruppo del Sella, Sassolungo, Monti Pallidi. Fermati alle fontane di acqua freschissima lungo il percorso." },
              { "@type": "HowToStep", "position": 4, "name": "Sosta pranzo a Canazei", "text": "Raggiungi Canazei e concediti una pausa pranzo in paese." },
              { "@type": "HowToStep", "position": 5, "name": "Ritorno a Pera di Fassa", "text": "Torna a Pera di Fassa seguendo in parte la strada asfaltata panoramica che offre prospettive diverse sulla valle." },
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
            src="/blog/2/montagna.webp"
            alt="Panorama delle Dolomiti dalla Val di Fassa"
            width={800}
            height={450}
                style={{ width: '100%', height: 'auto' }}
            />

          {/* Introduzione */}
          <div className="article-intro">
            <p className="lead">
              La <strong>Val di Fassa</strong> è una delle gemme più preziose delle Dolomiti, e oggi voglio condividere con voi un'esperienza di hiking che mi ha lasciato senza parole: la passeggiata che collega <strong>Pera di Fassa a Canazei</strong>, seguendo il corso del fiume Avisio attraverso un sentiero che regala panorami mozzafiato e momenti di pura serenità.
            </p>
            <p>
              Un percorso di <strong>20 km andata e ritorno</strong> con <strong>dislivello minimo</strong>, difficoltà <strong>facile</strong>, adatto a tutti — famiglie, bambini, principianti. Durata: <strong>4-5 ore</strong> incluse soste e pranzo.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Il Percorso: Un Viaggio tra Natura e Tradizione</h2>
            <p>
              La camminata inizia dal pittoresco borgo di <strong>Pera di Fassa</strong>, uno dei centri più caratteristici della valle. Il sentiero si snoda principalmente lungo il fiume Avisio, offrendo un'esperienza unica che combina la tranquillità dell'acqua corrente con la maestosità delle vette dolomitiche che si stagliano all'orizzonte.
            </p>

            <blockquote className="article-quote">
              "In montagna, ogni passo è una scoperta, ogni sosta una meditazione" - Filosofia del PassoLento
            </blockquote>

            <h3>L'Andata: Immersi nella Natura Selvaggia</h3>
            <p>
              Il sentiero dell'andata è completamente <strong>sterrato</strong> e rappresenta la parte più suggestiva dell'escursione. Camminando su questo tracciato naturale, si ha la sensazione di essere completamente immersi nella natura incontaminata della Val di Fassa.
            </p>
            
            <p>
              Il percorso costeggia fedelmente il <strong>fiume Avisio</strong>, e il dolce mormorio dell'acqua che scorre accompagna ogni passo. La bellezza di questo tratto risiede proprio nella sua semplicità: il sentiero si insinua tra prati verdi, piccoli boschi di conifere e radure che si aprono improvvisamente per rivelare panorami spettacolari.
            </p>
            
            <img
              src="/blog/2/avisio.webp"
              alt="Il sentiero sterrato lungo il fiume Avisio"
              width={800}
              height={450}
                  style={{ width: '100%', height: 'auto' }}
            />
            <figcaption>Il sentiero sterrato dell'andata, dove natura e tranquillità si fondono</figcaption>

            <h3>I Panorami delle Dolomiti</h3>
            <p>
              Durante la camminata, lo sguardo è costantemente attirato dalle <strong>imponenti vette</strong> che circondano la valle. Le Dolomiti qui mostrano tutta la loro magnificenza: il Gruppo del Sella con le sue pareti verticali, il Sassolungo che domina la valle con la sua forma inconfondibile, e i Monti Pallidi che cambiano colore durante le diverse ore del giorno.
            </p>
            
            <p>
              Particolarmente suggestivo è il momento in cui, dopo una curva del sentiero, si apre davanti agli occhi il panorama completo di <strong>Canazei</strong>, incastonato come un gioiello tra le montagne.
            </p>

            <img
            src="/blog/2/cascatelle.webp"
            alt="Vista panoramica verso Canazei circondata dalle Dolomiti"
            width={800}
            height={450}
                style={{ width: '100%', height: 'auto' }}
            />

            <h2>Le Fontane: Oasi di Freschezza</h2>
            <p>
              Uno degli aspetti più piacevoli di questa passeggiata sono le numerose <strong>fontane di acqua freschissima</strong> che si incontrano lungo il percorso. Queste sorgenti naturali rappresentano una vera benedizione, soprattutto nelle giornate più calde dell'estate.
            </p>
            
            <ul className="article-list">
              <li><strong>Purezza cristallina:</strong> L'acqua sgorga direttamente dalle sorgenti montane</li>
              <li><strong>Freschezza:</strong> Temperatura costante anche nelle giornate più calde</li>
              <li><strong>Mineralità:</strong> Il sapore racconta il viaggio attraverso le rocce dolomitiche</li>
              <li><strong>Gratuità:</strong> Un dono della montagna per tutti i viandanti</li>
            </ul>

            <div className="article-tip">
              <h4>💧 Consiglio di PassoLento</h4>
              <p>Porta sempre una borraccia: ogni fontana è un'occasione per una pausa rigenerante. L'acqua di montagna ha un sapore unico che solo chi cammina lentamente può davvero apprezzare.</p>
              <p>Fermati, ascolta il suono dell'acqua, senti la sua freschezza: è parte integrante dell'esperienza di camminata contemplativa.</p>
            </div>

            <h3>Il Ritorno: Comodità e Riflessione</h3>
            <p>
              Il percorso di ritorno segue in parte la <strong>strada asfaltata</strong>, offrendo un'esperienza diversa ma altrettanto piacevole. Questa sezione del tragitto permette di camminare con maggiore comodità e di concentrarsi completamente sui panorami, senza dover prestare particolare attenzione al terreno sotto i piedi.
            </p>

            <p>
              La strada asfaltata offre anche punti di vista leggermente diversi rispetto al sentiero dell'andata, permettendo di apprezzare la valle da prospettive nuove e di scattare fotografie che immortalano la bellezza delle Dolomiti da angolazioni differenti.
            </p>

            <img
            src="/blog/2/fontana.webp"
            alt="Una delle caratteristiche fontane lungo il percorso"
            width={800}
            height={450}
                style={{ width: '100%', height: 'auto' }}
            />

            <h2>Un'Esperienza per Tutti</h2>
            <p>
              Quello che rende speciale questa passeggiata è la sua <strong>accessibilità</strong>. Non serve essere esperti escursionisti per godere di questa esperienza: il percorso è adatto a famiglie con bambini, persone di tutte le età e anche a chi si avvicina per la prima volta al mondo del trekking.
            </p>
            
            <p>
              La combinazione tra la facilità del percorso e la bellezza dei panorami la rende una delle camminate più gratificanti che si possano fare in Val di Fassa, perfetta per chi vuole immergersi nella natura dolomitica senza affrontare difficoltà tecniche particolari.
            </p>

            <HikingInfo {...post.infoEscursione!} />

            <FAQSection items={[
              {
                question: "La passeggiata da Pera di Fassa a Canazei è adatta alle famiglie?",
                answer: "Sì, è adatta a tutti — famiglie con bambini, anziani e principianti. È un percorso facile di 20 km andata e ritorno con dislivello minimo lungo il fiume Avisio. Non richiede equipaggiamento tecnico."
              },
              {
                question: "Quanto tempo ci vuole per andare da Pera di Fassa a Canazei a piedi?",
                answer: "L'escursione completa dura 4-5 ore, incluse soste e pranzo a Canazei. Il percorso è di circa 20 km andata e ritorno (10 km per senso di marcia)."
              },
              {
                question: "Quando è il momento migliore per la passeggiata in Val di Fassa?",
                answer: "Da aprile a ottobre. Il periodo ideale è l'estate per godere delle fontane rinfrescanti lungo il percorso e dei panorami sulle Dolomiti — Sassolungo, Gruppo del Sella, Monti Pallidi."
              },
              {
                question: "Dove si parcheggia a Pera di Fassa?",
                answer: "Pera di Fassa si trova in Val di Fassa, in provincia di Trento (Trentino-Alto Adige). Il paese dispone di parcheggi pubblici dal quale si imbocca il sentiero sterrato lungo l'Avisio."
              },
            ]} />

            <h3>Cosa Portare</h3>
            <ul className="article-list">
              <li><strong>Scarpe comode:</strong> Anche non tecniche, basta che siano adatte alla camminata</li>
              <li><strong>Borraccia:</strong> Da riempire alle fontane lungo il percorso</li>
              <li><strong>Crema solare e cappello:</strong> Protezione essenziale in montagna</li>
              <li><strong>Macchina fotografica:</strong> Per immortalare i panorami mozzafiato</li>
              <li><strong>Spirito contemplativo:</strong> L'ingrediente più importante per il passo lento</li>
            </ul>

          </div>

        </div>
      </section>
      <section className="article-cta">
        <h3>Vuoi scoprire le montagne con PassoLento?</h3>
        <p>Unisciti a me in una delle prossime escursioni guidate alla scoperta delle Dolomiti. Insieme esploreremo il significato profondo del camminare lento tra le più belle vette.</p>
        <Button 
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sulla Val di Fassa e sono interessato alle tue escursioni nelle Dolomiti"
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