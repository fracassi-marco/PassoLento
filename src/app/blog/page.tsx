import defaultMetadata from "@/app/components/DefaultMetadata";
import BlogHero from "../components/BlogHero";
import BlogContent from "./BlogContent";

export const metadata = defaultMetadata(
  "Guide e Consigli - Blog",
  "Scopri guide utili e consigli pratici per vivere al meglio le tue esperienze di trekking e nordic walking nelle Dolomiti con la filosofia PassoLento.",
  "/blog/",
  ["https://passolento.com/dolomiti-bellunesi.webp"],
);

export default function BlogPage() {
  return (
    <div className="blog-page">
      <BlogHero 
        title="Guide e consigli" 
        subtitle="Scopri guide utili e consigli pratici per vivere al meglio le tue esperienze di trekking e nordic walking nelle Dolomiti con la filosofia PassoLento"
      />

      <BlogContent />

      <section className="blog-intro">
        <p>
          Benvenuto nel blog di PassoLento, uno spazio dedicato a chi ama camminare con consapevolezza
          tra le montagne delle Dolomiti. Qui troverai racconti di escursioni, consigli pratici per
          il trekking e il nordic walking, e riflessioni sul significato profondo del camminare a passo
          lento nella natura. Ogni articolo nasce da esperienze vissute sui sentieri del Trentino-Alto Adige
          e del Veneto, tra valli silenziose, boschi di conifere e panorami che tolgono il fiato.
          Che tu sia un escursionista esperto o stia muovendo i primi passi in montagna, queste guide
          ti accompagneranno nella scoperta di itinerari, fontane nascoste e luoghi dove il tempo
          sembra fermarsi.
        </p>
      </section>
    </div>
  );
}