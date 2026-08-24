import BlogHero from "@/app/components/BlogHero";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import HikingInfo from "@/app/components/HikingInfo";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "rivamonte-forcella-aurine")!;

export const metadata = defaultMetadata(
  "Da Rivamonte Agordino a Forcella Aurine: Nordic Walking a Ritmo Serrato",
  "12,3 km e quasi 400 m di dislivello in 2 ore e un quarto di nordic walking a ritmo sostenuto, tra boschi feriti da Vaia, fontane perse nel tempo e baite secolari, da Rivamonte Agordino a Forcella Aurine.",
  "/blog/rivamonte-forcella-aurine/",
  ["https://passolento.com/blog/12/panorama-forcella-aurine.webp"],
);

export default function RivamonteForcellaAurine() {
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
            "name": "Come fare l'escursione di nordic walking da Rivamonte Agordino a Forcella Aurine",
            "description": "Guida passo per passo per l'escursione a ritmo sostenuto da Rivamonte Agordino a Forcella Aurine, nelle Dolomiti bellunesi.",
            "totalTime": "PT2H15M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Bastoncini da nordic walking" },
              { "@type": "HowToSupply", "name": "Scarpe da trekking o da nordic walking" },
              { "@type": "HowToSupply", "name": "Borraccia" },
            ],
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Partenza da Rivamonte Agordino", "text": "Si parte dal centro di Rivamonte Agordino, a 950 m, attraversando il paese vicino al canattiere e svoltando sui cartelli per Forcella Aurine, con un ritmo sostenuto aiutato dai bastoncini." },
              { "@type": "HowToStep", "position": 2, "name": "Attraverso i boschi feriti da Vaia", "text": "Il sentiero sale nel bosco, dove sono ancora visibili gli schianti lasciati dalla tempesta Vaia del 2018." },
              { "@type": "HowToStep", "position": 3, "name": "Le fontane perse nel tempo", "text": "Lungo il percorso si incontrano vecchie fontane e vasche di pietra, alcune ormai dimenticate, che raccontano la vita di un tempo su questi versanti." },
              { "@type": "HowToStep", "position": 4, "name": "Le baite secolari", "text": "Si passa tra baite secolari, alcune abbandonate e alcune ancora ben tenute, che scandiscono il cammino verso quota." },
              { "@type": "HowToStep", "position": 5, "name": "Arrivo a Forcella Aurine", "text": "Si raggiunge Forcella Aurine, a 1300 m, dopo la salita nel bosco, con vista sulle cime circostanti." },
              { "@type": "HowToStep", "position": 6, "name": "Ritorno ad anello per La Spia", "text": "La discesa chiude l'anello passando per la frazione di La Spia, a 1025 m, prima di rientrare a Rivamonte Agordino, per un totale di 12,3 km e quasi 400 m di dislivello in circa 2 ore e un quarto." },
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
              Chi segue <em>PassoLento</em> conosce la filosofia: camminare piano, fermarsi, guardare. Ma il corpo, per restare capace di farlo negli anni, ha bisogno anche dell&apos;altro estremo. Questa volta il racconto è di un&apos;escursione fatta apposta <strong>a ritmo serrato</strong>, di <strong>nordic walking</strong>, da <strong>Rivamonte Agordino</strong> (950 m) a <strong>Forcella Aurine</strong> (1300 m): <strong>12,3 km</strong>, poco meno di <strong>400 m di dislivello</strong>, percorsi in <strong>2 ore e un quarto</strong>.
            </p>
            <p>
              Nessuna sosta prolungata, nessuna contemplazione dilatata: solo il fiato che si fa corto, i bastoncini che battono il tempo sulle pietre, e lo sguardo che comunque - anche a passo veloce - non riesce a ignorare quello che il sentiero mette davanti: boschi feriti da Vaia, fontane perse nel tempo, baite secolari.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Quando il Passo Lento Cambia Passo</h2>
            <p>
              Camminare lentamente è una scelta, non un limite: per poterla fare bene, per anni, le gambe e il fiato vanno anche allenati. Da qui nasce l&apos;idea di questa uscita: stessa montagna, stessi sentieri di sempre, ma con un obiettivo diverso. Non fermarsi ad ogni dettaglio, ma tenere un <strong>ritmo sostenuto</strong> per tutta la salita, usando il <strong>nordic walking</strong> come lo strumento che è nato per essere: un allenamento cardiovascolare completo, che coinvolge anche la parte superiore del corpo.
            </p>
            <p>
              Il risultato è un&apos;escursione diversa da quelle che racconto di solito: più breve nel tempo, più intensa nello sforzo, ma capace comunque di attraversare - anche se a passo svelto - alcuni degli scorci più autentici dell&apos;Agordino.
            </p>

            <blockquote className="article-quote">
              &quot;Anche il passo lento, per esistere, ha bisogno ogni tanto di un passo veloce che lo tenga in forma.&quot;
            </blockquote>

            <h2>Bastoncini come Compagni di Ritmo</h2>
            <p>
              Nel nordic walking a ritmo sostenuto i <strong>bastoncini</strong> non sono un accessorio: sono il metronomo di tutta l&apos;escursione. Il loro <strong>ticchettio sulle pietre</strong> del sentiero scandisce il passo, obbliga a non rallentare, aiuta le braccia a spingere e le gambe a risparmiare energia nei tratti più duri. Si sente il loro appoggio ad ogni falcata, un suono secco e regolare che diventa quasi una guida sonora per mantenere l&apos;andatura costante fino in cima.
            </p>
            <p>
              A <strong>Rivamonte</strong>, l&apos;andata attraversa il paese passando vicino alla <strong>panetteria</strong>: è qui che si svolta seguendo i cartelli per <strong>Forcella Aurine</strong>, per imboccare qualche chilometro più avanti la salita che entra decisa nel bosco.
            </p>

            <div className="article-tip">
              <h4>🥾 Consiglio di PassoLento</h4>
              <p>Per un&apos;uscita a ritmo sostenuto, regola la lunghezza dei bastoncini un po&apos; più corta del solito: aiuta a spingere di più con le braccia e a mantenere una cadenza più rapida, senza perdere equilibrio sui tratti sassosi.</p>
            </div>

            <h2>I Segni di Vaia nel Bosco</h2>
            <p>
              Salendo tra gli alberi, il ritmo veloce non impedisce di notare quello che la <strong>tempesta Vaia</strong> ha lasciato, nell&apos;ottobre 2018, su questi versanti dell&apos;Agordino: tronchi spezzati, radure aperte a forza dove prima c&apos;era solo bosco fitto, il legname ancora accatastato o abbandonato dove è caduto. Anni dopo, la natura sta reagendo - nuovi germogli, sottobosco che si rifà spazio - ma le cicatrici restano ben visibili a chi cammina con lo sguardo attento, anche se il passo è veloce.
            </p>
            <p>
              È uno dei paradossi di questa escursione: correre, in un certo senso, attraverso i segni di una furia che qui è passata in poche ore e ha cambiato il paesaggio per decenni. Il ritmo serrato delle gambe contro il tempo lentissimo con cui il bosco si sta ricostruendo.
            </p>

            <blockquote className="article-quote">
              &quot;Vaia ha soffiato per una notte. Il bosco ci metterà una vita a rimettersi in ordine.&quot;
            </blockquote>

            <h2>Fontane Perse nel Tempo</h2>
            <p>
              Anche a ritmo sostenuto, alcune soste sono inevitabili - quelle di pochi secondi, giusto il tempo di uno sguardo. Lungo il percorso si incontrano <strong>fontane e vasche di pietra</strong> che sembrano dimenticate dal tempo: alcune ancora alimentate da un tubo che scende dal bosco, altre più curate, incastonate negli orti e nei giardini che orlano i primi tratti del sentiero.
            </p>

            <div className="article-image">
              <img
                src="/blog/12/fontana-vasca-giardino.webp"
                alt="Fontana in pietra con vasca a 4 getti, circondata da un orto lungo il sentiero verso Forcella Aurine"
                width={1280}
                height={960}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Una fontana a 4 getti, ancora viva tra gli orti dei primi tratti del sentiero</figcaption>
            </div>

            <p>
              Più in alto, il bosco custodisce fontane meno frequentate: vasche di pietra semi sommerse dalla vegetazione, un tempo punto d&apos;acqua per chi lavorava questi versanti, oggi quasi invisibili a chi non le sta cercando. Sono proprio queste, le <strong>fontane perse nel tempo</strong>, il contrappunto silenzioso al ritmo veloce dei nostri passi.
            </p>

            <div className="article-image">
              <img
                src="/blog/12/fontana-persa-nel-bosco.webp"
                alt="Vecchia fontana di pietra semi nascosta dalla vegetazione nel bosco, lungo il sentiero per Forcella Aurine"
                width={1280}
                height={720}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Una fontana di pietra ormai avvolta dalla vegetazione, quasi invisibile nel bosco</figcaption>
            </div>

            <h2>Baite Secolari, tra Abbandono e Cura</h2>
            <p>
              Il sentiero passa accanto a diverse <strong>baite secolari</strong>: alcune abbandonate, con le porte chiuse da anni e le assi di legno annerite dal tempo; altre invece ben tenute, con le persiane colorate, la legna accatastata sotto la tettoia, i segni di chi le usa ancora. Nessuna delle due situazioni toglie fascino all&apos;altra: sia l&apos;abbandono che la cura raccontano, a modo loro, quanto lentamente cambi la vita su questi monti.
            </p>

            <div className="article-image">
              <img
                src="/blog/12/baita-secolare.webp"
                alt="Baita secolare in pietra e legno con panche artigianali nel prato, lungo il sentiero verso Forcella Aurine"
                width={1280}
                height={720}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Una baita ben tenuta, con le panche in legno grezzo pronte per una sosta</figcaption>
            </div>

            <p>
              Arrivati a Forcella Aurine, una chiesa in pietra con il tetto in lamiera e una lunga scalinata d&apos;accesso si staglia contro il bosco: un punto di riferimento visibile da lontano, uno di quei luoghi che, a passo lento, avrei fotografato per minuti; a ritmo sostenuto, restano un fotogramma che il fiato corto lascia solo il tempo di incrociare con lo sguardo.
            </p>

            <div className="article-image">
              <img
                src="/blog/12/edificio-in-pietra.webp"
                alt="Chiesa in pietra con lunga scalinata d'accesso, ai margini del bosco arrivati a Forcella Aurine"
                width={720}
                height={1280}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Chiesa in pietra, ai margini del bosco arrivati a Forcella Aurine</figcaption>
            </div>

            <div className="article-tip">
              <h4>⏱️ Consiglio di PassoLento</h4>
              <p>Se decidi di fare questa escursione a ritmo sostenuto, torna comunque un&apos;altra volta con calma: alcune baite e fontane meritano una seconda visita, senza l&apos;orologio in testa.</p>
            </div>

            <h2>Forcella Aurine, il Traguardo a 1300 Metri</h2>
            <p>
              Gli ultimi tratti salgono più decisi, e il fiato si fa la parte più impegnativa dell&apos;intera escursione. Poi, a <strong>1300 m</strong>, il bosco si apre su <strong>Forcella Aurine</strong>: il traguardo di questa uscita, con lo sguardo che finalmente può allargarsi sulle cime circostanti dopo due ore abbondanti di respiro corto e passo battuto dai bastoncini.
            </p>

            <div className="article-image">
              <img
                src="/blog/12/panorama-forcella-aurine.webp"
                alt="Panorama sulle montagne dell'Agordino visto da Forcella Aurine, a 1300 m di quota"
                width={1280}
                height={720}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il panorama da Forcella Aurine, 1300 m: la ricompensa dopo 400 m di dislivello a ritmo serrato</figcaption>
            </div>

            <h2>Il Ritorno per La Spia</h2>
            <p>
              La discesa non ripercorre lo stesso sentiero dell&apos;andata: l&apos;anello si chiude passando per la piccola frazione di <strong>La Spia</strong>, a 1025 m, ultimo avamposto di case prima di rientrare a Rivamonte. Anche a ritmo sostenuto, scendendo, lo sguardo si allarga per un momento sulle prime case e sulle nuvole basse che spesso, in questa valle, si posano sulle cime a fine giornata.
            </p>

            <div className="article-image">
              <img
                src="/blog/12/rivamonte-la-spia.webp"
                alt="La frazione La Spia, a 1025 m, lungo il sentiero di ritorno verso Rivamonte Agordino"
                width={720}
                height={1280}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>La Spia, a 1025 m: le ultime case prima di richiudere l&apos;anello su Rivamonte</figcaption>
            </div>

            <p>
              È un anello diverso da quelli lenti: non c&apos;è la sensazione di aver assaporato ogni singolo passo, ma quella - altrettanto vera - di aver rimesso alla prova il proprio fisico, di aver ritrovato per due ore abbondanti le pulsazioni alte e il fiato corto che il passo lento, per sua natura, non chiede mai. Ed è comunque bastato tenere gli occhi aperti per portarsi a casa i boschi di Vaia, le fontane dimenticate e le baite secolari che questo versante dell&apos;Agordino continua a custodire, a qualunque velocità si scelga di attraversarlo.
            </p>

            <blockquote className="article-quote">
              &quot;Non serve scegliere per sempre tra il passo lento e il passo veloce: la montagna, se la ascolti, si racconta comunque, a qualunque ritmo tu la stia camminando.&quot;
            </blockquote>

            <HikingInfo {...post.infoEscursione!} />

            <FAQSection items={[
              {
                question: "Da dove parte l'escursione per Forcella Aurine?",
                answer: "Si parte dal centro di Rivamonte Agordino, a 950 m di quota, in provincia di Belluno (Veneto): l'andata attraversa il paese passando vicino al canattiere, dove si svolta seguendo i cartelli per Forcella Aurine."
              },
              {
                question: "Quanto dura l'escursione a ritmo sostenuto da Rivamonte Agordino a Forcella Aurine?",
                answer: "A ritmo serrato di nordic walking, i 12,3 km con quasi 400 m di dislivello si percorrono in circa 2 ore e un quarto. A passo più tranquillo il tempo può allungarsi sensibilmente."
              },
              {
                question: "È un percorso adatto al nordic walking?",
                answer: "Sì, il fondo del sentiero, tra sterrato e tratti sassosi, si presta bene all'uso dei bastoncini da nordic walking, utili sia per il ritmo che per l'appoggio nei tratti più sconnessi."
              },
              {
                question: "Cosa si vede lungo il percorso verso Forcella Aurine?",
                answer: "Il sentiero attraversa boschi ancora segnati dalla tempesta Vaia del 2018, incontra fontane e vasche di pietra ormai poco frequentate, e passa accanto a diverse baite secolari, alcune abbandonate e alcune ancora ben tenute."
              },
              {
                question: "Qual è il dislivello e la quota massima di questa escursione?",
                answer: "Si parte da Rivamonte Agordino, a 950 m, e si arriva a Forcella Aurine, a 1300 m, per un dislivello complessivo di poco meno di 400 m su 12,3 km di sviluppo."
              },
            ]} />

            <div className="gpx-download">
              <Button
                href="/gpx/rivamonte_forcella_aurine.gpx"
                download="rivamonte_forcella_aurine.gpx"
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
        <h3>Vuoi allenarti in montagna con il nordic walking?</h3>
        <p>Unisciti a me nelle escursioni PassoLento: che sia il momento di camminare piano o di spingere sul ritmo, l&apos;Agordino offre sentieri per ogni tipo di uscita.</p>
        <Button
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo su Forcella Aurine e vorrei saperne di più sulle escursioni di nordic walking"
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
