import BlogHero from "@/app/components/BlogHero";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "agordo-conca-agordina")!;

export const metadata = defaultMetadata(
  "Agordo: la Conca Agordina che le Guide Turistiche Dimenticano",
  "Agordo e la Conca Agordina, nel cuore delle Dolomiti Bellunesi: panorami da cartolina, paesi autentici come Rivamonte Agordino, e la bellezza di una montagna ancora senza folla.",
  "/blog/agordo-conca-agordina/",
  ["https://passolento.com/blog/11/agordo-borgo.webp"],
);

export default function AgordoConcaAgordina() {
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
            "author": { "@type": "Person", "name": "Marco Fracassi", "url": "https://passolento.com", "sameAs": ["https://www.komoot.com/user/645771041343", "https://www.facebook.com/profile.php?id=61577747603882&locale=it_IT"] },
            "publisher": { "@type": "Organization", "name": "PassoLento", "url": "https://passolento.com" },
            "datePublished": post.date,
            "dateModified": post.date,
            "url": `https://passolento.com/blog/${post.slug}/`,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://passolento.com/blog/${post.slug}/` }
          })
        }}
      />
      <BlogHero
        title={post.title}
        subtitle={post.excerpt}
      />

      <Breadcrumbs items={[{ name: "Blog", url: "/blog/" }, { name: post.title, url: `/blog/${post.slug}/` }]} />

      <section className="article-location">
        <div className="container">
          <LocationTags regione={post.regione} provincia={post.provincia} luogo={post.luogo} />
        </div>
      </section>

      <section className="article-content">
        <div className="container">

          {/* Introduzione */}
          <div className="article-intro">
            <p className="lead">
              C&apos;è un momento, guidando verso <strong>Agordo</strong> lungo la statale che risale la valle
              del Cordevole, in cui le montagne si aprono all&apos;improvviso e la strada scende in una conca
              verde, circondata da pareti di roccia che sembrano uscite da un dipinto. È la <strong>Conca
              Agordina</strong>, e la prima cosa che colpisce non è solo la bellezza del paesaggio: è quanto
              poco affollata sia, rispetto a quello che meriterebbe.
            </p>
            <p>
              Vivo tra Trento e Rivamonte Agordino, e questa conca la attraverso spesso, in ogni stagione.
              Eppure non smette mai di stupirmi che un luogo così spettacolare resti, nei mesi di punta,
              così lontano dalle code di auto e dai parcheggi pieni che si vedono a poche decine di chilometri
              da qui.
            </p>
          </div>

          <div className="article-body">
            <h2>Agordo, il Paese che Guarda le Sue Montagne senza Fretta</h2>

            <div className="article-image">
              <img
                src="/blog/11/agordo-borgo.webp"
                alt="Il borgo di Agordo, nel cuore della Conca Agordina, circondato dalle montagne delle Dolomiti Bellunesi"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>
                Agordo, nella sua conca circondata dalle montagne (foto: Circolo fotografico agordino, CC BY-SA 3.0,{" "}
                <a href="https://commons.wikimedia.org/wiki/File:Agordo_(BL)_Italy_village.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>)
              </figcaption>
            </div>
            <p>
              <strong>Agordo</strong> è il capoluogo naturale di questa zona: una cittadina raccolta, con
              un centro storico ordinato attorno alla sua bella piazza principale, che d&apos;estate ospita
              mercati e d&apos;inverno si accende delle luci del Natale senza mai perdere l&apos;aria di paese
              vero. Non è pensata per il turista di passaggio, ed è proprio questo che la rende preziosa: chi
              ci arriva trova negozi, bar e persone che vivono la montagna tutto l&apos;anno, non solo ad
              agosto.
            </p>
            <p>
              Alzando lo sguardo dalla piazza, le pareti che chiudono la conca - tra cui si riconosce la sagoma
              della <strong>Civetta</strong> più a nord - ricordano che qui si è già dentro le <strong>Dolomiti
              Bellunesi</strong>, patrimonio UNESCO, con tutto il loro carico di roccia, boschi e silenzio.
            </p>

            <blockquote className="article-quote">
              &quot;Le Dolomiti più famose si raggiungono in coda. Quelle dell&apos;Agordino si raggiungono
              in silenzio.&quot;
            </blockquote>

            <h2>La Conca Agordina: uno Spettacolo senza Prezzo del Biglietto</h2>
            <p>
              Il termine <strong>Conca Agordina</strong> non è solo geografico: è il modo in cui chi vive qui
              chiama l&apos;insieme di paesi, boschi e valli che si raccolgono attorno ad Agordo - da{" "}
              <strong>Taibon Agordino</strong> a <strong>Voltago Agordino</strong>, da <strong>Rivamonte
              Agordino</strong> fino ai versanti che salgono verso Alleghe e il Civetta. È un territorio
              che ha tutti gli ingredienti delle mete dolomitiche più celebri - cime imponenti, rifugi,
              malghe, torrenti - ma senza il prezzo, in termini di folla e traffico, che spesso si paga
              altrove.
            </p>
            <p>
              Camminare lentamente in questa conca significa poter fermarsi in mezzo a un sentiero senza
              dover fare spazio a chi arriva da dietro, poter guardare un panorama senza la fila per lo
              scatto perfetto, poter sentire il rumore dell&apos;acqua di un torrente invece del vociare di
              un gruppo. È esattamente la filosofia che porto avanti con <em>PassoLento</em>: la montagna
              vissuta a un ritmo umano, non a quello dei grandi numeri.
            </p>

            <div className="article-tip">
              <h4>🏔️ Consiglio di PassoLento</h4>
              <p>
                Se vuoi scoprire l&apos;Agordino, non limitarti al passaggio in auto verso mete più note:
                fermati almeno mezza giornata ad Agordo e nei paesi vicini. È qui che si capisce davvero
                cosa significhi vivere la montagna, non solo attraversarla.
              </p>
            </div>

            <h2>Rivamonte Agordino, un Paese tra le Fontane e il Silenzio</h2>
            <p>
              A pochi chilometri da Agordo, arroccato su un versante boscoso, si trova <strong>Rivamonte
              Agordino</strong>, il paese dove vivo quando non sono a Trento. È uno di quei borghi che non
              compaiono nelle guide patinate, ma che custodiscono un patrimonio fatto di piccole cose:
              fontane storiche che sgorgano da secoli, viette di pietra, e un silenzio che a Trento, come
              nelle grandi valli turistiche, è ormai difficile trovare.
            </p>
            <p>
              Chi vuole scoprirlo da vicino può leggere il racconto della{" "}
              <a href="/blog/valchesina-rivamonte-agordino/">passeggiata delle fontane di Valchesina</a>,
              una delle escursioni più semplici e allo stesso tempo più autentiche che propongo con
              PassoLento.
            </p>

            <blockquote className="article-quote">
              &quot;Non tutti i paesi hanno bisogno di essere famosi per essere pieni di bellezza.
              Rivamonte Agordino è la prova che basta saperla cercare.&quot;
            </blockquote>

            <div className="article-image">
              <img
                src="/blog/11/agordo-panorama-serale.webp"
                alt="Panorama serale di Agordo con le montagne della Conca Agordina sullo sfondo"
                width={800}
                height={524}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>
                Agordo al tramonto: la luce della sera accende le pareti che chiudono la conca (foto: Circolo
                fotografico agordino, CC BY-SA 3.0,{" "}
                <a href="https://commons.wikimedia.org/wiki/File:Agordo_panorama_serale.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>)
              </figcaption>
            </div>

            <h2>Perché l&apos;Agordino Resta Fuori dalle Rotte più Battute</h2>
            <p>
              Non è un caso che la Conca Agordina sia meno nota di altre zone delle Dolomiti: non ha grandi
              impianti sciistici da cartolina, non ha villaggi costruiti apposta per il turismo di massa,
              non ha (per fortuna) le stesse infrastrutture pensate per accogliere decine di migliaia di
              visitatori al giorno. Ha, invece, paesi che vivono di miniera, di agricoltura di montagna,
              di piccola industria - una montagna &quot;vera&quot;, prima ancora che turistica.
            </p>
            <p>
              Per chi cerca il selfie perfetto in mezzo alla folla, questo può essere un limite. Per chi
              cerca invece un&apos;esperienza di montagna autentica, lenta, senza il rumore di fondo dei
              grandi numeri, è esattamente il contrario: un privilegio ancora alla portata di tutti.
            </p>

            <h2>Cosa Fare ad Agordo e nella Conca Agordina</h2>
            <p>
              Non serve un&apos;escursione impegnativa per innamorarsi di questa zona. Bastano una
              passeggiata nel centro storico di Agordo, una sosta alle fontane di Rivamonte Agordino, o
              una delle camminate più semplici che propongo con PassoLento - come il{" "}
              <a href="/blog/giro-lago-alleghe/">giro del Lago di Alleghe</a> o l&apos;escursione tra{" "}
              <a href="/blog/cascate-pont-col-di-pra/">Col di Prà e le Cascate di Pont</a>, entrambe a un
              passo dalla conca - per capire perché questa zona meriti molto più spazio di quanto ne
              occupi oggi nelle guide turistiche.
            </p>
            <p>
              Ho raccolto tutte le escursioni che propongo in questa zona in un&apos;unica pagina dedicata:{" "}
              <a href="/escursioni-agordino/">escursioni in Agordino</a>, per chi vuole organizzare una
              visita più lunga e scoprire il territorio a piccoli passi.
            </p>

            <blockquote className="article-quote">
              &quot;La montagna più bella non è sempre quella con più recensioni. A volte è quella dietro
              casa, che nessuno ha ancora imparato a raccontare.&quot;
            </blockquote>

          </div>

          <FAQSection items={[
            {
              question: "Dove si trova Agordo?",
              answer: "Agordo è un comune in provincia di Belluno, in Veneto, nel cuore delle Dolomiti Bellunesi. È il centro principale della Conca Agordina e dell'Agordino, la zona che comprende paesi come Rivamonte Agordino, Taibon Agordino e Voltago Agordino."
            },
            {
              question: "Cos'è la Conca Agordina?",
              answer: "La Conca Agordina è il territorio pianeggiante circondato da montagne attorno ad Agordo, nelle Dolomiti Bellunesi. Comprende diversi paesi dell'Agordino e offre panorami montani di grande bellezza, con un turismo molto meno intenso rispetto ad altre zone delle Dolomiti."
            },
            {
              question: "Agordo è una meta turistica affollata?",
              answer: "No, a differenza di altre località dolomitiche molto conosciute, Agordo e la Conca Agordina restano relativamente fuori dalle rotte turistiche di massa, pur offrendo paesaggi e sentieri di grande valore paesaggistico."
            },
            {
              question: "Cosa vedere ad Agordo e nell'Agordino?",
              answer: "Oltre al centro storico di Agordo, vale la pena visitare paesi come Rivamonte Agordino con le sue fontane storiche, e dedicarsi a escursioni semplici nella zona, come il giro del Lago di Alleghe o la passeggiata alle Cascate di Pont vicino a Taibon Agordino."
            },
            {
              question: "Si possono fare escursioni guidate ad Agordo con PassoLento?",
              answer: "Sì, con PassoLento propongo escursioni consapevoli e a passo lento nella zona dell'Agordino, tra Agordo, Rivamonte Agordino e i paesi della Conca Agordina. Puoi trovare tutte le proposte nella pagina dedicata alle escursioni in Agordino."
            },
          ]} />

        </div>
      </section>

      <section className="article-cta">
        <h3>Vuoi scoprire l&apos;Agordino a passo lento?</h3>
        <p>
          Unisciti a me nelle escursioni PassoLento nella Conca Agordina: cammineremo piano, tra paesi
          autentici e panorami che non hanno bisogno di folla per essere spettacolari.
        </p>
        <Button
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo su Agordo e la Conca Agordina e vorrei saperne di più"
          variant="neutral"
          size="large"
          icon="fa-mountain"
        >
          Camminiamo insieme
        </Button>
      </section>
    </article>
  );
}
