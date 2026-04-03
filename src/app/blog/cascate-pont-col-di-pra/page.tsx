import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import LocationTags from "@/app/components/LocationTags";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "cascate-pont-col-di-pra")!;

export const metadata = defaultMetadata(
  "Da Col di Prà alle Cascate di Pont: Meraviglia a Passo Lento",
  "Una passeggiata contemplativa da Col di Prà alle Cascate di Pont a Taibon Agordino. Boschi, montagne, fontane di tronco e la bellezza selvaggia dell'acqua che scolpisce la roccia.",
  "/blog/cascate-pont-col-di-pra/",
  ["https://passolento.com/blog/5/cascata-pont-1.webp"],
);

export default function CascatePontColDiPra() {
  return (
    <article className="blog-article">
      <BlogHero 
        title="Da Col di Prà alle Cascate di Pont" 
        subtitle="Una salita lenta tra boschi e montagne, dove ogni dettaglio diventa meraviglia"
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
              Esiste un sentiero, nel cuore dell&apos;Agordino, che non chiede di essere conquistato. Chiede solo di essere <strong>camminato con lentezza</strong>. Da Col di Prà alle Cascate di Pont, a <strong>Taibon Agordino</strong>, il cammino sale dolce tra i boschi, regalando a chi sa rallentare un susseguirsi di piccole meraviglie che preparano l&apos;animo allo spettacolo finale.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>La Salita che Non Ha Fretta</h2>
            <p>
              Si parte da Col di Prà e subito il bosco ti accoglie come un abbraccio. Il sentiero sale con garbo, senza strappi, come se la montagna stessa volesse insegnarti il ritmo giusto. I <strong>faggi e gli abeti</strong> si alternano ai lati, creando una cattedrale verde dove la luce filtra in lame dorate.
            </p>
            
            <p>
              A ogni tornante lo sguardo si apre: le <strong>montagne dell&apos;Agordino</strong> si mostrano un pezzo alla volta, come un sipario che si alza lentamente. Non serve correre per raggiungere la cima: qui il premio è il cammino stesso, il profumo della resina, il crepitio morbido del sottobosco sotto i piedi, il canto di un uccello nascosto che saluta chi passa piano.
            </p>

            <blockquote className="article-quote">
              &quot;Ogni passo verso l&apos;alto è un passo verso dentro. La montagna non si conquista: si ascolta.&quot;
            </blockquote>

            <h2>La Fontana nel Tronco Cavo</h2>

            <div className="article-image">
              <img
                src="/blog/5/fontana-legno.webp"
                alt="Fontana ricavata da un tronco di legno lungo il sentiero verso le Cascate di Pont"
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Una fontana ricavata dal legno, dove l&apos;acqua scorre senza fretta</figcaption>
            </div>

            <p>
              Poi, lungo il sentiero, succede qualcosa di semplice e poetico: un <strong>rivolo d&apos;acqua</strong> è stato incanalato dentro un tronco cavo, trasformato in fontana. L&apos;acqua esce con un filo sottile e costante, con quel suono cristallino che è impossibile ignorare.
            </p>

            <p>
              Ti fermi. Non puoi non fermarti. C&apos;è qualcosa di commovente nell&apos;ingegno umile di chi ha saputo leggere la montagna e accompagnare l&apos;acqua senza forzarla. Un tronco, un rivolo, e nasce una <strong>piccola opera d&apos;arte</strong> che non ha bisogno di firma. L&apos;acqua è freddissima, viva, con un suono che nessun rubinetto potrà mai restituire.
            </p>

            <p>
              È uno di quei momenti in cui capisci che <strong>la bellezza non ha bisogno di grandezza</strong>. A volte basta un tronco cavo e un filo d&apos;acqua.
            </p>

            <h2>Lo Sguardo di un Bambino</h2>

            <div className="article-image">
              <img
                src="/blog/5/cascata-pont-1.webp"
                alt="Le Cascate di Pont a Taibon Agordino, l'acqua precipita tra le rocce scolpite"
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Le Cascate di Pont: l&apos;acqua precipita con una forza che senti nella pancia</figcaption>
            </div>

            <p>
              E poi arrivi alle <strong>Cascate di Pont</strong>. E qui bisogna fare una cosa fondamentale: dimenticare di essere adulti. Dimenticare i nomi delle cose, le nozioni, le misurazioni. Bisogna guardare con gli <strong>occhi di un bambino</strong>, con quello stupore primordiale che non chiede spiegazioni ma si lascia semplicemente attraversare dalla meraviglia.
            </p>
            
            <p>
              L&apos;acqua precipita con una forza che senti nella pancia, che ti vibra nelle ossa. Il fragore non è rumore: è la <strong>voce della montagna</strong> che racconta millenni di pazienza. E intorno a te, ogni dettaglio è una scoperta.
            </p>

            <h3>Dove Ogni Dettaglio Diventa Meraviglia</h3>
            <p>
              I <strong>tronchi</strong> caduti attraverso il torrente diventano ponti naturali, sculture involontarie, monumenti alla casualità perfetta della natura. Sono lisci dove l&apos;acqua li ha accarezzati per anni, ruvidi dove il muschio li ha reclamati.
            </p>

            <p>
              Le <strong>rocce</strong> sono pagine di un libro scolpito dall&apos;acqua con calligrafia millenaria. Curve morbide dove ti aspetteresti spigoli, vasche levigate dove l&apos;acqua riposa un istante prima di riprendere il suo viaggio. Ogni incavo, ogni solco, ogni forma sinuosa racconta il dialogo eterno tra acqua e pietra.
            </p>

            <p>
              Le <strong>piscine naturali</strong> brillano di quel verde smeraldo impossibile, un colore che sembra inventato, troppo bello per essere reale. L&apos;acqua è talmente trasparente che vedi ogni sasso sul fondo, ogni sfumatura, ogni gioco di luce. Ti viene voglia di immergere almeno una mano, solo per sentire quel freddo che ricorda che la montagna è viva.
            </p>

            <p>
              I <strong>ponti</strong> — quelli costruiti dall&apos;uomo — ti regalano prospettive vertiginose: guardare la cascata dal basso, sentirne lo spruzzo sulla faccia; osservarla dall&apos;alto, dove l&apos;acqua sembra muoversi al rallentatore prima del grande salto.
            </p>

            <blockquote className="article-quote">
              &quot;Un bambino non dice: &apos;che bella cascata&apos;. Un bambino resta a bocca aperta. È quella bocca aperta che dobbiamo ritrovare.&quot;
            </blockquote>

            <h2>La Lezione dell&apos;Acqua</h2>

            <div className="article-image">
              <img
                src="/blog/5/cascata-pont-2.webp"
                alt="Dettaglio della cascata di Pont, l'acqua scorre tra la roccia scolpita"
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>L&apos;acqua scolpisce la roccia con pazienza millenaria</figcaption>
            </div>

            <p>
              L&apos;acqua delle Cascate di Pont non ha fretta e non ha paura. <strong>Scorre, cade, risale, si insinua, scava, accarezza, rompe</strong>. Fa tutto con la stessa naturalezza, senza scegliere cosa essere. È potente e delicata nello stesso istante. È distruzione e creazione in un unico movimento.
            </p>

            <p>
              Restare seduti davanti alla cascata, anche solo per dieci minuti, è una <strong>forma di meditazione</strong> che non ha bisogno di tecniche né di guide. Il suono dell&apos;acqua azzera i pensieri. Lo sguardo si perde nei mille rivoli che si intrecciano sulla parete di roccia. Il respiro si sincronizza con il ritmo della natura.
            </p>

            <div className="article-tip">
              <h4>🥾 Consiglio di PassoLento</h4>
              <p>Non limitarti a guardare la cascata dall&apos;unico punto panoramico. Esplora i dintorni: avvicinati alle rocce scolpite, cerca i piccoli rivoli laterali. La meraviglia si nasconde nei dettagli, e i dettagli si rivelano solo a chi ha la pazienza di cercarli.</p>
            </div>

            <h2>Il Ritorno: Scendere con gli Occhi Nuovi</h2>
            <p>
              La discesa è un altro cammino. Non perché il sentiero sia diverso, ma perché <strong>tu sei diverso</strong>. Lo stupore della cascata ti ha lavato lo sguardo, e adesso vedi cose che all&apos;andata non avevi notato: un fungo che spunta da un ceppo, una ragnatela tessuta tra due rami battuta dalla luce, il disegno delle radici che si aggrappano alla terra.
            </p>

            <p>
              Torni a Col di Prà con le gambe un po&apos; stanche e il cuore pieno. Non hai conquistato nessuna vetta, non hai battuto nessun record. Hai fatto qualcosa di molto più raro: hai camminato con <strong>lentezza</strong>, hai guardato con <strong>meraviglia</strong>, hai ascoltato con <strong>il silenzio</strong>.
            </p>

            <div className="article-info-compact">
              <div className="info-row">
                <span className="info-label"><i className="fas fa-map-marker-alt"></i> Partenza:</span>
                <span className="info-value">Col di Prà, Taibon Agordino (BL)</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-flag-checkered"></i> Arrivo:</span>
                <span className="info-value">Cascate di Pont</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-clock"></i> Durata:</span>
                <span className="info-value">2-3 ore (andata e ritorno, con soste contemplative)</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-mountain"></i> Difficoltà:</span>
                <span className="info-value">Facile — adatta a tutti</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-heart"></i> Momento migliore:</span>
                <span className="info-value">Dopo una pioggia, quando la cascata è al massimo della potenza</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-child"></i> Per famiglie:</span>
                <span className="info-value">Perfetta — i bambini sono i migliori maestri di meraviglia</span>
              </div>
            </div>

          </div>

        </div>
      </section>
      
      <section className="article-cta">
        <h3>Vuoi lasciarti stupire dalla cascata?</h3>
        <p>Unisciti a me nelle escursioni PassoLento. Cammineremo piano, guarderemo con occhi nuovi e lasceremo che la montagna ci insegni il suo ritmo.</p>
        <Button 
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sulle Cascate di Pont e vorrei partecipare a un'escursione"
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