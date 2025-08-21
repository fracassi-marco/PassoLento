import defaultMetadata from "@/app/components/DefaultMetadata";
import BlogHero from "../components/BlogHero";

export const metadata = defaultMetadata(
  "Regolamento Escursioni - PassoLento",
  "Leggi il regolamento per partecipare alle escursioni di PassoLento. Scopri le regole, i requisiti e le modalità per vivere al meglio l'esperienza del camminare contemplativo.",
  "/regolamento-escursioni/",
  ["https://passolento.com/images/regolamento-hero.webp"],
);

export default function RegolamentoEscursioni() {
  return (
    <article className="regolamento-page">
      <BlogHero
        title="Regolamento Escursioni"
        subtitle="Le regole per vivere al meglio l'esperienza del passo lento in sicurezza e rispetto della natura"
      />

      {/* Contenuto principale */}
      <section className="regolamento-content">
        <div className="container">
          
          {/* Introduzione */}
          <div className="intro-section">
            <h2>🌿 Filosofia PassoLento</h2>
            <p className="lead">
              Le nostre escursioni non sono semplici camminate, ma <strong>esperienze contemplative</strong> che richiedono 
              un approccio rispettoso verso la natura, gli altri partecipanti e se stessi. Queste regole garantiscono 
              che ogni esperienza sia sicura, significativa e in armonia con i principi del camminare lento.
            </p>
          </div>

          {/* Partecipazione e Prenotazioni */}
          <div className="regolamento-section">
            <h2>📅 Partecipazione e Prenotazioni</h2>
            
            <h3>Modalità di Iscrizione</h3>
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Prenotazione obbligatoria:</strong> Tutte le escursioni richiedono prenotazione anticipata tramite WhatsApp o email
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Conferma entro 48h:</strong> La partecipazione deve essere confermata almeno 48 ore prima della data prevista
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Numero massimo:</strong> Ogni escursione ha un numero limitato di partecipanti (solitamente max 6-8 persone) per garantire qualità e sicurezza
                </div>
              </div>
            </div>

            <h3>Requisiti di Partecipazione</h3>
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Età minima:</strong> 16 anni (i minori devono essere accompagnati da un adulto)
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Condizione fisica:</strong> Buona salute generale e assenza di patologie che possano essere aggravate dall&apos;attività fisica
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Esperienza:</strong> Non è richiesta esperienza specifica, ma è necessaria predisposizione al ritmo lento
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Autorizzazione medica:</strong> Consigliata per persone oltre i 70 anni o con condizioni mediche particolari
                </div>
              </div>
            </div>
          </div>

          {/* Equipaggiamento */}
          <div className="regolamento-section">
            <h2>🎒 Equipaggiamento Obbligatorio</h2>
            
            <div className="equipment-grid">
              <div className="equipment-category">
                <h3>👕 Abbigliamento</h3>
                <div className="simple-list">
                  <div className="list-item important">
                    <span className="item-bullet red">•</span>
                    <div className="item-content">
                      <strong>Scarpe da trekking con suola antiscivolo</strong>
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Abbigliamento a strati adatto alle condizioni meteo
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Giacca impermeabile o mantellina antipioggia
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Maglietta e calze di ricambio
                    </div>
                  </div>                  
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Guanti (stagione fredda)
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="equipment-category">
                <h3>🎯 Attrezzatura</h3>
                <div className="simple-list">
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Zaino comodo adeguato all'escursione
                    </div>
                  </div>
                  <div className="list-item important">
                    <span className="item-bullet blue">•</span>
                    <div className="item-content">
                      <strong>Borraccia piena d&apos;acqua</strong>
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Pranzo al sacco (per escursioni che prevedono pranzo) e snack energetici 
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Crema solare (fattore minimo 30)
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Kit di primo soccorso personale (farmaci abituali)
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-bullet">•</span>
                    <div className="item-content">
                      Cellulare con batteria carica
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="equipment-note">
              <p><strong>⚠️ Nota:</strong> L&apos;organizzatore si riserva il diritto di escludere dall&apos;escursione chi si presenta con equipaggiamento inadeguato per motivi di sicurezza.</p>
            </div>
          </div>

          {/* Comportamento durante l'escursione */}
          <div className="regolamento-section">
            <h2>❤️ Comportamento e Rispetto</h2>
            
            <h3>🌱 Verso la Natura</h3>
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet green">•</span>
                <div className="item-content">
                  <strong>Leave No Trace:</strong> Non lasciare tracce del tuo passaggio
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet green">•</span>
                <div className="item-content">
                  <strong>Rispetto della flora:</strong> Non raccogliere fiori, frutti o rami
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet green">•</span>
                <div className="item-content">
                  <strong>Rispetto della fauna:</strong> Osservare gli animali da distanza rispettosa
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet green">•</span>
                <div className="item-content">
                  <strong>Sentieri:</strong> Rimanere sempre sui sentieri segnalati
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet green">•</span>
                <div className="item-content">
                  <strong>Rifiuti:</strong> Portare via tutto ciò che si porta (inclusi resti organici)
                </div>
              </div>
            </div>

            <h3>👥 Verso gli Altri Partecipanti</h3>
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet blue">•</span>
                <div className="item-content">
                  <strong>Passo del gruppo:</strong> Rispettare il ritmo lento e contemplativo dell&apos;escursione
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet blue">•</span>
                <div className="item-content">
                  <strong>Silenzi:</strong> Rispettare i momenti di silenzio e contemplazione
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet blue">•</span>
                <div className="item-content">
                  <strong>Solidarietà:</strong> Aiutare i compagni in difficoltà
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet blue">•</span>
                <div className="item-content">
                  <strong>Condivisione:</strong> Partecipare attivamente ai momenti di condivisione
                </div>
              </div>
            </div>

            <h3>🙋‍♂️ Verso se Stessi</h3>
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet orange">•</span>
                <div className="item-content">
                  <strong>Autoresponsabilità:</strong> Conoscere i propri limiti e rispettarli
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet orange">•</span>
                <div className="item-content">
                  <strong>Comunicazione:</strong> Comunicare tempestivamente eventuali difficoltà
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet orange">•</span>
                <div className="item-content">
                  <strong>Presenza:</strong> Essere presenti nel momento, evitando distrazioni
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet orange">•</span>
                <div className="item-content">
                  <strong>Apertura:</strong> Essere aperti all&apos;esperienza contemplativa
                </div>
              </div>
            </div>
          </div>

          {/* Sicurezza e Responsabilità */}
          <div className="regolamento-section">
            <h2>🛡️ Sicurezza e Responsabilità</h2>
            
            <h3>Responsabilità del Partecipante</h3>
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Dichiarazione sanitaria:</strong> Comunicare eventuali problemi di salute, allergie o terapie farmacologiche
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Assicurazione:</strong> È consigliabile avere una polizza assicurativa per attività sportive
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Istruzioni guida:</strong> Seguire sempre le indicazioni della guida
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Limiti personali:</strong> Comunicare immediatamente eventuali difficoltà o malesseri
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Equipaggiamento:</strong> Verificare l&apos;adeguatezza del proprio equipaggiamento
                </div>
              </div>
            </div>

            <h3>Responsabilità dell&apos;Organizzatore</h3>
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Sicurezza:</strong> Garantire la sicurezza dell&apos;escursione nei limiti del possibile
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Competenza:</strong> Fornire guide esperte e qualificate
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Informazioni:</strong> Comunicare chiaramente le caratteristiche dell&apos;escursione
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Primo soccorso:</strong> Avere formazione di primo soccorso e kit di emergenza
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Comunicazioni:</strong> Mantenere contatti con servizi di emergenza quando necessario
                </div>
              </div>
            </div>
          </div>

          {/* Condizioni Meteo */}
          <div className="regolamento-section">
            <h2>🌦️ Condizioni Meteorologiche</h2>
            
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Monitoraggio:</strong> Le condizioni meteo vengono monitorate costantemente
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Annullamento:</strong> L&apos;escursione può essere annullata per condizioni pericolose
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Comunicazione:</strong> I partecipanti vengono avvisati entro la sera precedente
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Riprogrammazione:</strong> Possibilità di spostare l&apos;escursione a data successiva
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Pioggia leggera:</strong> Non costituisce motivo di annullamento se non pericolosa
                </div>
              </div>
            </div>
          </div>

          {/* Privacy e Foto */}
          <div className="regolamento-section">
            <h2>📸 Privacy e Documentazione</h2>
            
            <div className="simple-list">
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Foto di gruppo:</strong> Possibili foto di gruppo per documentazione
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Social media:</strong> Le foto possono essere utilizzate per promozione (senza volti riconoscibili)
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Opt-out:</strong> Possibilità di non apparire nelle foto comunicandolo alla guida
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Foto personali:</strong> Rispetto della privacy altrui quando si scattano foto
                </div>
              </div>
              <div className="list-item">
                <span className="item-bullet">•</span>
                <div className="item-content">
                  <strong>Condivisione:</strong> Incoraggiata la condivisione responsabile sui social con #PassoLento
                </div>
              </div>
            </div>
          </div>

          {/* Accettazione Regolamento */}
          <div className="acceptance-section">
            <h2>🤝 Accettazione del Regolamento</h2>
            <p>
              La partecipazione a qualsiasi escursione di PassoLento implica <strong>l&apos;accettazione integrale</strong> 
              del presente regolamento. È responsabilità del partecipante leggerlo attentamente e rispettarlo.
            </p>
            
            <p>
              PassoLento si riserva il diritto di <strong>modificare il presente regolamento</strong> in qualsiasi momento, 
              comunicando le variazioni attraverso il sito web e i canali di comunicazione ufficiali.
            </p>

            <div className="contact-info">
              <h3>📞 Per Informazioni e Chiarimenti</h3>
              <p>
                <strong>Marco - Guida PassoLento</strong><br />
                WhatsApp: <a href="https://wa.me/393471364144">+39 347 136 4144</a><br />
                Email: <a href="mailto:info@passolento.com">info@passolento.com</a>
              </p>
            </div>
          </div>

        </div>
      </section>

    </article>
  );
}