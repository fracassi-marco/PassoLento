import BlogHero from "@/app/components/BlogHero";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import HikingInfo from "@/app/components/HikingInfo";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "frassene-rifugio-scarpa")!;

export const metadata = defaultMetadata(
  "Da Frassenè al Rifugio Scarpa: una Passeggiata che Ferma il Tempo",
  "Un anello di 11.4 km tra i resti della vecchia seggiovia monoposto della \"piccola Cortina\", una malga abbandonata e il Monte Agner, con ritorno per Malga Luna. 790 m di dislivello, difficoltà media.",
  "/blog/frassene-rifugio-scarpa/",
  ["https://passolento.com/blog/10/malga-vecchia.webp"],
);

export default function FrasseneRifugioScarpa() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Come fare l'escursione da Frassenè al Rifugio Scarpa",
            "description": "Guida passo per passo per l'escursione ad anello da Frassenè al Rifugio Scarpa, con ritorno per Malga Luna, nelle Dolomiti bellunesi.",
            "totalTime": "PT5H",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Scarpe da trekking" },
              { "@type": "HowToSupply", "name": "Pranzo al sacco" },
              { "@type": "HowToSupply", "name": "Borraccia" },
              { "@type": "HowToSupply", "name": "Bastoncini da trekking (facoltativi)" },
            ],
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Partenza da Frassenè", "text": "Si parte dal paese di Frassenè, dove è ancora visibile la stazione di valle della vecchia seggiovia monoposto." },
              { "@type": "HowToStep", "position": 2, "name": "Salita lungo il tracciato della seggiovia", "text": "Il sentiero sale seguendo più o meno il vecchio tracciato della seggiovia, fino alla stazione di arrivo abbandonata vicino al rifugio." },
              { "@type": "HowToStep", "position": 3, "name": "Arrivo al Rifugio Scarpa", "text": "Si raggiunge il Rifugio Scarpa, a 1750 m, con la sua terrazza panoramica sulla conca agordina e vista sulla vecchia malga sottostante." },
              { "@type": "HowToStep", "position": 4, "name": "Pranzo al sacco e vista sul Monte Agner", "text": "Ci si ferma a mangiare godendo del panorama sul Monte Agner e sulle cime circostanti, da cui partono altri sentieri ed una via ferrata." },
              { "@type": "HowToStep", "position": 5, "name": "Ritorno ad anello per Malga Luna", "text": "Si scende con una variante ad anello che passa per Malga Luna, tra boschi rigogliosi e un rigagnolo dove riempire la borraccia." },
            ],
          })
        }}
      />
      <BlogHero
        title={post.title}
        subtitle={post.excerpt}
      />


      <Breadcrumbs items={[{ name: "Blog", url: "/blog/" }, { name: post.title, url: `/blog/${post.slug}/` }]} />
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
              Ci sono escursioni che si misurano in chilometri e dislivello, e ce ne sono altre che si misurano in qualcos&apos;altro - una sensazione di tempo sospeso, di essere entrati per qualche ora in un luogo che il calendario ha smesso di toccare. L&apos;anello da <strong>Frassenè</strong> al <strong>Rifugio Scarpa</strong> è di questo secondo tipo: <strong>11.4 km</strong>, <strong>790 m di dislivello</strong>, <strong>1750 m</strong> di altitudine massima, circa <strong>5 ore</strong> comprese le soste e il pranzo al sacco. Difficoltà media, ma la fatica delle gambe è solo metà della storia.
            </p>
            <p>
              L&apos;altra metà è quello che si incontra lungo il percorso: i resti di un passato glorioso, una malga abbandonata, un rifugio che sembra essersi fermato in un momento perfetto, e sopra tutto - da sempre, prima di noi e dopo di noi - il <strong>Monte Agner</strong>.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Frassenè, la &quot;Piccola Cortina&quot; che il Tempo ha Risparmiato</h2>
            <p>
              Prima ancora di mettersi in cammino, Frassenè racconta già una storia. Il paese era conosciuto come la <strong>&quot;piccola Cortina&quot;</strong>, per la vita mondana che animava le sue vie, per la bellezza dei luoghi e per una <strong>seggiovia monoposto</strong> che portava sci e turisti in quota, negli anni in cui l&apos;Agordino viveva un turismo di montagna in piena fioritura. Quella seggiovia è chiusa da anni, ma la sua <strong>stazione di partenza</strong>, proprio in paese, è ancora lì, silenziosa tra le case.
            </p>
            <p>
              Camminare per Frassenè prima di imboccare il sentiero significa attraversare un pezzo di storia dolomitica che non ha bisogno di targhe o pannelli per farsi capire: basta guardare quella struttura ferma da decenni per intuire quanta vita, quanta euforia, quante vacanze siano passate da qui.
            </p>

            <blockquote className="article-quote">
              &quot;Un paese che è stato la &apos;piccola Cortina&apos; non lo dimentica facilmente. Lo si vede nei dettagli che nessuno ha voluto - o potuto - cancellare.&quot;
            </blockquote>

            <h2>Salendo sul Tracciato della Vecchia Seggiovia</h2>
            <p>
              Il sentiero che sale da Frassenè verso il Rifugio Scarpa accompagna, più o meno fedelmente, il vecchio tracciato della seggiovia. Di tanto in tanto si intuisce dove passavano i cavi, dove sorgevano i piloni, e la sensazione è quella di camminare dentro una fotografia in bianco e nero sovrapposta al presente. Si sale con calma, tra boschi e radure, fino a raggiungere la <strong>stazione di arrivo</strong>, abbandonata anch&apos;essa, proprio a due passi dal rifugio.
            </p>
            <p>
              Vedere le due stazioni - quella di valle in paese, quella di monte quassù - è come leggere le due pagine di uno stesso racconto a distanza di un&apos;ora e mezza di cammino. In mezzo, il bosco ha continuato a crescere indisturbato.
            </p>

            <div className="article-tip">
              <h4>🥾 Consiglio di PassoLento</h4>
              <p>Le due stazioni della seggiovia non sono segnalate come attrazione: sono semplicemente lì, ai margini del sentiero. Cammina con lo sguardo alzato di tanto in tanto, altrimenti rischi di superarle senza notarle.</p>
            </div>

            <h2>Rifugio Scarpa: una Terrazza sulla Conca Agordina</h2>
            <p>
              Arrivare al <strong>Rifugio Scarpa</strong>, a <strong>1750 m</strong>, significa trovare un luogo curato con la stessa cura di chi sa di custodire qualcosa di prezioso. La <strong>terrazza</strong>, elegante e ben tenuta, domina la <strong>conca agordina</strong> con uno sguardo che si perde tra valli e cime senza fretta di tornare indietro.
            </p>
            <p>
              Da lassù lo sguardo cade anche su una <strong>vecchia malga</strong>, non più usata per il pascolo, adagiata in un vallone ai piedi delle pareti rocciose. È un altro pezzo di quel tempo fermo di cui è fatta tutta questa escursione: un edificio che ha smesso di avere una funzione, ma non ha perso la sua presenza nel paesaggio.
            </p>

            <div className="article-image">
              <img
                src="/blog/10/malga-vecchia.webp"
                alt="Vecchia malga abbandonata in un vallone ai piedi delle pareti rocciose, vista dal Rifugio Scarpa"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>La vecchia malga, ormai non più usata per il pascolo, vista dalla terrazza del Rifugio Scarpa</figcaption>
            </div>

            <blockquote className="article-quote">
              &quot;Una malga che non pascola più, una seggiovia che non sale più, un rifugio ancora perfettamente in vita: tre modi diversi di raccontare lo stesso tempo che passa.&quot;
            </blockquote>

            <h2>Il Monte Agner e i Sentieri per Tutti i Gusti</h2>
            <p>
              Dal Rifugio Scarpa partono altre escursioni, per tutti i gusti: sentieri naturalistici, traversate verso altre malghe, e persino l&apos;attacco di una <strong>via ferrata</strong>. Il segnavia con le indicazioni verso <strong>Cima Agner</strong> e il <strong>Monte Agner</strong> ricorda che qui si è ai piedi di una delle cime più imponenti e riconoscibili delle Dolomiti bellunesi, una piramide di roccia che domina la valle da sempre.
            </p>
            <p>
              Restare fermi un momento a guardare quelle pareti, dopo aver camminato tra i resti di una seggiovia chiusa e una malga abbandonata, produce un effetto quasi vertiginoso: il tempo recente - decenni, non secoli - che ha cambiato il destino di un paese e di un impianto, contro il tempo delle montagne, che si misura in ere geologiche e che, semplicemente, non si accorge di noi.
            </p>

            <div className="article-image">
              <img
                src="/blog/10/bivio-sentieri-agner.webp"
                alt="Segnavia in legno vicino al Rifugio Scarpa con le indicazioni per il Monte Agner, la via ferrata e i sentieri verso Taibon Agordino"
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il bivio dei sentieri vicino al rifugio: chi vuole può proseguire fino all&apos;attacco della ferrata del Monte Agner</figcaption>
            </div>

            <p>
              Ci si sente piccoli, in un modo che non spaventa ma che mette ordine: piccoli davanti al passato recente di un paese che è stato altro da quello che è oggi, e piccoli davanti a vette che erano lì molto prima e ci saranno molto dopo. È forse questo il motivo per cui il tempo, qui, sembra fermarsi: si smette per un momento di misurarlo con il proprio metro.
            </p>

            <h2>Il Ritorno ad Anello per Malga Luna</h2>
            <p>
              Il rientro non ripercorre lo stesso sentiero dell&apos;andata: una variante ad anello scende passando per <strong>Malga Luna</strong>, tra pareti rocciose che si allontanano lentamente e un bosco che si fa via via più fitto e rigoglioso.
            </p>

            <div className="article-image">
              <img
                src="/blog/10/malga-luna.webp"
                alt="Malga Luna, edificio in pietra e legno con il nome scritto sull'architrave, lungo l'anello di ritorno da Rifugio Scarpa"
                width={800}
                height={1067}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Malga Luna, tappa dell&apos;anello di ritorno, tra pietra, legno e bandierine colorate</figcaption>
            </div>

            <p>
              Scendendo, il sentiero attraversa un tratto di <strong>natura rigogliosa</strong>, dove un piccolo <strong>rigagnolo d&apos;acqua</strong> scorre tra rocce coperte di muschio: un punto perfetto per fermarsi e riempire la borraccia, con l&apos;acqua fresca che scende direttamente dalla montagna.
            </p>

            <div className="article-image">
              <img
                src="/blog/10/rigagnolo.webp"
                alt="Rigagnolo d'acqua tra rocce coperte di muschio nel bosco lungo l'anello di ritorno per Malga Luna"
                width={800}
                height={1067}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il rigagnolo tra le rocce coperte di muschio, dove fermarsi a riempire la borraccia</figcaption>
            </div>

            <div className="article-tip">
              <h4>💧 Consiglio di PassoLento</h4>
              <p>Porta comunque una borraccia piena da casa: l&apos;acqua di un rigagnolo di montagna va sempre valutata con buon senso, soprattutto dopo periodi di siccità o in presenza di pascoli a monte.</p>
            </div>

            <div className="article-image">
              <img
                src="/blog/10/fontana-legno.webp"
                alt="Fontana in legno scavato con l'acqua che scorre, e le Dolomiti sullo sfondo, lungo il percorso verso Frassenè"
                width={800}
                height={1067}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Una fontana scavata nel legno lungo il percorso, con le Dolomiti a fare da sfondo</figcaption>
            </div>

            <p>
              Gli ultimi tratti scendono tra prati e boschi fino a richiudere l&apos;anello su Frassenè, con quella sensazione familiare a chi cammina in montagna: essere tornati esattamente dove si era partiti, ma con lo sguardo un po&apos; più lento di quando si è partiti.
            </p>

            <blockquote className="article-quote">
              &quot;Rimanere incantati dalla bellezza, sentirsi piccoli davanti al tempo - quello recente di una seggiovia chiusa, quello antico di una montagna - è forse il vero motivo per cui si continua a camminare.&quot;
            </blockquote>

            <HikingInfo {...post.infoEscursione!} />

            <FAQSection items={[
              {
                question: "L'escursione da Frassenè al Rifugio Scarpa è adatta a tutti?",
                answer: "È un'escursione di difficoltà media, con 790 m di dislivello e 11.4 km di sviluppo complessivo. È adatta a chi ha già un minimo di allenamento e abitudine a camminare in montagna per diverse ore."
              },
              {
                question: "Da dove si parte per il Rifugio Scarpa?",
                answer: "Il punto di partenza è il paese di Frassenè, in Agordino, dove è ancora visibile la stazione di valle della vecchia seggiovia monoposto. Da qui il sentiero sale fino al Rifugio Scarpa."
              },
              {
                question: "Cosa resta della vecchia seggiovia di Frassenè?",
                answer: "Sono ancora visibili la stazione di partenza in paese e la stazione di arrivo vicino al Rifugio Scarpa, entrambe chiuse da anni ma ben riconoscibili lungo il tracciato del sentiero."
              },
              {
                question: "Si può fare l'anello con la variante di Malga Luna?",
                answer: "Sì, il ritorno può essere fatto ad anello passando per Malga Luna, tra boschi rigogliosi e un rigagnolo dove riempire la borraccia, invece di ripercorrere lo stesso sentiero dell'andata."
              },
              {
                question: "Quanto dura l'escursione e quanto dislivello ha?",
                answer: "L'anello completo è di circa 11.4 km, con 790 m di dislivello e un'altitudine massima di 1750 m al Rifugio Scarpa. Con il pranzo al sacco e le soste, l'intera escursione richiede circa 5 ore."
              },
            ]} />

            <div className="gpx-download">
              <Button
                href="/gpx/frassene_rifugio_scarpa.gpx"
                download="frassene_rifugio_scarpa.gpx"
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
        <h3>Vuoi camminare con lentezza fino al Rifugio Scarpa?</h3>
        <p>Unisciti a me nelle escursioni PassoLento. Cammineremo piano, ci fermeremo davanti ai resti della vecchia seggiovia e alla malga abbandonata, e ci godremo la terrazza del rifugio e il panorama sul Monte Agner senza fretta.</p>
        <Button
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sul Rifugio Scarpa e vorrei partecipare a un'escursione"
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
