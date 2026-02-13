import Button from "./Button";

export default function BlogHero({title, subtitle}: {title: string, subtitle: string}) {
  return (
    <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="back-to-home">
            <Button 
              href="/" 
              variant="ghost"
              icon="fa-arrow-left"
            >
              Torna a PassoLento
            </Button>
          </div>
          <h1>{title}</h1>
          <p className="blog-hero-subtitle">{subtitle}</p>
        </div>
      </section>
  );
}