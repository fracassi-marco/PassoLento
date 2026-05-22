import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import HikingInfo from "@/app/components/HikingInfo";
import LocationTags from "@/app/components/LocationTags";
import FAQSection from "@/app/components/FAQSection";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "val-falcina-lago-del-mis")!;

export const metadata = defaultMetadata(
  "Val Falcina dal Lago del Mis: Piscine Naturali e Meraviglia",
  "Un sentiero meditativo tra gradoni e boschi, con piscine naturali dall'acqua invisibile e scorci turchesi dove il lago entra nella valle. Escursione di 4.5 km con 350 m di dislivello.",
  "/blog/val-falcina-lago-del-mis/",
  ["https://passolento.com/blog/7/lago-del-mis-insenatura.webp"],
);

export default function ValFalcinaLagoDelMis() {
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
            "name": "Come fare l'escursione in Val Falcina dal Lago del Mis",
            "description": "Guida passo per passo per l'escursione in Val Falcina con partenza dal Lago del Mis, nelle Dolomiti bellunesi.",
            "totalTime": "PT1H45M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Scarpe da trekking robuste con suola antiscivolo" },
              { "@type": "HowToSupply", "name": "Borraccia" },
              { "@type": "HowToSupply", "name": "Abbigliamento a strati" },
              { "@type": "HowToSupply", "name": "Sandali o scarpe da guado per le piscine naturali" },
            ],
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Partenza dalle rive del Lago del Mis", "text": "Raggiungi il parcheggio del Lago del Mis a Sospirolo (Belluno). Prenditi un momento sulle rive del lago prima di iniziare: l'azzurro dell'acqua è già di per sé un regalo." },
              { "@type": "HowToStep", "position": 2, "name": "Salita nel bosco verso la Val Falcina", "text": "Imbocca il sentiero che sale da subito con decisione. Il percorso è irregolare, con molti gradoni e tratti sali-scendi che richiedono attenzione costante." },
              { "@type": "HowToStep", "position": 3, "name": "Scorci sul lago dall'alto", "text": "Salendo, il Lago del Mis si apre sotto di te con scorci sempre più ampi. Fermati a guardare: il blu-verde dell'acqua incorniciata dalle montagne vale ogni passo." },
              { "@type": "HowToStep", "position": 4, "name": "Piscine naturali del torrente", "text": "Raggiungi le piscine naturali formate dal torrente della Val Falcina. L'acqua è così limpida da sembrare assente. Guada i passaggi saltando di roccia in roccia o bagnandoti i piedi." },
              { "@type": "HowToStep", "position": 5, "name": "Le insenature turchesi del lago", "text": "Verso la fine del percorso, il lago rientra nella valle creando insenature dai colori turchesi. Fermati e lascia che il paesaggio entri dentro." },
              { "@type": "HowToStep", "position": 6, "name": "Ritorno e relax al bar del lago", "text": "Torna al punto di partenza, siediti al bar del lago, prendi il sole sulla spiaggia e lascia che lo sguardo vaghi sulle montagne che circondano l'acqua." },
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
              Ci sono posti che cominciano a stupirti ancora prima che tu faccia il primo passo. Il <strong>Lago del Mis</strong>, nel cuore delle Dolomiti bellunesi, è uno di questi. L&apos;acqua è ferma, verde-azzurra, incorniciata da pareti verticali che scendono direttamente fino alla riva. Stai ancora fermo sulla sponda e già capisci che questo sarà un cammino speciale.
            </p>
            <p>
              L&apos;escursione in <strong>Val Falcina</strong> è un percorso di <strong>circa 4.5 km</strong> con <strong>350 m di dislivello positivo</strong>, completabile in <strong>1 ora e 45 minuti</strong>. Non è una passeggiata da fare distratti: il sentiero è irregolare, pieno di gradoni, e ti chiederà tutto il tuo essere presente. In cambio ti darà piscine naturali dall&apos;acqua invisibile e panorami che si fermano nel cuore.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Le Rive del Lago: Già un Arrivo</h2>
            <p>
              Prima di partire, concediti cinque minuti sulle rive del Lago del Mis. Non è una perdita di tempo: è un&apos;investimento. L&apos;acqua riflette il cielo e le montagne con una precisione che sembra impossibile, un doppio universo capovolto ai tuoi piedi. I colori cambiano con l&apos;ora, con le nuvole, con la luce: dal <strong>grigio-ardesia dei giorni coperti</strong> al <strong>turchese brillante dei giorni di sole</strong>.
            </p>
            <p>
              Il silenzio qui non è assenza di suoni. È presenza di qualcosa che non ha nome — il respiro della montagna, forse, o il suono della lentezza che si fa spazio tra i pensieri veloci che hai portato con te.
            </p>

            <blockquote className="article-quote">
              &quot;Il lago ti guarda mentre ti allacci le scarpe. Ti sta già insegnando qualcosa: che la bellezza non si rincorre. Si aspetta, si incontra, si lascia entrare.&quot;
            </blockquote>

            <div className="article-image">
              <img
                src="/blog/7/lago-del-mis-insenatura.webp"
                alt="Il Lago del Mis con la sua insenatura turchese incorniciata dalle montagne dolomitiche"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Le acque turchesi del Lago del Mis: il punto di partenza che è già una meraviglia</figcaption>
            </div>

            <h2>La Salita Comincia Subito — e Non Mente</h2>
            <p>
              Il sentiero per la Val Falcina non fa finta di essere facile. Parte, e sale. Da subito, con una franchezza quasi commovente. Non ci sono i primi cento metri piani per scaldarsi, non c&apos;è un ingresso graduale: il bosco ti accoglie e il terreno sale, e tu devi decidere immediatamente che tipo di camminatore vuoi essere oggi.
            </p>
            <p>
              La salita è fatta di <strong>gradoni irregolari</strong>, radici sporgenti, sassi lucidi dove il muschio ha trovato casa, tratti in cui si sale e poi si scende per poi risalire ancora. Non è un percorso che si affronta con la testa altrove. Richiede che tu sia <strong>completamente qui</strong>.
            </p>

            <div className="article-tip">
              <h4>🥾 Consiglio di PassoLento</h4>
              <p>Usa scarpe da trekking con suola robusta e buon grip. Il sentiero è bello, ma i gradoni possono essere scivolosi dopo la pioggia. Non è difficile tecnicamente, ma chiede rispetto e attenzione costante.</p>
            </div>

            <div className="article-image">
              <img
                src="/blog/7/lago-del-mis-dal-sentiero.webp"
                alt="Il Lago del Mis visto dal sentiero della Val Falcina attraverso i pini"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Gli scorci sul lago che si aprono tra gli alberi salendo verso la Val Falcina</figcaption>
            </div>

            <h2>Il Sentiero Come Pratica di Mindfulness</h2>
            <p>
              C&apos;è un fenomeno strano che accade dopo qualche minuto su questo sentiero: i pensieri smettono di fare rumore. Non perché tu abbia fatto qualcosa di speciale — è il sentiero che li ha silenziati.
            </p>
            <p>
              Ogni gradone richiede che tu guardi dove metti il piede. Ogni radice è una domanda che il bosco ti pone: <em>sei qui? stai guardando? sei presente?</em> Non c&apos;è spazio per i pensieri parassiti — quelli che rimasterano conversazioni vecchie, che pianificano il futuro, che giudicano il passato. Il sentiero li spazza via con la semplicità di un fatto fisico: <strong>se non guardi dove metti i piedi, inciampi</strong>.
            </p>
            <p>
              È una forma di meditazione camminata che non ha bisogno di istruzioni. Il corpo capisce da solo. L&apos;attenzione va tutta al terreno, e la mente — finalmente — si riposa.
            </p>

            <blockquote className="article-quote">
              &quot;Non cercare di meditare sul sentiero. Lascia che sia il sentiero a meditarti.&quot;
            </blockquote>

            <h2>La Ricompensa Vista dall&apos;Alto</h2>
            <p>
              Salendo, il bosco si apre a tratti e regala <strong>scorci sul Lago del Mis</strong> che cambiano prospettiva ogni volta. Quello che dall&apos;alto sembrava un lago qualunque si rivela uno spazio di bellezza rara: l&apos;acqua occupa la valle con una naturalezza che fa dimenticare che si tratta di un lago artificiale. Le montagne si specchiano in essa con quella gravità silenziosa che solo la roccia sa avere.
            </p>
            <p>
              Fermati ogni volta che il bosco si apre. Ogni scorcio è diverso, ogni angolo racconta qualcosa di diverso della stessa storia. La montagna si presta allo sguardo con generosità, ma solo a chi ha la lentezza di riceverla.
            </p>

            <div className="article-image">
              <img
                src="/blog/7/torrente-val-falcina.webp"
                alt="Il torrente della Val Falcina con l'acqua cristallina che scorre tra le rocce"
                width={800}
                height={1067}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il torrente della Val Falcina: l&apos;acqua è così limpida da sembrare assente</figcaption>
            </div>

            <h2>Le Piscine Naturali: Dove l&apos;Acqua Sparisce</h2>
            <p>
              E poi — dopo la salita, dopo i gradoni, dopo il silenzio conquistato passo dopo passo — arrivi alle <strong>piscine naturali della Val Falcina</strong>. E qui succede qualcosa che è difficile descrivere senza sembrare esagerati: l&apos;acqua è così limpida che <strong>quasi non si vede</strong>.
            </p>
            <p>
              Non è un&apos;esagerazione. È un fatto ottico che il cervello fatica ad accettare. Vedi il fondo, ogni singolo sasso, ogni granello di sabbia, il disegno delle correnti leggere. Ma l&apos;acqua — lo strato che separa l&apos;aria dal fondo — sembra semplicemente assente. Come se qualcuno avesse tolto il mezzo e lasciato solo la realtà sotto.
            </p>
            <p>
              Per attraversare alcuni passaggi bisogna <strong>guadare il torrente</strong>: saltando di roccia in roccia se ti senti agile, bagnandoti i piedi se preferisci la via diretta. Quel momento — il freddo improvviso dell&apos;acqua di montagna che avvolge le caviglie — è uno dei più vivi dell&apos;intera escursione. Non è disagio. È <strong>presenza totale</strong>. Non puoi essere altrove quando l&apos;acqua glaciale ti ricorda con precisione dove sei.
            </p>

            <div className="article-tip">
              <h4>💧 Consiglio di PassoLento</h4>
              <p>Porta con te un paio di sandali da scoglio o scarpe che puoi bagnare senza problemi per i guadi. Camminare a piedi nudi sulle rocce della Val Falcina è anche questo: un&apos;esperienza sensoriale che vale la pianificazione.</p>
            </div>

            <div className="article-image">
              <img
                src="/blog/7/piscina-naturale-profonda.webp"
                alt="Piscina naturale profonda con acqua turchese nella Val Falcina, pareti rocciose verticali"
                width={800}
                height={1067}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>La piscina naturale più profonda: un verde turchese che non sembra reale</figcaption>
            </div>

            <h2>Stupore e Meraviglia — Senza Istruzioni</h2>
            <p>
              La cosa più bella delle piscine della Val Falcina è che non richiedono di essere spiegate. Non hai bisogno di sapere la portata del torrente, la composizione geologica delle rocce, la temperatura esatta dell&apos;acqua. Hai solo bisogno di <strong>stare lì e guardare</strong>.
            </p>
            <p>
              Il fresco dell&apos;acqua che senti nella mano immersa. Il suono del torrente che si fa largo tra le rocce con una logica tutta sua. Il colore dell&apos;acqua che cambia con la profondità — dal trasparente quasi-niente dei fondali bassi al <strong>verde profondo</strong> dove il torrente si allarga in vasca. Le rocce levigate dall&apos;acqua, morbide al tatto come osso, con quella superficie che non assomiglia a nient&apos;altro.
            </p>
            <p>
              È stupore. È meraviglia. Non serve altro.
            </p>

            <div className="article-image">
              <img
                src="/blog/7/piscine-rocce-val-falcina.webp"
                alt="Piscine naturali tra le rocce della Val Falcina con acqua verde limpida"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Le piscine tra le rocce: ogni vasca è una scoperta, ogni passaggio un piccolo guado</figcaption>
            </div>

            <h2>Il Lago che Entra nella Valle</h2>
            <p>
              Verso la fine del percorso, il paesaggio cambia ancora una volta. Il Lago del Mis non è più lontano sotto di te — comincia a <strong>entrare nella valle</strong>, creando insenature e rientranze dove l&apos;acqua si fa più calma, più raccolta, diversa dalla grande distesa aperta.
            </p>
            <p>
              I colori qui diventano turchesi — uno di quei colori che hai visto nelle foto e che pensavi fossero filtri o esagerazioni, e che invece sono <strong>esattamente così</strong>, esattamente quella tinta impossibile tra il blu e il verde che nessuna tavolozza ha mai replicato davvero. La luce balla sull&apos;acqua tra le pareti della valle e crea un effetto che non dimentichi.
            </p>

            <blockquote className="article-quote">
              &quot;Ci sono colori che non appartengono al mondo fatto dall&apos;uomo. Il turchese del Lago del Mis è uno di questi. Ti ricorda che esistono cose che nessuno ha progettato.&quot;
            </blockquote>

            <h2>Il Finale: Meritarsi il Sole sulla Spiaggia</h2>
            <p>
              Il ritorno alle rive del lago ha il sapore delle cose guadagnate. Le gambe sanno di aver lavorato. La testa è silenziosa nel modo buono — non vuota, ma pulita. E il lago è lì, esattamente com&apos;era quando sei partito, ad aspettarti come un vecchio amico che non ha bisogno di parole.
            </p>
            <p>
              Il bar del lago è il posto giusto per chiudere la giornata. Un tavolo all&apos;aperto, un bicchiere o qualcosa di caldo, il sole che scalda le spalle. Le montagne che circondano il lago — quelle stesse montagne che hai visto dall&apos;alto, da dentro, da sotto — adesso sono intorno a te come un abbraccio largo. Le guardi con gli occhi di chi le ha percorse, e sono più tue di quando sei arrivato.
            </p>
            <p>
              È quello che fa un buon cammino: non ti porta in un posto diverso. Ti riporta a te stesso.
            </p>

            <HikingInfo {...post.infoEscursione!} />

            <FAQSection items={[
              {
                question: "Il sentiero per la Val Falcina è adatto ai principianti?",
                answer: "È un percorso di difficoltà media, non adatto ai principianti assoluti. I gradoni irregolari e i tratti sali-scendi richiedono attenzione costante e una certa abitudine al cammino in montagna. Non presenta difficoltà tecniche, ma richiede scarpe adeguate e presenza."
              },
              {
                question: "Dove si parte per la Val Falcina?",
                answer: "Il punto di partenza è il Lago del Mis, nel comune di Sospirolo (Belluno, Veneto). C'è un parcheggio alle rive del lago da cui si imbocca il sentiero per la Val Falcina."
              },
              {
                question: "Si può fare il bagno nelle piscine naturali della Val Falcina?",
                answer: "Le piscine sono raggiungibili e si possono toccare. Per attraversare alcuni passaggi bisogna guadare il torrente saltando sulle rocce o bagnandosi i piedi. Un bagno vero dipende dalla stagione e dalla portata del torrente: in estate le piscine più profonde possono permetterlo."
              },
              {
                question: "Quando è il momento migliore per fare questa escursione?",
                answer: "Estate e inizio autunno sono i periodi migliori, quando le piscine naturali sono accessibili e l'acqua è al massimo della trasparenza. In primavera il torrente può essere più abbondante e i guadi più impegnativi. Evitare dopo piogge abbondanti recenti."
              },
              {
                question: "Quanto è lungo il percorso e quanto ci vuole?",
                answer: "Il percorso è di circa 4.5 km con 350 m di dislivello positivo, completabile in circa 1 ora e 45 minuti. Con le soste alle piscine naturali e per godere dei panorami, calcola almeno 2 ore e mezza."
              },
            ]} />

            <div className="gpx-download">
              <Button
                href="/gpx/escursione_val_falcina.gpx"
                download="escursione_val_falcina.gpx"
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
        <h3>Vuoi camminare con lentezza nella Val Falcina?</h3>
        <p>Unisciti a me nelle escursioni PassoLento. Cammineremo piano, ci fermeremo alle piscine, guarderemo l&apos;acqua invisibile e lasceremo che il sentiero ci insegni a essere presenti.</p>
        <Button
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sulla Val Falcina dal Lago del Mis e vorrei partecipare a un'escursione"
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
