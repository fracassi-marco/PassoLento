import Button from "./Button";

export default function HomeHero() {
  return (
    <section id="home" className="hero">
        <picture>
          <source
            type="image/avif"
            srcSet="/dolomiti-bellunesi-640.avif 640w, /dolomiti-bellunesi.avif 1200w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/dolomiti-bellunesi-640.webp 640w, /dolomiti-bellunesi.webp 1200w"
            sizes="100vw"
          />
          <img
            src="/dolomiti-bellunesi.webp"
            alt="Panorama delle Dolomiti bellunesi"
            className="hero-bg"
            width={1200}
            height={630}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero-content">
          <div className="hero-brand">
            <h1>PassoLento Hiking</h1>
            <div className="brand-divider"></div>
          </div>
          <p className="subtitle">Guida Hiking nelle Dolomiti, per un camminare consapevole</p>
          <p className="tagline">"Riscopri te stesso attraverso il cammino lento"</p>
          <Button 
            href="#contact" 
            variant="neutral" 
            size="large"
            icon="fa-mountain"
          >
            Inizia il tuo viaggio
          </Button>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
          <small>Scorri per scoprire</small>
        </div>
      </section>
  );
}