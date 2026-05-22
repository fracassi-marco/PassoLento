import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import BlogHero from "@/app/components/BlogHero";
import blogPosts from "@/data/blogPosts.json";
import styles from "./page.module.css";

export const metadata = defaultMetadata(
  "Tracce GPX Escursioni Dolomiti e Veneto - Download Gratuito",
  "Scarica gratis le tracce GPX delle escursioni nelle Dolomiti bellunesi e in Veneto. File GPS registrati sul campo, compatibili con Garmin, Komoot, Wikiloc e OsmAnd.",
  "/tracce-gpx/",
  ["https://passolento.com/dolomiti-bellunesi.webp"],
);

const postsWithGpx = blogPosts
  .filter(p => p.gpxFile)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tracce GPX Escursioni Dolomiti e Veneto",
  "description": "File GPX gratuiti per escursioni nelle Dolomiti bellunesi e in Veneto, registrati sul campo da PassoLento.",
  "url": "https://passolento.com/tracce-gpx/",
  "numberOfItems": postsWithGpx.length,
  "itemListElement": postsWithGpx.map((post, index) => ({
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
};

export default function TracceGpxPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <BlogHero
        title="Tracce GPX Escursioni nelle Dolomiti"
        subtitle="Scarica i file GPS delle escursioni e caricali sul tuo dispositivo. Ogni traccia è stata registrata sul campo, passo dopo passo."
      />

      <section className={styles.content}>
        <div className={styles.container}>

          <div className={styles.intro}>
            <p>
              Ogni traccia GPX è stata registrata direttamente sul campo durante le escursioni PassoLento
              tra le <strong>Dolomiti bellunesi</strong> e il <strong>Veneto</strong>. Puoi caricare i file
              su Garmin, Komoot, Wikiloc, OsmAnd o qualsiasi altra app di navigazione escursionistica prima
              di partire — così il sentiero ti accompagna anche quando non c&apos;è segnale.
            </p>
          </div>

          {postsWithGpx.length === 0 ? (
            <p className={styles.empty}>Nessuna traccia GPX disponibile al momento.</p>
          ) : (
            <ul className={styles.list}>
              {postsWithGpx.map(post => (
                <li key={post.id} className={styles.card}>
                  <a href={`/blog/${post.slug}/`} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
                    <div className={styles.imageWrap}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className={styles.image}
                        width={480}
                        height={320}
                      />
                      <div className={styles.imageOverlay}>
                        <span className={styles.overlayLabel}>
                          <i className="fas fa-route" aria-hidden="true"></i>
                          {post.infoEscursione?.lunghezza}
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className={styles.body}>
                    <div className={styles.meta}>
                      {post.luogo && (
                        <span className={styles.place}>
                          <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                          {post.luogo}
                        </span>
                      )}
                      {post.infoEscursione?.difficolta && (
                        <span className={styles.difficulty}>
                          {post.infoEscursione.difficolta}
                        </span>
                      )}
                    </div>

                    <a href={`/blog/${post.slug}/`} className={styles.titleLink}>
                      <h2 className={styles.title}>{post.title}</h2>
                    </a>

                    <p className={styles.excerpt}>{post.excerpt}</p>

                    <div className={styles.actions}>
                      <Button
                        href={`/gpx/${post.gpxFile}`}
                        download={post.gpxFile}
                        variant="primary"
                        size="medium"
                        icon="fa-download"
                      >
                        Scarica traccia GPX
                      </Button>
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

          <div className={styles.info}>
            <i className="fas fa-info-circle" aria-hidden="true"></i>
            <p>
              I file GPX sono compatibili con Garmin, Komoot, Wikiloc, OsmAnd e qualsiasi app di navigazione escursionistica.
              Prima di partire verifica sempre le condizioni meteo e la percorribilità del sentiero.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
