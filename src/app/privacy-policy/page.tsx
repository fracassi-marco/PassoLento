import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";

export const metadata = defaultMetadata(
  "Informativa sulla Privacy",
  "L'informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano PassoLento, guida hiking",
  "/privacy-policy/",
  ["https://passolento.com/dolomiti-bellunesi.webp"]
);

export default function PrivacyPolicy() {
  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="back-to-home">
            <Button href="/" variant="ghost" icon="fa-arrow-left">
              Torna a PassoLento
            </Button>
          </div>
          <h1>Informativa sulla Privacy</h1>
          <p className="blog-hero-subtitle">PassoLento - Guida Hiking</p>
        </div>
      </section>

      <section>
        <h2 className="privacy-h2">1. Introduzione</h2>
        <p className="privacy-p">La presente informativa descrive le modalità di trattamento dei dati personali degli
          utenti che
          consultano il sito web di PassoLento, guida hiking.</p>

        <div className="highlight-box">
          <strong>🌱 Approccio consapevole:</strong> Come nella mia filosofia di guida, anche il trattamento dei dati
          personali avviene con massima consapevolezza e rispetto per la privacy di ogni persona.
        </div>

        <h2 className="privacy-h2">2. Titolare del Trattamento</h2>
        <p className="privacy-p">Il titolare del trattamento dei dati è:</p>
        <ul className="privacy-ul">
          <li className="privacy-li"><strong>Marco Fracassi</strong></li>
          <li className="privacy-li">Guida e Istruttore Hiking</li>
          <li className="privacy-li">Residenza: Trento</li>
          <li className="privacy-li">Email: marco@passolento.com</li>
        </ul>

        <h2 className="privacy-h2">3. Tipi di Dati Raccolti</h2>

        <h3 className="privacy-h3">3.1 Dati di Navigazione</h3>
        <p className="privacy-p">Durante la normale navigazione, il sito raccoglie automaticamente alcuni dati la cui
          trasmissione è implicita nell'uso dei protocolli di comunicazione Internet:</p>
        <ul className="privacy-ul">
          <li className="privacy-li">Indirizzo IP</li>
          <li className="privacy-li">Tipo di browser</li>
          <li className="privacy-li">Sistema operativo</li>
          <li className="privacy-li">Pagine visitate e tempo di permanenza</li>
          <li className="privacy-li">Data e ora di accesso</li>
        </ul>

        <h3 className="privacy-h3">3.2 Cookie</h3>
        <p className="privacy-p">Il sito utilizza cookie tecnici necessari per il funzionamento del sito stesso:</p>
        <ul className="privacy-ul">
          <li className="privacy-li"><strong>Cookie di preferenze:</strong> per ricordare le scelte dell'utente sui
            cookie
          </li>
          <li className="privacy-li"><strong>Cookie di sessione:</strong> per garantire il corretto funzionamento della
            navigazione
          </li>
        </ul>

        <h3 className="privacy-h3">3.3 Dati di Contatto</h3>
        <p className="privacy-p">Quando contatti PassoLento per prenotazioni o informazioni, vengono raccolti:</p>
        <ul className="privacy-ul">
          <li className="privacy-li">Nome e cognome</li>
          <li className="privacy-li">Indirizzo email</li>
          <li className="privacy-li">Numero di telefono</li>
          <li className="privacy-li">Eventuali informazioni aggiuntive fornite volontariamente</li>
        </ul>

        <h2 className="privacy-h2">4. Finalità del Trattamento</h2>
        <p className="privacy-p">I dati personali sono trattati per le seguenti finalità:</p>

        <h3 className="privacy-h3">4.1 Finalità tecniche</h3>
        <ul className="privacy-ul">
          <li className="privacy-li">Garantire il corretto funzionamento del sito web</li>
          <li className="privacy-li">Migliorare l'esperienza di navigazione</li>
          <li className="privacy-li">Analizzare le statistiche di utilizzo del sito</li>
        </ul>

        <h3 className="privacy-h3">4.2 Finalità di comunicazione</h3>
        <ul className="privacy-ul">
          <li className="privacy-li">Rispondere alle richieste di informazioni</li>
          <li className="privacy-li">Organizzare le escursioni e attività</li>
          <li className="privacy-li">Fornire aggiornamenti su eventi e iniziative</li>
        </ul>

        <h2 className="privacy-h2">5. Base Giuridica del Trattamento</h2>
        <p className="privacy-p">Il trattamento dei dati si basa su:</p>
        <ul className="privacy-ul">
          <li className="privacy-li"><strong>Consenso dell'interessato:</strong> per l'invio di comunicazioni
            promozionali
          </li>
          <li className="privacy-li"><strong>Interesse legittimo:</strong> per l'analisi delle statistiche del sito</li>
          <li className="privacy-li"><strong>Esecuzione di un contratto:</strong> per l'organizzazione delle escursioni
          </li>
        </ul>

        <h2 className="privacy-h2">6. Modalità di Trattamento</h2>
        <p className="privacy-p">I dati personali sono trattati con strumenti automatizzati per il tempo strettamente
          necessario
          a conseguire gli scopi per cui sono stati raccolti.</p>

        <div className="highlight-box">
          <strong>🔒 Sicurezza:</strong> Sono adottate specifiche misure di sicurezza per prevenire la perdita dei dati,
          usi illeciti o non corretti ed accessi non autorizzati.
        </div>

        <h2 className="privacy-h2">7. Conservazione dei Dati</h2>
        <p className="privacy-p">I dati personali sono conservati per il tempo necessario al raggiungimento delle
          finalità:</p>
        <ul className="privacy-ul">
          <li className="privacy-li"><strong>Dati di navigazione:</strong> massimo 24 mesi</li>
          <li className="privacy-li"><strong>Cookie di preferenze:</strong> 12 mesi</li>
          <li className="privacy-li"><strong>Dati di contatto:</strong> fino alla revoca del consenso o richiesta di
            cancellazione
          </li>
        </ul>

        <h2 className="privacy-h2">8. Diritti dell'Interessato</h2>
        <p className="privacy-p">Secondo il GDPR, hai il diritto di:</p>
        <ul className="privacy-ul">
          <li className="privacy-li"><strong>Accesso:</strong> ottenere conferma dell'esistenza dei tuoi dati</li>
          <li className="privacy-li"><strong>Rettifica:</strong> correggere dati inesatti o incompleti</li>
          <li className="privacy-li"><strong>Cancellazione:</strong> richiedere la cancellazione dei dati</li>
          <li className="privacy-li"><strong>Limitazione:</strong> limitare il trattamento dei dati</li>
          <li className="privacy-li"><strong>Portabilità:</strong> ricevere i dati in formato strutturato</li>
          <li className="privacy-li"><strong>Opposizione:</strong> opporti al trattamento</li>
          <li className="privacy-li"><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento
          </li>
        </ul>

        <h2 className="privacy-h2">9. Comunicazione e Diffusione</h2>
        <p className="privacy-p">I dati personali non sono oggetto di diffusione. Possono essere comunicati
          esclusivamente a:
        </p>
        <ul className="privacy-ul">
          <li className="privacy-li">Fornitori di servizi tecnici (hosting, manutenzione)</li>
          <li className="privacy-li">Autorità competenti quando richiesto dalla legge</li>
        </ul>

        <h2 className="privacy-h2">10. Minori</h2>
        <p className="privacy-p">Il sito non è diretto a minori di 16 anni. Non raccogliamo consapevolmente dati
          personali da
          minori senza il consenso dei genitori.</p>

        <div className="contact-box">
          <h3><i className="fas fa-envelope"></i> Contatti per la Privacy</h3>
          <p>Per esercitare i tuoi diritti o per qualsiasi informazione relativa al trattamento dei dati personali,
            contatta:</p>
          <p><strong>Marco Fracassi</strong><br/>
            Email: <a href="mailto:marco@passolento.com">marco@passolento.com</a><br/>
            Telefono: +39 3471364144</p>
        </div>

        <h2 className="privacy-h2">11. Modifiche alla Privacy Policy</h2>
        <p className="privacy-p">La presente informativa può essere aggiornata periodicamente. Le modifiche saranno
          pubblicate
          su questa pagina con indicazione della data di ultimo aggiornamento.</p>

        <div className="last-updated">
          <p><i className="fas fa-calendar-alt"></i> Ultimo aggiornamento: 9 giugno 2025</p>
        </div>
      </section>
    </>
  );
}
