import defaultMetadata from "@/app/components/DefaultMetadata";
import HomeHero from "./components/HomeHero";

export const metadata = defaultMetadata(
  "Guida Hiking nelle Dolomiti",
  "Scopri le Dolomiti con PassoLento. Marco Fracassi, guida hiking certificata tra Trento e Rivamonte Agordino. Escursioni consapevoli nelle Dolomiti trentine e bellunesi.",
  "",
  ["https://passolento.com/dolomiti-bellunesi.webp"]
);

export default function Home() {
  return (
    <>
      <HomeHero />

      <section id="about" className="fade-in">
        <h2>Chi Sono</h2>
        <div className="about-intro">
          <p className="intro-text">
            Benvenuto su <strong>PassoLento</strong>, dove ogni passo è un momento di consapevolezza.
            Sono Marco Fracassi, la tua guida per riscoprire la bellezza del cammino lento nelle magnifiche
            Dolomiti.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3><i className="fas fa-mountain"></i> La Mia Passione</h3>
            <p>Sono Marco, praticante di Nordic Walking e guida hiking abilitata. Vivo tra Trento e
              Rivamonte Agordino, immerso nella bellezza delle Dolomiti trentine e bellunesi che amo
              condividere attraverso <em>PassoLento</em>.</p>
          </div>
          <div className="about-card">
            <h3><i className="fas fa-heart"></i> La Mia Missione</h3>
            <p>Attraverso <em>PassoLento</em> accompagno le persone in escursioni semplici e accessibili,
              creando esperienze che vanno oltre il semplice camminare. Ogni uscita è un'opportunità per
              riconnettersi con la natura e con se stessi.</p>
          </div>
          <div className="about-card">
            <h3><i className="fas fa-leaf"></i> Il Mio Approccio</h3>
            <p>La filosofia di <em>PassoLento</em> integra l'aspetto naturalistico e sportivo con momenti di
              riflessione e consapevolezza. Lavoro con singoli e gruppi aziendali, sempre attraverso il
              contatto diretto con la natura.</p>
          </div>
        </div>
      </section>

      <section id="services" className="services fade-in">
        <h2>I Servizi di PassoLento</h2>
        <div className="services-intro">
          <p>Su <strong>PassoLento</strong> trovi esperienze uniche che celebrano la lentezza come filosofia di
            vita,
            per riscoprire i veri ritmi della natura e di noi stessi.</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🥾</div>
            <h3>Escursioni Hiking Consapevoli</h3>
            <p>Percorsi lenti e contemplativi nelle Dolomiti, dove ogni passo è un momento di presenza e
              connessione con la natura circostante.</p>
          </div>
          {/*<div className="service-card">
              <div className="service-icon">🏔️</div>
              <h3>Nordic Walking Meditativo</h3>
              <p>Sessioni di camminata con bastoncini che uniscono movimento fisico e mindfulness, per godere dei
                  panorami montani con ritmo naturale.</p>
          </div>*/}
          <div className="service-card">
            <div className="service-icon">🧘</div>
            <h3>Camminate a Passo Lento</h3>
            <p>L'essenza di <em>PassoLento</em>: esperienze che combinano movimento e meditazione, con momenti
              di camminata barefoot per sentire la terra.</p>
          </div>
          {/*<div className="service-card">
              <div className="service-icon">🌿</div>
              <h3>Immersioni Naturalistiche</h3>
              <p>Escursioni lente che esplorano flora e fauna locale, con pause contemplative per apprezzare i
                  dettagli e i ritmi della natura.</p>
          </div>*/}
          <div className="service-card">
            <div className="service-icon">🤝</div>
            <h3>Team Building Aziendale</h3>
            <p>Esperienze aziendali uniche firmate <em>PassoLento</em> per rafforzare i legami tra colleghi
              attraverso la condivisione consapevole nella natura.</p>
          </div>
        </div>
      </section>

      <section id="calendar" className="calendar fade-in">
        <div className="calendar-content">
          <h2>Prossime Escursioni PassoLento</h2>
          <div className="calendar-intro">
            <p>Scopri le prossime avventure di <strong>PassoLento</strong> nelle Dolomiti.
              Ogni escursione è pensata per celebrare la bellezza del cammino lento e consapevole.</p>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <div className="event-day">23</div>
                <div className="event-month">Luglio 2025</div>
              </div>
              <div className="event-content">
                <div className="event-difficulty">Pranzo al sacco o in malga</div>
                <h3 className="event-title">Cascata di Cavalese - Malga Salanzada</h3>
                <p className="event-details">Un percorso dolce tra i pascoli alpini con la filosofia
                  <em>PassoLento</em>. Camminata consapevole con soste meditative e tratti a piedi nudi
                  sui prati.</p>
                <div className="event-meta">
                  <div className="event-meta-item">
                    <i className="fas fa-clock"></i>
                    <span>10:30 - 15:00</span>
                  </div>
                  <div className="event-meta-item">
                    <i className="fas fa-route"></i>
                    <span>7 km</span>
                  </div>
                  <div className="event-meta-item">
                    <i className="fas fa-mountain"></i>
                    <span>+250m dislivello</span>
                  </div>
                </div>
                <a href="#contact" className="event-book-btn">Prenota su PassoLento</a>
              </div>
            </div>

            {/*<div className="event-card">
                <div className="event-date">
                    <div className="event-day">22</div>
                    <div className="event-month">Giugno 2025</div>
                </div>
                <div className="event-content">
                    <div className="event-difficulty">Ritmo Naturale</div>
                    <h3 className="event-title">Camminata al Lago di Carezza</h3>
                    <p className="event-details">Sessione Hiking con l'approccio <em>PassoLento</em>
                        intorno al famoso "Lago Arcobaleno" con tecniche di respirazione consapevole.</p>
                    <div className="event-meta">
                        <div className="event-meta-item">
                            <i className="fas fa-clock"></i>
                            <span>14:00 - 17:30</span>
                        </div>
                        <div className="event-meta-item">
                            <i className="fas fa-route"></i>
                            <span>6 km</span>
                        </div>
                        <div className="event-meta-item">
                            <i className="fas fa-mountain"></i>
                            <span>+150m dislivello</span>
                        </div>
                    </div>
                    <a href="#contact" className="event-book-btn">Prenota su PassoLento</a>
                </div>
            </div>*/}

            {/*<div className="event-card">
                <div className="event-date">
                    <div className="event-day">29</div>
                    <div className="event-month">Giugno 2025</div>
                </div>
                <div className="event-content">
                    <div className="event-difficulty">Alba Lenta</div>
                    <h3 className="event-title">Alba consapevole al Passo Giau</h3>
                    <p className="event-details">Esperienza unica firmata <em>PassoLento</em> per assistere all'alba
                        sulle Dolomiti con pratica di mindfulness e camminata barefoot sui prati alpini.</p>
                    <div className="event-meta">
                        <div className="event-meta-item">
                            <i className="fas fa-clock"></i>
                            <span>5:30 - 10:00</span>
                        </div>
                        <div className="event-meta-item">
                            <i className="fas fa-route"></i>
                            <span>4 km</span>
                        </div>
                        <div className="event-meta-item">
                            <i className="fas fa-mountain"></i>
                            <span>+200m dislivello</span>
                        </div>
                    </div>
                    <a href="#contact" className="event-book-btn">Prenota su PassoLento</a>
                </div>
            </div>*/}
          </div>

          <div className="calendar-note">
            <p><strong>🌱 La filosofia PassoLento:</strong> Tutte le escursioni individuali sono gratuite e
              basate su contributo volontario consapevole.</p>
            <p>Per rimanere aggiornato su tutte le attività di <em>PassoLento</em> e ricevere il calendario
              completo, <a href="#contact">contattami direttamente</a>.</p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="philosophy fade-in">
        <h2>La Filosofia di PassoLento</h2>
        <div className="philosophy-content">
          <p><strong>PassoLento</strong> nasce dalla convinzione che il camminare in montagna sia molto più di un
            semplice esercizio fisico. È un viaggio interiore che ci permette di prendere consapevolezza della
            meccanicità delle nostre azioni quotidiane e di ritrovare un contatto autentico con noi stessi.</p>

          <div className="philosophy-highlight">
            <h3>🐌 Il Passo Lento come Filosofia</h3>
            <p>Su <b>PassoLento</b> celebriamo la lentezza come scelta consapevole. Ogni passo è
              un'opportunità per essere presenti nel momento, per ascoltare il nostro corpo e la nostra mente,
              per riconoscere i pattern automatici che ci guidano nella vita quotidiana.</p>
          </div>

          <div className="philosophy-highlight">
            <h3>🦶 Connessione Fisica con la Natura</h3>
            <p>I tratti di camminata a piedi nudi sono il cuore dell'esperienza PassoLento. Ci
              permettono di sentire direttamente il terreno sotto i nostri piedi, risvegliando sensazioni
              sopite e creando un legame profondo con la terra che ci sostiene.</p>
          </div>

          <div className="philosophy-highlight">
            <h3>🤝 Team Building Autentico</h3>
            <p>Per le aziende, PassoLento offre esperienze di team building che vanno oltre le attività
              tradizionali. Attraverso il cammino condiviso lento e la riflessione collettiva, i gruppi
              scoprono nuove dinamiche di collaborazione.</p>
          </div>

          <div className="philosophy-highlight">
            <h3>🎁 Offerta Libera e Consapevole</h3>
            <p>La missione di PassoLento è rendere accessibili a tutti le escursioni individuali,
              gratuite e basate su offerta libera consapevole. Per i servizi aziendali, contattami per un
              preventivo personalizzato.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact fade-in">
        <h2>Contatta PassoLento</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p className="contact-intro">
              Sei pronto per iniziare il tuo viaggio con <strong>PassoLento</strong>?
              Riscopri te stesso attraverso il cammino lento nelle magnifiche Dolomiti.
              Contattami per organizzare la tua prossima avventura consapevole.
            </p>

            <div className="contact-highlight">
              <h3>🌱 L'Approccio PassoLento</h3>
              <p>Ogni escursione è pensata su misura per te, seguendo la filosofia del passo lento. Che tu sia
                un principiante o un esperto camminatore, l'importante è la voglia di rallentare e
                riscoprirsi.</p>
            </div>

            <div className="contact-highlight">
              <h3>📅 Prenota su PassoLento</h3>
              <p>Prenota direttamente via WhatsApp o chiamami per organizzare la tua esperienza. Su
                <em>PassoLento</em> rispondo sempre entro poche ore, senza fretta ma con attenzione!</p>
            </div>

            <a
              href="https://wa.me/393471364144?text=Ciao Marco! Ho visitato PassoLento e sono interessato alle tue escursioni nelle Dolomiti"
              className="whatsapp-cta">
              <i className="fab fa-whatsapp"></i>
              Prenota via WhatsApp
            </a>

            {/*<div className="social-links">
                <a href="#" className="social-link instagram" title="Seguimi su Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link facebook" title="Seguimi su Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link telegram" title="Unisciti al canale Telegram">
                    <i className="fab fa-telegram-plane"></i>
                </a>
            </div>*/}
          </div>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Dove trovi PassoLento</h3>
              </div>
              <div className="contact-details">
                <p><strong>Base operativa:</strong><br/>
                  Trento - Trentino Alto Adige<br/>
                  Rivamonte Agordino - Veneto</p>
                <p><em>PassoLento opera principalmente nelle Dolomiti Trentine e Bellunesi</em></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Chiamami</h3>
              </div>
              <div className="contact-details">
                <p><a href="tel:+393471364144" className="contact-link">+39 3471364144</a></p>
                <p><em>Disponibile dalle 8:00 alle 20:00<br/>
                  Anche nei weekend (con il ritmo di PassoLento!)</em></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Scrivimi</h3>
              </div>
              <div className="contact-details">
                <p><a href="mailto:marco@passolento.com" className="contact-link">marco@passolento.com</a></p>
                <p><em>Rispondo entro 24 ore<br/>
                  Perfetto per richieste dettagliate su PassoLento</em></p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h3>WhatsApp</h3>
              </div>
              <div className="contact-details">
                <p><a href="https://wa.me/393471364144" className="contact-link">+39 3471364144</a></p>
                <p><em>Il modo più veloce per prenotare su PassoLento<br/>
                  Risposta immediata ma sempre a passo lento!</em></p>
              </div>
            </div>

            <div className="emergency-note">
              <h4>⛰️ Info PassoLento</h4>
              <p>Le escursioni di PassoLento si svolgono con qualsiasi condizione meteo sicura. In caso di
                maltempo estremo, riprogrammeremo insieme la tua avventura lenta!</p>
            </div>
          </div>
        </div>
      </section>

      {/*<section id="blog" className="blog fade-in">
          <h2>Guide e Consigli</h2>
          <div className="blog-intro">
              <p>Scopri guide utili e consigli pratici per vivere al meglio le tue esperienze di trekking e nordic walking nelle Dolomiti con la filosofia <strong>PassoLento</strong></p>
          </div>

          <div className="blog-grid">
              <article className="blog-post">
                  <div className="blog-image">
                      <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop&crop=center" alt="Equipaggiamento per escursioni nelle Dolomiti" loading="lazy">
                      <div className="blog-category">Preparazione</div>
                  </div>
                  <div className="blog-content">
                      <h3>Come prepararsi per un'escursione nelle Dolomiti</h3>
                      <p>Tutto quello che devi sapere per affrontare al meglio i sentieri dolomitioi: equipaggiamento essenziale, abbigliamento a strati e preparazione fisica seguendo l'approccio PassoLento.</p>
                      <div className="blog-meta">
                          <time datetime="2025-06-10">10 Giugno 2025</time>
                          <span className="reading-time">5 min di lettura</span>
                      </div>
                      <a href="#" className="blog-read-more">Leggi la guida completa</a>
                  </div>
              </article>

              <article className="blog-post">
                  <div className="blog-image">
                      <img src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=250&fit=crop&crop=center" alt="Tecnica Nordic Walking nelle Dolomiti" loading="lazy">
                      <div className="blog-category">Nordic Walking</div>
                  </div>
                  <div className="blog-content">
                      <h3>Nordic Walking: la tecnica per camminare consapevolmente</h3>
                      <p>Scopri i fondamenti del Nordic Walking applicati alla filosofia PassoLento. Come utilizzare correttamente i bastoncini per un'esperienza di camminata meditativa e benefica.</p>
                      <div className="blog-meta">
                          <time datetime="2025-06-08">8 Giugno 2025</time>
                          <span className="reading-time">7 min di lettura</span>
                      </div>
                      <a href="#" className="blog-read-more">Scopri la tecnica</a>
                  </div>
              </article>

              <article className="blog-post">
                  <div className="blog-image">
                      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center" alt="Mindfulness in montagna Dolomiti" loading="lazy">
                      <div className="blog-category">Mindfulness</div>
                  </div>
                  <div className="blog-content">
                      <h3>Mindfulness in montagna: il cuore di PassoLento</h3>
                      <p>Come integrare pratiche di consapevolezza durante le escursioni. Tecniche di respirazione, camminata barefoot e momenti di silenzio per connettersi con la natura.</p>
                      <div className="blog-meta">
                          <time datetime="2025-06-05">5 Giugno 2025</time>
                          <span className="reading-time">6 min di lettura</span>
                      </div>
                      <a href="#" className="blog-read-more">Approfondisci</a>
                  </div>
              </article>

              <article className="blog-post">
                  <div className="blog-image">
                      <img src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=400&h=250&fit=crop&crop=center" alt="Sentieri facili nelle Dolomiti per principianti" loading="lazy">
                      <div className="blog-category">Itinerari</div>
                  </div>
                  <div className="blog-content">
                      <h3>5 sentieri facili nelle Dolomiti per iniziare</h3>
                      <p>Una selezione di percorsi accessibili perfetti per chi si avvicina al trekking o vuole vivere l'esperienza PassoLento. Itinerari testati e adatti a tutti i livelli.</p>
                      <div className="blog-meta">
                          <time datetime="2025-06-03">3 Giugno 2025</time>
                          <span className="reading-time">8 min di lettura</span>
                      </div>
                      <a href="#" className="blog-read-more">Esplora i sentieri</a>
                  </div>
              </article>
          </div>

          <div className="blog-view-all">
              <h3>🌲 Scopri tutti i nostri articoli</h3>
              <p>Approfondisci la filosofia PassoLento con guide dettagliate, consigli pratici e storie dalle Dolomiti</p>
              <a href="./blog.html" className="view-all-btn">
                  <i className="fas fa-book-open" aria-hidden="true"></i>
                  Vedi tutti gli articoli del blog
              </a>
          </div>
      </section>*/}
    </>
  );
}
