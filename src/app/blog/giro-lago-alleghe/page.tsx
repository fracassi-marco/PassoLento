import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import HikingInfo from "@/app/components/HikingInfo";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "giro-lago-alleghe")!;

export const metadata = defaultMetadata(
  "Giro del Lago di Alleghe: Ogni Passo è Vita",
  "Un anello lento di 5 km attorno al lago di Alleghe tra cigni, germani reali e le Dolomiti. Passeggiata facilissima adatta a tutti, bambini e passeggini inclusi.",
  "/blog/giro-lago-alleghe/",
  ["https://passolento.com/blog/6/lago-e-paese-di-alleghe.webp"],
);

export default function GiroLagoAlleghe() {
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
            "name": "Come fare il giro del lago di Alleghe",
            "description": "Guida passo per passo per la passeggiata ad anello attorno al lago di Alleghe, nelle Dolomiti bellunesi.",
            "totalTime": "PT1H30M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Scarpe comode da camminata" },
              { "@type": "HowToSupply", "name": "Borraccia" },
              { "@type": "HowToSupply", "name": "Abbigliamento a strati" },
            ],
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Parti da Alleghe", "text": "Raggiungi Alleghe (960 m s.l.m.) e imbocca il sentiero che costeggia il lago. Il percorso è segnalato e adatto a tutti." },
              { "@type": "HowToStep", "position": 2, "name": "La sponda nord del lago", "text": "Cammina lungo la riva settentrionale godendo delle prime vedute sulle Dolomiti che si specchiano nell'acqua. Rallenta: gli occhi vogliono tutto il tempo del mondo." },
              { "@type": "HowToStep", "position": 3, "name": "Gli ospiti del lago", "text": "Fermati ad osservare i cigni che scivolano sull'acqua, i germani reali che sguazzano tra le rive e, se sei fortunato, il nido di un cigno in cova. Le tartarughe si tuffano silenziose all'avvicinarsi dei passi." },
              { "@type": "HowToStep", "position": 4, "name": "La sponda sud e il ritorno", "text": "Completa l'anello percorrendo la sponda meridionale del lago fino a tornare ad Alleghe. Le montagne si mostrano da angolazioni sempre nuove, sempre sorprendenti." },
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

          {/* Introduzione */}
          <div className="article-intro">
            <p className="lead">
              Ci sono luoghi che non chiedono di essere conquistati. Chiedono solo di essere <strong>percorsi con lentezza</strong>, con gli occhi spalancati e il respiro calmo. Il <strong>lago di Alleghe</strong>, a 960 metri tra le Dolomiti bellunesi, è uno di questi luoghi. Un&apos;acqua ferma che riflette le montagne, una riva che custodisce la vita selvatica, un sentiero che gira attorno a tutto questo come se volesse abbracciarlo.
            </p>
            <p>
              Il <strong>giro del lago</strong> è un anello di <strong>5,3 km</strong> con soli <strong>84 m di dislivello</strong>, percorribile in <strong>circa un&apos;ora e mezza</strong>. Facilissimo, adatto a tutti — bambini, anziani, passeggini. Non è una sfida: è un invito.
            </p>
          </div>

          {/* Corpo dell'articolo */}
          <div className="article-body">

            <h2>Il Lago Nato da una Frana</h2>
            <p>
              Il lago di Alleghe non è sempre stato qui. Nacque nel <strong>1771</strong>, quando un enorme distacco di roccia dal Monte Piz sbarrò il corso del torrente Cordevole, creando questo specchio d&apos;acqua di quasi due chilometri. La natura può distruggere e creare nello stesso istante — e il lago di Alleghe ne è una testimonianza silenziosa e bellissima.
            </p>
            <p>
              Camminare attorno ad esso significa percorrere i bordi di una <strong>ferita trasformata in bellezza</strong>. L&apos;acqua ha coperto tutto con la sua calma. Le montagne si sono abituate al nuovo riflesso. E la vita ha colonizzato ogni riva, ogni canneto, ogni angolo tranquillo.
            </p>

            <blockquote className="article-quote">
              &quot;La natura non sbaglia mai. A volte semplicemente cambia forma.&quot;
            </blockquote>

            <h2>I Guardiani del Lago</h2>

            <div className="article-image">
              <img
                src="/blog/6/lago-alleghe-1.webp"
                alt="Il lago di Alleghe con le montagne Dolomitiche sullo sfondo"
                width={800}
                height={320}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il lago di Alleghe: uno specchio d&apos;acqua tra le Dolomiti</figcaption>
            </div>

            <p>
              Non fai molti passi prima che qualcosa catturi il tuo sguardo. Laggiù, sulla superficie piatta del lago, uno o due <strong>cigni bianchi </strong> si muovono con quella grazia lenta che sembra quasi arrogante — sanno di essere belli e non hanno fretta di dimostrarlo. Pescano con movimenti misurati, immergendo il collo nell&apos;acqua scura, poi tornando su con la stessa compostezza.
            </p>
            <p>
              Più vicini alla riva, tra i ciuffi di vegetazione acquatica, i <strong>germani reali </strong> sono tutto il contrario: vocianti, agitati, splendidamente caotici. Sguazzano, si inseguono, si scrollano l&apos;acqua di dosso in piccole esplosioni di gocce luminose. Guardare i germani è come guardare la gioia allo stato puro — non si preoccupano di niente, se non di essere completamente dentro all&apos;acqua, al momento, alla vita.
            </p>

            <h2>Il Nido che Cova il Futuro</h2>
            <p>
              Poi, se sei lento abbastanza — e solo se sei lento abbastanza — potresti vedere qualcosa di raro. Un <strong>nido di cigno</strong>, costruito ai bordi della riva tra i canneti, con una sagoma bianca e immobile sopra. Un cigno in cova.
            </p>
            <p>
              Fermarsi davanti a questa scena è una forma di privilegio. La natura non la mostra a chi corre. La mostra a chi cammina piano, a chi tiene gli occhi bassi e il rumore dentro. Dentro a quel nido c&apos;è del tempo futuro, delle vite che non esistono ancora. E il cigno le scalda con tutto il proprio corpo, <strong>paziente come il lago, immobile come le montagne</strong>.
            </p>

            <blockquote className="article-quote">
              &quot;La lentezza non è pigrizia. È il prezzo d&apos;ingresso per vedere le cose che contano.&quot;
            </blockquote>

            <h2>Le Tartarughe e il Tuffo Silenzioso</h2>

            <div className="article-image">
              <img
                src="/blog/6/lago-e-paese-di-alleghe.webp"
                alt="Il paese di Alleghe affacciato sul lago con le Dolomiti sullo sfondo"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il paese di Alleghe si specchia nel lago: ogni riva è un mondo da scoprire</figcaption>
            </div>

            <p>
              A tratti, camminando lungo la riva, un <strong>piccolo tuffo</strong> rompe il silenzio. Un tonfo soffice, quasi timido — e già non c&apos;è più niente. Solo cerchi concentrici sull&apos;acqua che si allargano e svaniscono. Sono le <strong>tartarughe</strong>, appostate al sole su un sasso o su un tronco, che all&apos;avvicinarsi dei passi si lasciano scivolare nell&apos;acqua con quella eleganza discreta che le appartiene da milioni di anni.
            </p>
            <p>
              Le tartarughe non aspettano di capire chi sei. Sentono le vibrazioni del terreno e si fidano dell&apos;istinto. C&apos;è qualcosa di profondamente onesto in questo: <strong>niente pretese, niente complicazioni</strong>. Un sole su cui scaldarsi, un lago in cui rifugiarsi. Il resto non serve.
            </p>

            <div className="article-tip">
              <h4>🦢 Consiglio di PassoLento</h4>
              <p>Cammina senza fretta lungo la riva e tieni gli occhi sui margini dell&apos;acqua, non solo sul centro del lago. Le tartarughe amano i tronchi sommersi e i sassi esposti al sole. I nidi dei cigni si nascondono tra i canneti. La vita selvatica si svela solo a chi la cerca con pazienza e passo leggero.</p>
            </div>

            <h2>Le Montagne che Rigenera</h2>

            <div className="article-image">
              <img
                src="/blog/6/alleghe-e-monte-civetta.webp"
                alt="Alleghe e il Monte Civetta, la maestosa parete dolomitica che sovrasta il lago"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il Monte Civetta domina il paesaggio: ogni sguardo verso l&apos;alto rigenera</figcaption>
            </div>

            <p>
              E poi ci sono loro: le <strong>montagne</strong>. Attorno al lago di Alleghe le Dolomiti sono ovunque — alte, verticali, impassibili. Il <strong>Monte Civetta</strong> a ovest con la sua parete di tremila metri, le cime che chiudono la valle a nord e a est. Alzare lo sguardo non è un gesto volontario: è automatico, inevitabile. Le montagne chiamano e gli occhi rispondono.
            </p>
            <p>
              Ogni angolo dell&apos;anello regala una prospettiva diversa. Le vette cambiano forma a seconda di dove ti trovi, il lago le riflette capovolte quando il vento tace. Ci sono momenti in cui ti fermi — non perché sei stanco, ma perché <strong>la bellezza è troppa da consumare camminando</strong>. Hai bisogno di stare fermo, di respirare, di lasciare che quel paesaggio entri dentro fino in fondo.
            </p>
            <p>
              Nelle <strong>mezze stagioni</strong> — aprile, maggio, settembre, ottobre — il cielo è spesso nitidissimo. L&apos;aria pulita dopo l&apos;inverno o il fresco dell&apos;autunno rende le montagne straordinariamente nitide: ogni parete, ogni canalone, ogni cresta si staglia contro il cielo come un disegno. E il lago è quasi sempre tranquillo, senza motoscafi, senza folla, senza rumori che coprano il canto degli uccelli.
            </p>

            <h2>Un Passo, Una Vita</h2>
            <p>
              Quando torni ad Alleghe dopo aver completato l&apos;anello, non senti la stanchezza di chi ha percorso una distanza. Senti qualcosa di diverso: una <strong>leggerezza strana</strong>, come se il lago ti avesse restituito qualcosa che non sapevi di aver perso. Un&apos;ora e mezza di passi lenti, di occhi aperti, di respiri profondi.
            </p>
            <p>
              Il giro del lago di Alleghe non è un&apos;impresa. Non ha graduatorie, non ha medaglie, non misura niente. È semplicemente <strong>un modo di stare al mondo per un&apos;ora e mezza</strong> — accanto all&apos;acqua, sotto le montagne, in mezzo alla vita che scorre senza aspettare nessuno.
            </p>
            <p>
              Ogni passo su questa riva è un ricordo che si forma da solo. Ogni sguardo verso le cime è una piccola guarigione. Ogni cigno, ogni germano, ogni tuffo di tartaruga è un promemoria che il mondo è pieno di cose belle — <strong>ma solo se cammini abbastanza piano da vederle</strong>.
            </p>

            <HikingInfo {...post.infoEscursione!} />

            <div className="gpx-download">
              <Button
                href="/gpx/giro_lago_alleghe.gpx"
                download="giro_lago_alleghe.gpx"
                variant="primary"
                size="medium"
                icon="fa-download"
              >
                Scarica traccia GPX
              </Button>
            </div>

            <FAQSection items={[
              {
                question: "Il giro del lago di Alleghe è adatto ai bambini e ai passeggini?",
                answer: "Sì, è uno dei percorsi più adatti a tutta la famiglia che esistano nelle Dolomiti. I 5,3 km con soli 84 m di dislivello e il fondo del sentiero lo rendono praticabile anche con passeggini e adatto ai bambini di ogni età."
              },
              {
                question: "Quanto tempo serve per fare il giro del lago di Alleghe?",
                answer: "Il percorso richiede circa un'ora e mezza, ma con le soste per osservare cigni, germani reali, tartarughe e per ammirare le Dolomiti si arriva facilmente a due ore. Non avere fretta: è proprio il punto."
              },
              {
                question: "Quando è il momento migliore per il giro del lago di Alleghe?",
                answer: "Le mezze stagioni — primavera (aprile-maggio) e autunno (settembre-ottobre) — sono il momento ideale: meno turisti, clima mite, cielo nitido per vedere le Dolomiti in tutto il loro splendore. In primavera si possono osservare i nidi degli uccelli acquatici."
              },
              {
                question: "Si possono vedere animali selvatici durante il giro del lago?",
                answer: "Sì, il lago di Alleghe ospita cigni, germani reali e tartarughe che vivono stabilmente sulle rive. Camminando lentamente e in silenzio è possibile osservarli da vicino, e in primavera si possono trovare i nidi dei cigni in cova."
              },
            ]} />

          </div>

        </div>
      </section>

      <section className="article-cta">
        <h3>Vuoi camminare lento attorno al lago?</h3>
        <p>Unisciti a me nelle escursioni PassoLento. Percorreremo il lago di Alleghe con calma, osservando la natura, lasciando che le montagne facciano il loro effetto.</p>
        <Button
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sul giro del lago di Alleghe e vorrei partecipare a un'escursione"
          variant="neutral"
          size="large"
          icon="fa-water"
        >
          Camminiamo insieme
        </Button>
      </section>
    </article>
  );
}
