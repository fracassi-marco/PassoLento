import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";

export const metadata = defaultMetadata(
  "Valchesina: La Passeggiata delle Fontane a Rivamonte Agordino",
  "Scopri la magica passeggiata di Valchesina a Rivamonte Agordino. Un'escursione contemplativa tra fontane secolari, alla scoperta della potenza dell'acqua e del passo lento nelle Dolomiti Bellunesi.",
  "/blog/valchesina-rivamonte-agordino/",
  ["https://passolento.com/blog/1/fontana-1.webp"],
);

export default function ValchesinaArticle() {
  return (
    <article className="blog-article">
      <BlogHero 
        title="Valchesina: La Passeggiata delle Fontane" 
        subtitle="Un viaggio contemplativo tra le fontane secolari di Rivamonte Agordino, dove ogni goccia racconta una storia"
      /> 

      {/* Contenuto dell'articolo */}
      <section className="article-content">
        <div className="container">  
        <img
            src="/blog/1/fontana-1.webp"
            alt="La fontana con la sua vasca di pietra antica"
                style={{ width: '100%', height: 'auto' }}
            />

          {/* Introduzione */}
          <div className="article-intro">
            <p className="lead">
              Nel cuore delle Dolomiti Bellunesi, a <strong>Rivamonte Agordino</strong>, si nasconde un tesoro che pochi conoscono: la passeggiata di <strong>Valchesina</strong>. Un percorso dove il tempo sembra essersi fermato, dove l'acqua sussurra storie antiche e dove il passo lento diventa meditazione.
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
                style={{ width: '100%', height: 'auto' }}
            />

            <h2>Informazioni Pratiche</h2>
<div className="article-info-compact">
  <div className="info-row">
    <span className="info-label"><i className="fas fa-clock"></i> Durata:</span>
    <span className="info-value">1 ora e mezza</span>
  </div>
  <div className="info-row">
    <span className="info-label"><i className="fas fa-heart-pulse"></i> Difficoltà:</span>
    <span className="info-value">Facilissima</span>
  </div>
  <div className="info-row">
    <span className="info-label"><i className="fas fa-map-marker-alt"></i> Partenza:</span>
    <span className="info-value">Rivamonte Agordino</span>
  </div>
  <div className="info-row">
    <span className="info-label"><i className="fas fa-mountain"></i> Dislivello:</span>
    <span className="info-value">80m circa</span>
  </div>
</div>

            <h2>Quando Andare</h2>
            <p>
              La passeggiata di Valchesina è praticabile tutto l'anno, ma ogni stagione offre emozioni diverse:
            </p>
            
            <ul>
              <li><strong>Primavera:</strong> La natura si risveglia, il ghiaccio si trasforma in acqua</li>
              <li><strong>Estate:</strong> L'acqua fresca offre ristoro dal caldo</li>
              <li><strong>Autunno:</strong> I colori del foliage si riflettono nelle vasche</li>
              <li><strong>Inverno:</strong> Il ghiaccio crea sculture naturali attorno alle fontane</li>
            </ul>

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