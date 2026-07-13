import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import HikingInfo from "@/app/components/HikingInfo";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "passo-duran-rifugio-carestiato")!;

export const metadata = defaultMetadata(
  "Dal Passo Duran al Rifugio Carestiato: Boschi, Ghiaioni e un Altro Pianeta",
  "Una salita breve tra boschetti, radici e ghiaioni lunari, tra mucche al pascolo e cavalli liberi, fino a un panorama a 360 gradi e un pranzo condiviso al Rifugio Carestiato. 5.6 km con 340 m di dislivello.",
  "/blog/passo-duran-rifugio-carestiato/",
  ["https://passolento.com/blog/8/panorama-carestiato.webp"],
);

export default function PassoDuranRifugioCarestiato() {
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
            "name": "Come fare l'escursione dal Passo Duran al Rifugio Carestiato",
            "description": "Guida passo per passo per l'escursione dal Passo Duran al Rifugio Carestiato, nelle Dolomiti bellunesi.",
            "totalTime": "PT1H30M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Scarpe da trekking con buon grip" },
              { "@type": "HowToSupply", "name": "Borraccia" },
              { "@type": "HowToSupply", "name": "Bastoncini da trekking (facoltativi, utili sul ghiaione)" },
              { "@type": "HowToSupply", "name": "Contanti per il pranzo al rifugio" },
            ],
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Partenza dal Passo Duran", "text": "Lascia l'auto al Passo Duran, presso il Rifugio San Sebastiano, e imbocca il sentiero segnalato per il Rifugio Carestiato." },
              { "@type": "HowToStep", "position": 2, "name": "Boschetti e primi incontri", "text": "Il sentiero attraversa piccoli boschetti dove è facile incontrare mucche al pascolo e cavalli liberi tra gli alberi." },
              { "@type": "HowToStep", "position": 3, "name": "Salita su radici e ghiaione", "text": "Il percorso sale con tratti su radici sporgenti e un ghiaione bianco che ricorda un paesaggio lunare, ai piedi delle pareti rocciose." },
              { "@type": "HowToStep", "position": 4, "name": "Arrivo al Rifugio Carestiato", "text": "Si raggiunge il Rifugio Carestiato, a 1850 m, con vista a 360 gradi sulle Dolomiti circostanti." },
              { "@type": "HowToStep", "position": 5, "name": "Pranzo condiviso al rifugio", "text": "Ci si ferma a mangiare piatti tipici di montagna, condividendo il tavolo con altri escursionisti." },
              { "@type": "HowToStep", "position": 6, "name": "Discesa meditativa al Passo Duran", "text": "Si ritorna al Passo Duran prestando attenzione al terreno, in una discesa quasi meditativa." },
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
              Ci sono salite che sembrano lunghe il giusto per farti cambiare stato d&apos;animo, ma abbastanza brevi da lasciarti ancora fresco per godertele davvero. Il sentiero dal <strong>Passo Duran</strong> al <strong>Rifugio Carestiato</strong> è una di queste: <strong>5.6 km</strong> andata e ritorno, <strong>340 m di dislivello</strong>, poco più di <strong>un&apos;ora e mezza</strong> di cammino. Ma dentro a questi numeri modesti si nasconde un piccolo mondo - boschetti, animali, un ghiaione che pare un altro pianeta, e in cima un panorama che vale ogni singolo passo.
            </p>
            <p>
              Si parte dal <strong>Passo Duran</strong>, si sale fino al rifugio, a <strong>1850 m</strong>{" "}di quota, e si torna indietro sulla stessa strada. Ma tornare non significa ripetere: la discesa, qui, è un&apos;esperienza a sé.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Dal Passo Duran, tra l&apos;Alpeggio e i Primi Boschetti</h2>
            <p>
              Il Passo Duran accoglie con il tipico fermento dei punti di partenza di montagna: auto parcheggiate, escursionisti che si allacciano gli scarponi, il Rifugio San Sebastiano che osserva tutto dall&apos;alto della sua terrazza. Proprio qui, a due passi dal parcheggio, si apre l&apos;<strong>alpeggio</strong>: mucche al pascolo con le grandi pareti dolomitiche a strapiombo dietro di loro, un quadro che la montagna compone senza sforzo fin dal primo minuto di cammino.
            </p>
            <p>
              È il modo migliore per iniziare: rallentare ancora prima di aver scaldato le gambe, lasciarsi distrarre da qualcosa di più grande della fretta di partire.
            </p>

            <div className="article-image">
              <img
                src="/blog/8/alpeggio.webp"
                alt="Mucche al pascolo nell'alpeggio vicino al Passo Duran, con le pareti rocciose delle Dolomiti sullo sfondo"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>L&apos;alpeggio vicino al Passo Duran, punto di partenza: le mucche pascolano con le pareti dolomitiche a fare da sfondo</figcaption>
            </div>

            <p>
              Superato l&apos;alpeggio, il sentiero per il Rifugio Carestiato è ben segnalato ed entra nei primi <strong>piccoli boschetti</strong> di conifere. È qui che si può ancora incrociare qualche <strong>mucca al pascolo</strong> proprio in mezzo al sentiero, indisturbata, che alza la testa un istante e poi torna a brucare, o intravedere tra gli alberi <strong>cavalli liberi</strong> che si muovono con una calma che sembra insegnare qualcosa a chi li osserva.
            </p>

            <div className="article-image">
              <img
                src="/blog/8/mucca.webp"
                alt="Mucca al pascolo tra i boschetti sul sentiero verso il Rifugio Carestiato, con le montagne sullo sfondo"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Uno degli ultimi incontri prima del bosco: le mucche pascolano indisturbate vicino al sentiero</figcaption>
            </div>

            <blockquote className="article-quote">
              &quot;Camminare tra animali al pascolo è un promemoria semplice: questa montagna è anche casa loro. Noi siamo solo di passaggio.&quot;
            </blockquote>

            <h2>Radici, Salite e un Ghiaione da Altro Pianeta</h2>
            <p>
              Superati i boschetti, il sentiero cambia carattere. Comincia a salire con più decisione, e il terreno si fa fatto di <strong>radici affioranti</strong> che intrecciano il passo, costringendo a guardare bene dove si mettono i piedi. Non è un tratto difficile, ma richiede attenzione: ogni radice è un piccolo scalino naturale che il bosco ha disegnato a modo suo.
            </p>
            <p>
              Poi, all&apos;improvviso, il bosco si apre e il paesaggio cambia completamente pelle: si attraversa un <strong>ghiaione bianco</strong>, una distesa di sassi chiari ai piedi di pareti rocciose verticali. Il contrasto è così netto - dal verde del bosco al bianco-grigio della pietra - che per un momento sembra davvero di aver cambiato pianeta. Il silenzio qui è diverso, più minerale, quasi lunare.
            </p>

            <div className="article-tip">
              <h4>🥾 Consiglio di PassoLento</h4>
              <p>Sul ghiaione il fondo è instabile e i sassi possono muoversi sotto i piedi. Scarpe con buon grip e, se le hai, un bastoncino da trekking aiutano a mantenere l&apos;equilibrio senza fretta.</p>
            </div>

            <div className="article-image">
              <img
                src="/blog/8/ghiaione.webp"
                alt="Ghiaione bianco ai piedi delle pareti rocciose sul sentiero per il Rifugio Carestiato, paesaggio quasi lunare"
                width={800}
                height={1067}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il ghiaione: un paesaggio minerale che sembra appartenere a un altro pianeta</figcaption>
            </div>

            <h2>Il Rifugio Carestiato: un Panorama a 360 Gradi</h2>
            <p>
              Arrivare al <strong>Rifugio Carestiato</strong>, a <strong>1850 metri</strong>, significa ricevere in un colpo solo tutta la ricompensa della salita. Il rifugio si trova in una posizione che apre la vista su ogni lato: le cime dolomitiche si susseguono all&apos;orizzonte, i boschi scendono nelle valli, e il cielo - con le sue nuvole che cambiano forma in continuazione - sembra occupare metà del panorama.
            </p>
            <p>
              È un panorama che non si esaurisce in uno sguardo: bisogna girarsi, cambiare punto di vista, tornare a guardare la stessa cima da un&apos;angolazione diversa per accorgersi di un dettaglio nuovo. I panorami mozzafiato non si guardano di fretta, tanto meno un <strong>panorama a 360 gradi</strong>.
            </p>

            <blockquote className="article-quote">
              &quot;Un panorama a 360 gradi ti obbliga a girarti. E girarti, in fondo, è già un piccolo atto di attenzione.&quot;
            </blockquote>

            <div className="article-image">
              <img
                src="/blog/8/panorama-carestiato.webp"
                alt="Panorama a 360 gradi sulle Dolomiti visto dal Rifugio Carestiato"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il panorama dal Rifugio Carestiato: le Dolomiti tutto intorno, a perdita d&apos;occhio</figcaption>
            </div>

            <h2>Mangiare al Rifugio: una Fatica Condivisa</h2>
            <p>
              Al Rifugio Carestiato mangiare non è solo un pasto: è un&apos;<strong>esperienza di condivisione</strong>. I tavoli sono spesso comuni, e capita di ritrovarsi a sedere accanto a escursionisti mai visti prima, a scambiare due parole sul sentiero appena fatto mentre si aspetta il piatto.
            </p>
            <p>
              I piatti sono quelli tipici di montagna - semplici, sostanziosi, pensati per chi ha camminato. E mentre si mangia, viene naturale ricordare che ogni ingrediente, ogni pentola, ogni bombola del gas è arrivata qui <strong>a piedi o con mezzi non semplici</strong>, portata su da chi lavora al rifugio con una fatica silenziosa che raramente si vede ma che si può, in un certo senso, assaporare.
            </p>

            <div className="article-tip">
              <h4>🍽️ Consiglio di PassoLento</h4>
              <p>Porta contanti: molti rifugi di montagna hanno una connessione internet limitata o assente per i pagamenti con carta. E non avere fretta a tavola: la condivisione con chi ti siede a fianco fa parte dell&apos;esperienza.</p>
            </div>

            <div className="article-image">
              <img
                src="/blog/8/tovaglietta-rifugio-carestiato.webp"
                alt="Tovaglietta con la mappa dei rifugi del Civetta al Rifugio Carestiato"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>La tovaglietta con la mappa dei rifugi del Civetta: anche a tavola si racconta la montagna</figcaption>
            </div>

            <h2>La Discesa: Svuotare la Testa, Guardare i Piedi</h2>
            <p>
              Il ritorno percorre lo stesso sentiero dell&apos;andata, ma è un&apos;esperienza diversa. In discesa, tra radici e ghiaione, <strong>bisogna portare attenzione al terreno</strong> ad ogni passo - il rischio di scivolare o di inciampare è più concreto che in salita. E proprio questa necessità di attenzione costante diventa, quasi senza volerlo, una forma di <strong>meditazione camminata</strong>.
            </p>
            <p>
              La testa si svuota perché non ha altra scelta: i pensieri che di solito affollano la mente cedono il posto alla concentrazione sul passo successivo. Non è uno sforzo di volontà - è il sentiero stesso che chiede presenza, e la mente, alla fine, la offre volentieri.
            </p>

            <blockquote className="article-quote">
              &quot;In discesa non si pensa a niente, e proprio per questo si pensa a tutto. Il corpo guida, la mente si riposa.&quot;
            </blockquote>

            <p>
              Si torna al Passo Duran con le gambe stanche del modo giusto, e con quella sensazione - familiare a chi cammina in montagna - di essere tornati esattamente dove si era partiti, ma non più le stesse persone.
            </p>

            <HikingInfo {...post.infoEscursione!} />

            <FAQSection items={[
              {
                question: "L'escursione dal Passo Duran al Rifugio Carestiato è adatta ai principianti?",
                answer: "Sì, è un percorso facile e breve, adatto anche a chi ha poca esperienza di montagna. Richiede solo attenzione nei tratti su radici e nel ghiaione, dove il fondo può essere instabile."
              },
              {
                question: "Dove si parte per il Rifugio Carestiato?",
                answer: "Il punto di partenza è il Passo Duran, raggiungibile in auto, presso il Rifugio San Sebastiano, tra le province di Belluno. Da lì parte il sentiero segnalato per il Rifugio Carestiato."
              },
              {
                question: "Si possono incontrare animali lungo il sentiero?",
                answer: "Sì, è comune incontrare mucche al pascolo nei boschetti e negli alpeggi, e talvolta cavalli liberi. Sono animali abituati alla presenza di escursionisti: basta mantenere una distanza rispettosa."
              },
              {
                question: "Si può mangiare al Rifugio Carestiato?",
                answer: "Sì, il rifugio offre piatti tipici di montagna. Ti consigliamo di portare contanti, perché la connessione per i pagamenti con carta può essere limitata, e di goderti il pasto senza fretta: la condivisione del tavolo è parte dell'esperienza."
              },
              {
                question: "Quanto è lungo il percorso e quanto ci vuole?",
                answer: "Il percorso è di circa 5.6 km andata e ritorno, con 340 m di dislivello positivo e un'altitudine massima di 1850 m al rifugio. Si completa in circa un'ora e mezza di cammino, escluse le soste."
              },
            ]} />

            <div className="gpx-download">
              <Button
                href="/gpx/passo_duran_rigugio_carestiato.gpx"
                download="passo_duran_rigugio_carestiato.gpx"
                variant="primary"
                size="medium"
                icon="fa-download"
              >
                Scarica traccia GPX
              </Button>
            </div>

          </div>

        </div>
      </section>

      <section className="article-cta">
        <h3>Vuoi camminare con lentezza fino al Rifugio Carestiato?</h3>
        <p>Unisciti a me nelle escursioni PassoLento. Cammineremo piano, ci fermeremo a guardare mucche e cavalli, attraverseremo il ghiaione con calma e ci godremo il panorama e il pranzo in rifugio senza fretta.</p>
        <Button
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sul Rifugio Carestiato e vorrei partecipare a un'escursione"
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
