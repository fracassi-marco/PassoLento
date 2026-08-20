import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import BlogHero from "@/app/components/BlogHero";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import LocationTags from "@/app/components/LocationTags";
import blogPosts from "@/data/blogPosts.json";
import styles from "./page.module.css";

export const metadata = defaultMetadata(
  "Escursioni in Agordino - Guida Hiking ad Agordo e Rivamonte Agordino",
  "Guida hiking per escursioni consapevoli in Agordino: passeggiate e camminate lente ad Agordo, Rivamonte Agordino e nella Conca Agordina, nel cuore delle Dolomiti Bellunesi.",
  "/escursioni-agordino/",
  ["https://passolento.com/dolomiti-bellunesi.webp"],
);

// Escursioni PassoLento che si svolgono nella zona dell'Agordino / Conca Agordina
const AGORDINO_SLUGS = [
  "valchesina-rivamonte-agordino",
  "magia-fonte-mattino",
  "frassene-rifugio-scarpa",
  "cascate-pont-col-di-pra",
  "giro-lago-alleghe",
  "passo-duran-rifugio-carestiato",
];

const agordinoPosts = AGORDINO_SLUGS
  .map(slug => blogPosts.find(p => p.slug === slug))
  .filter((p): p is typeof blogPosts[number] => Boolean(p))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Escursioni in Agordino",
  "description": "Guida hiking per escursioni consapevoli ad Agordo, Rivamonte Agordino e nella Conca Agordina, nelle Dolomiti Bellunesi.",
  "url": "https://passolento.com/escursioni-agordino/",
  "about": {
    "@type": "Place",
    "name": "Agordino",
    "containsPlace": [
      { "@type": "Place", "name": "Agordo" },
      { "@type": "Place", "name": "Conca Agordina" },
      { "@type": "Place", "name": "Rivamonte Agordino" },
    ],
  },
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": agordinoPosts.length,
    "itemListElement": agordinoPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": post.title,
        "description": post.excerpt,
        "url": `https://passolento.com/blog/${post.slug}/`,
        "image": `https://passolento.com${post.image}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": post.luogo,
          "addressRegion": post.regione,
          "addressCountry": "IT",
        },
      },
    })),
  },
};

export default function EscursioniAgordinoPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <BlogHero
        title="Escursioni in Agordino"
        subtitle="Camminate lente e consapevoli ad Agordo, Rivamonte Agordino e nella Conca Agordina, nel cuore delle Dolomiti Bellunesi."
      />

      <Breadcrumbs items={[{ name: "Escursioni in Agordino", url: "/escursioni-agordino/" }]} />

      <section className={styles.content}>
        <div className={styles.container}>

          <div className={styles.intro}>
            <p>
              L&apos;<strong>Agordino</strong> è il territorio che si stringe attorno ad <strong>Agordo</strong>,
              nella cosiddetta <strong>Conca Agordina</strong>: una vasta area delle <strong>Dolomiti Bellunesi</strong>,
              patrimonio UNESCO, punteggiata di piccoli paesi come <strong>Rivamonte Agordino</strong>, Taibon
              Agordino, Voltago Agordino e Alleghe. Vivo io stesso tra Trento e Rivamonte Agordino, e con{" "}
              <em>PassoLento</em> accompagno chi vuole scoprire questa zona a passo lento, lontano dalla folla e
              dai ritmi frenetici delle mete più turistiche.
            </p>
          </div>

          <div className={styles.info}>
            <i className="fas fa-info-circle" aria-hidden="true"></i>
            <p>
              Ogni escursione qui sotto nasce da un&apos;uscita realmente percorsa in <strong>Agordino</strong>,
              con racconto, informazioni pratiche (durata, dislivello, difficoltà) e, dove disponibile, traccia
              GPX scaricabile gratuitamente.
            </p>
          </div>

          {agordinoPosts.length === 0 ? (
            <p className={styles.empty}>Nessuna escursione disponibile al momento.</p>
          ) : (
            <ul className={styles.list}>
              {agordinoPosts.map(post => (
                <li key={post.id} className={styles.card}>
                  <a href={`/blog/${post.slug}/`} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
                    <div className={styles.imageWrap}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className={styles.image}
                        width={480}
                        height={320}
                        loading="lazy"
                      />
                      {post.infoEscursione?.lunghezza && (
                        <div className={styles.imageOverlay}>
                          <span className={styles.overlayLabel}>
                            <i className="fas fa-route" aria-hidden="true"></i>
                            {post.infoEscursione.lunghezza}
                          </span>
                        </div>
                      )}
                    </div>
                  </a>

                  <div className={styles.body}>
                    <LocationTags regione={post.regione} provincia={post.provincia} luogo={post.luogo} />

                    <a href={`/blog/${post.slug}/`} className={styles.titleLink}>
                      <h2 className={styles.title}>{post.title}</h2>
                    </a>

                    <p className={styles.excerpt}>{post.excerpt}</p>

                    {post.infoEscursione?.difficolta && (
                      <span className={styles.difficulty}>{post.infoEscursione.difficolta}</span>
                    )}

                    <div className={styles.actions}>
                      <Button
                        href={`/blog/${post.slug}/`}
                        variant="ghost"
                        size="medium"
                        icon="fa-arrow-right"
                        iconPosition="right"
                        className={styles.readMore}
                      >
                        Leggi il racconto
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className={styles.cta}>
            <h3>Vuoi organizzare un&apos;escursione in Agordino?</h3>
            <p>
              Contattami per organizzare una camminata su misura ad Agordo, Rivamonte Agordino o in qualsiasi
              angolo della Conca Agordina.
            </p>
            <Button
              href="https://wa.me/393471364144?text=Ciao Marco! Ho visto la pagina Escursioni in Agordino su PassoLento e sono interessato"
              variant="primary"
              icon="fa-whatsapp"
            >
              Scrivimi su WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
