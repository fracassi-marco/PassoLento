import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import LocationTags from "@/app/components/LocationTags";

export const metadata = defaultMetadata(
  "La Magia della Fonte del Mattino: Quando l'Acqua Diventa Rituale",
  "Scopri la bellezza di un gesto semplice che diventa rituale contemplativo: andare alla fonte per riempire le bottiglie, rallentando per assaporare l'autunno e la magia del passo lento.",
  "/blog/magia-fonte-mattino/",
  ["https://passolento.com/blog/3/fonte-acqua-zoom.webp"],
);

export default function MagiaFonteMattino() {
  return (
    <article className="blog-article">
      <BlogHero 
        title="La Magia della Fonte del Mattino" 
        subtitle="Quando l'acqua diventa rituale e l'autunno si trasforma in preghiera quotidiana"
      />

      <section className="article-location">
        <div className="container">
          <LocationTags regione="Veneto" provincia="Belluno" luogo="Rivamonte Agordino" />
        </div>
      </section> 

      {/* Contenuto dell'articolo */}
      <section className="article-content">
        <div className="container">  
          <img
            src="/blog/3/panorama-autunnale.webp"
            alt="Panorama autunnale dalle montagne con alberi dai colori caldi"
            style={{ width: '100%', height: 'auto' }}
          />

          {/* Introduzione */}
          <div className="article-intro">
            <p className="lead">
              Ho l'acqua potabile in casa. Il rubinetto funziona perfettamente, l'acqua è buona, tutto comodissimo. Eppure, spesso alla mattina, scelgo di uscire nell'<strong>aria frizzantina dell'alba</strong> con le mie bottiglie e borracce vuote, per andare alla fonte poco distante. Perché complicarsi la vita quando si potrebbe fare tutto comodamente? La risposta sta nella <strong>magia del rallentare</strong>.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Il Richiamo della Scomodità</h2>
            <p>
              Viviamo in un'epoca dove tutto deve essere <em>comodo</em>, <em>veloce</em>, <em>efficiente</em>. Eppure, c'è qualcosa di profondamente liberatorio nel scegliere conscientemente la strada più lunga, più scomoda, più lenta. Quando esco di casa al mattino con le bottiglie in mano, non sto semplicemente andando a prendere l'acqua: sto scegliendo di <strong>riconnettermi con il territorio</strong>.
            </p>

            <blockquote className="article-quote">
              "La scomodità scelta è libertà; la comodità subita è prigione" - Filosofia del PassoLento
            </blockquote>

            <h3>L'Arte del Riempire</h3>
            <p>
              Arrivo alla fonte e mi fermo. Non c'è fretta. Il gesto di posizionare la bottiglia sotto il getto d'acqua diventa <strong>meditativo</strong>. Guardo l'acqua che sgorga incessante, penso al suo viaggio sotterraneo, alla montagna che l'ha filtrata, purificata, benedetta.
            </p>
            
            <p>
              Il suono dell'acqua che riempie la bottiglia è <em>musica</em>. Prima un tonalità acuta quando la bottiglia è vuota, poi gradualmente più grave man mano che si riempie. È un <strong>concerto naturale</strong> che ascolto molte volte, sempre uguale eppure sempre diverso.
            </p>

            <div className="article-image">
              <img
                src="/blog/3/fonte-acqua.webp"
                alt="Acqua cristallina che sgorga dalla fonte di montagna"
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>Il getto incessante della fonte: una lezione di costanza e generosità</figcaption>
            </div>

            <h3>L'Autunno Che Si Svela</h3>
            <p>
              Ma la vera magia accade quando, finito di riempire le bottiglie, mi concedo quei <strong>momenti di contemplazione</strong>. In questo periodo autunnale, il panorama è uno spettacolo che cambia ogni giorno: gli alberi si trasformano in <em>pennellate d'oro</em>, le montagne diventano <strong>arazzi colorati</strong> che il sole dell'alba (ormai tarda) accende di sfumature sempre nuove.
            </p>
            
            <p>
              Ogni giorno è diverso. Oggi il faggio sulla collina è più rosso di ieri. Quella quercia ha perso altre foglie. Il larice in lontananza è diventato completamente giallo. Sono testimone di una <strong>trasformazione lenta</strong> che chi corre non può vedere.
            </p>

            <img
            src="/blog/3/fonte-acqua-zoom.webp"
            alt="Fonte acqua con le foglie cadute"
            style={{ width: '100%', height: 'auto' }}
          />

            <h2>La Bellezza del Freddo Mattutino</h2>
            <p>
              L'aria frizzantina del mattino mi sveglia più di qualsiasi caffè (anche se un bel caffè non manca mai). Il freddo sulle guance è un <strong>richiamo alla vita</strong>, un promemoria che sono vivo, presente, connesso con gli elementi. Le dita che si raffreddano mentre tengo le bottiglie mi ricordano la mia fragilità umana e, paradossalmente, mi fanno sentire più forte.
            </p>
            
            <div className="article-tip">
              <h4>🌅 Consiglio di PassoLento</h4>
              <p>Scegli conscientemente la strada più scomoda almeno ogni tanto. Che sia andare a piedi invece che in auto, salire le scale invece dell'ascensore, o come nel mio caso, andare alla fonte invece che aprire il rubinetto.</p>
              <p>Ogni piccola scomodità scelta è un atto di ribellione contro la fretta del mondo moderno.</p>
            </div>

            <h2>Il Paradosso della Lentezza</h2>
            <p>
              Quello che scopri, quando scegli di rallentare, è che <strong>non perdi tempo: lo guadagni</strong>. Quei dieci-quindici minuti alla fonte non sono tempo sottratto alla giornata, sono tempo <em>aggiunto alla vita</em>. Torno a casa con le bottiglie piene e lo spirito pieno.
            </p>

            <ul className="article-list">
              <li><strong>Presenza:</strong> Sono completamente presente nel momento</li>
              <li><strong>Gratitudine:</strong> Apprezzo l'abbondanza naturale che mi circonda</li>
              <li><strong>Connessione:</strong> Mi sento parte del paesaggio e del ciclo naturale</li>
              <li><strong>Pace:</strong> Inizio la giornata con calma e serenità</li>
              <li><strong>Consapevolezza:</strong> Osservo i cambiamenti sottili del territorio</li>
            </ul>

            <h3>L'Acqua Come Maestro</h3>
            <p>
              L'acqua della fonte mi insegna ogni giorno qualcosa di nuovo. La sua <strong>costanza</strong> - sgorga incessante, giorno e notte, estate e inverno. La sua <strong>generosità</strong> - si offre gratuitamente a chiunque. La sua <strong>purezza</strong> - ha viaggiato attraverso la roccia per arrivare limpida fino a me.
            </p>

            <img
            src="/blog/3/montagne-autunno.webp"
            alt="Panorama montano autunnale con colori caldi del foliage"
            style={{ width: '100%', height: 'auto' }}
          />

            <h2>Il Tempo Che Si Dilata</h2>
            <p>
              Quello che più mi affascina di questo rituale mattutino è come il tempo sembra <strong>dilatarsi</strong>. Quei pochi minuti alla fonte contengono un'eternità di sensazioni, osservazioni, riflessioni. È come se l'acqua, scorrendo, portasse via anche la fretta e l'ansia della giornata che sta iniziando.
            </p>

            <div className="article-info-compact">
              <div className="info-row">
                <span className="info-label"><i className="fas fa-clock"></i> Durata:</span>
                <span className="info-value">15 minuti che valgono una vita</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-heart"></i> Difficoltà:</span>
                <span className="info-value">Scegliere la scomodità</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-gift"></i> Benefici:</span>
                <span className="info-value">Spirito pieno, giornata centrata</span>
              </div>
              <div className="info-row">
                <span className="info-label"><i className="fas fa-seedling"></i> Stagione migliore:</span>
                <span className="info-value">Ogni stagione ha la sua magia</span>
              </div>
            </div>

            <h2>Un Invito alla Lentezza</h2>
            <p>
              Non vi sto suggerendo di cambiare casa o di cercare una fonte. Vi sto invitando a <strong>trovare il vostro rituale della lentezza</strong>. Forse è preparare il caffè con la moka invece che con la macchinetta. Forse è andare a comprare il pane a piedi. Forse è sedersi in giardino per cinque minuti prima di entrare in casa.
            </p>
            
            <p>
              L'importante è scegliere consciamente di <strong>rallentare</strong>. Di prendersi cura del proprio spirito come ci si prende cura del corpo. Di ricordare che siamo esseri umani, non macchine da produttività.
            </p>

          </div>

        </div>
      </section>
      
      <section className="article-cta">
        <h3>Vuoi scoprire i tuoi rituali della lentezza?</h3>
        <p>Unisciti a me nelle escursioni PassoLento, dove ogni passo è un'occasione per rallentare, ogni sosta un momento di contemplazione, ogni gesto un rituale di riconnessione con la natura.</p>
        <Button 
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sulla fonte del mattino e sono interessato a scoprire i rituali della lentezza"
          variant="neutral"
          size="large"
          icon="fa-tint"
        >
          Scopri la tua fonte interiore
        </Button>
      </section>
    </article>
  );
}