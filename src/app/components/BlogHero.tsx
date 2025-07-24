export default function BlogHero({title, subtitle}: {title: string, subtitle: string}) {
  return (
    <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="back-to-home">
            <a href="/" className="back-link">
              <i className="fas fa-arrow-left"></i>
              Torna a PassoLento
            </a>
          </div>
          <h1>{title}</h1>
          <p className="blog-hero-subtitle">{subtitle}</p>
        </div>
      </section>
  );
}