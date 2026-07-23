import BlogHero from "@/app/components/BlogHero";
import defaultMetadata from "@/app/components/DefaultMetadata";
import Button from "@/app/components/Button";
import LocationTags from "@/app/components/LocationTags";
import blogPosts from "@/data/blogPosts.json";

const post = blogPosts.find(p => p.slug === "aspettare-e-rallentare")!;

export const metadata = defaultMetadata(
  "Aspettare l'Ultimo: Quando Fermarsi Diventa un Regalo",
  "Quando si cammina in gruppo, aspettare chi resta indietro è un atto conscio e volontario per rallentare: costoso, perché spezza il passo, ma prezioso, perché apre gli occhi sulle persone e sul paesaggio.",
  "/blog/aspettare-e-rallentare/",
  ["https://passolento.com/blog/9/gruppo-nel-bosco.webp"],
);

export default function AspettareERallentare() {
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
            "image": "https://passolento.com/blog/9/vista-dolomiti.webp",
            "author": { "@type": "Person", "name": "Marco Fracassi", "url": "https://passolento.com" },
            "publisher": { "@type": "Organization", "name": "PassoLento", "url": "https://passolento.com" },
            "datePublished": post.date,
            "dateModified": post.date,
            "url": `https://passolento.com/blog/${post.slug}/`,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://passolento.com/blog/${post.slug}/` }
          })
        }}
      />
      <BlogHero
        title={post.title}
        subtitle={post.excerpt}
      />

      <section className="article-location">
        <div className="container">
          <LocationTags regione={post.regione} provincia={post.provincia} luogo={post.luogo} />
        </div>
      </section>

      {/* Contenuto dell'articolo */}
      <section className="article-content">
        <div className="container">

          <img
            src="/blog/9/gruppo-nel-bosco.webp"
            alt="Gruppo di escursionisti con zaini che cammina in fila su un sentiero nel bosco"
            width={800}
            height={450}
            style={{ width: '100%', height: 'auto' }}
          />

          {/* Introduzione */}
          <div className="article-intro">
            <p className="lead">
              Quando cammino da solo, il passo lo decido io: lo allungo, lo rallento, mi fermo dove voglio. Quando cammino con altri, no. C&apos;è sempre qualcuno più veloce e qualcuno più lento, e a un certo punto la distanza tra i due si allarga fino a diventare un piccolo problema da risolvere. La soluzione più semplice è anche la più radicale: <strong>fermarsi e aspettare</strong>.
            </p>
          </div>

          {/* Sezione principale */}
          <div className="article-body">
            <h2>Una Scelta, Non un Contrattempo</h2>
            <p>
              Aspettare l&apos;ultimo del gruppo non è subire un ritardo. È una <strong>decisione consapevole</strong>: potrei continuare al mio passo, arrivare prima, guadagnare tempo. Invece scelgo di fermarmi, di interrompere il mio ritmo per lasciare che chi è più indietro mi raggiunga. È un atto piccolo, quasi invisibile, ma è comunque una scelta - e le scelte, anche minime, hanno un costo.
            </p>

            <blockquote className="article-quote">
              &quot;Aspettare non è perdere tempo: è decidere di condividerlo&quot; - Filosofia del PassoLento
            </blockquote>

            <h3>Il Costo di Spezzare il Passo</h3>
            <p>
              Chi cammina lo sa: trovare il proprio ritmo è un lavoro. Le gambe, il respiro, la testa impiegano qualche minuto per <em>sincronizzarsi</em>, per entrare in quello stato in cui il corpo va avanti quasi da solo e la mente può finalmente vagare. Fermarsi rompe tutto questo. Bisogna ripartire, ritrovare il passo, risincronizzare respiro e gambe da capo.
            </p>
            <p>
              E se il gruppo è eterogeneo - qualcuno allenato, qualcuno meno, qualcuno che si distrae, qualcuno che scatta foto - questo può succedere <strong>ogni 200 metri</strong>. Cammino, mi fermo, aspetto, riparto. Cammino, mi fermo, aspetto, riparto. È faticoso, a modo suo: non fisicamente, ma nel senso che richiede una pazienza costante, rinnovata a ogni sosta.
            </p>

            <div className="article-tip">
              <h4>🥾 Quello che ho imparato</h4>
              <p>Ho imparato a considerare le soste forzate non come interruzioni fastidiose, ma come parte del ritmo naturale del camminare insieme. Il gruppo procede al passo del più lento, sempre - la sola domanda è se lo accetto con fastidio o con curiosità.</p>
            </div>

            <div className="article-image">
              <img
                src="/blog/9/vista-dolomiti.webp"
                alt="Vista panoramica su una cima dolomitica tra le nuvole, con alcuni escursionisti su un punto panoramico"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption>È proprio nelle soste che il paesaggio smette di essere solo uno sfondo</figcaption>
            </div>

            <h2>Cosa Si Guadagna, Fermandosi</h2>
            <p>
              Ma proprio in quella sosta, apparentemente sprecata, succede qualcosa. Fermo, con lo sguardo che torna indietro verso chi sta arrivando, mi ritrovo a fare quello che camminando a testa bassa non farei mai: <strong>guardarmi attorno</strong>. Il crinale che si stacca dalla nebbia, il colore diverso che ha preso il bosco in queste settimane, il rumore di un torrente che prima non avevo notato.
            </p>
            <p>
              E poi ci sono le persone. Chi arriva ultimo, spesso, è chi si è fermato a guardare qualcosa, a fare una foto, a riprendere fiato parlando con qualcuno. Aspettarlo significa avere il tempo di <em>osservarlo</em> mentre arriva - il suo passo, la sua espressione, se è stanco o sereno - invece di vederlo solo come un numero da recuperare.
            </p>

            <ul className="article-list">
              <li><strong>Sguardo:</strong> mi volto verso il paesaggio invece che solo avanti</li>
              <li><strong>Attenzione:</strong> noto chi cammina con me, non solo la meta</li>
              <li><strong>Respiro:</strong> il corpo si ferma davvero, anche se solo per un minuto</li>
              <li><strong>Presenza:</strong> esco dall&apos;automatismo del passo e torno a scegliere</li>
            </ul>

            <h3>La Fatica Vale la Pausa</h3>
            <p>
              Non voglio raccontarla come se fosse solo un dono gratuito. Spezzare il passo ogni 200 metri è, a tutti gli effetti, <strong>costoso</strong>: rallenta il gruppo, consuma pazienza, a volte scoraggia. Non è un gesto romantico ogni volta - a volte è solo scomodo. Ma è proprio in questo che sta il punto: è una lentezza <em>scelta</em>, non subita. La fatica di fermarsi è il prezzo che pago per restare un gruppo, e non una fila di persone che camminano nella stessa direzione senza guardarsi.
            </p>

            <h2>Aspettare Come Forma di Attenzione</h2>
            <p>
              C&apos;è una differenza enorme tra il tempo che passa mentre corro verso un obiettivo e il tempo che passa mentre aspetto qualcuno. Nel primo caso il tempo è un ostacolo da consumare più in fretta possibile. Nel secondo, il tempo si apre, e dentro a quell&apos;apertura entra tutto quello che normalmente la fretta mi fa perdere: il paesaggio, le persone, la <strong>consapevolezza</strong> di dove sono e con chi sono.
            </p>
            <p>
              Aspettare, in fondo, è una delle poche forme di lentezza che si esercitano per gli altri più che per se stessi. Quando mi fermo alla fonte del mattino, rallento per me. Quando aspetto l&apos;ultimo del gruppo, rallento per lui - e proprio per questo, paradossalmente, finisco per guadagnarci anche io.
            </p>

            <h2>Fermarmi per gli Altri</h2>
            <p>
              Ogni volta che cammino in gruppo e qualcuno resta indietro, provo a non vivere l&apos;attesa come un contrattempo. È un&apos;occasione, piccola e ripetuta, per fare quello che raramente mi concedo altrimenti: <strong>fermarmi, guardarmi attorno, e guardare le persone con cui sto condividendo la strada</strong>.
            </p>
            <p>
              Per me non è tempo perso. È forse il tempo più pieno di tutta la camminata.
            </p>

          </div>

        </div>
      </section>

      <section className="article-cta">
        <h3>Vuoi scoprire il piacere di camminare (e aspettarsi) insieme?</h3>
        <p>Unisciti a me nelle escursioni PassoLento, dove il passo del gruppo è il passo di tutti, e ogni sosta è un&apos;occasione per guardarsi attorno.</p>
        <Button
          href="https://wa.me/393471364144?text=Ciao Marco! Ho letto l'articolo sull'aspettare e mi interessa scoprire le escursioni PassoLento"
          variant="neutral"
          size="large"
          icon="fa-people-group"
        >
          Scopri le prossime escursioni
        </Button>
      </section>
    </article>
  );
}
