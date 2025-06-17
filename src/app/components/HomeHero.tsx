export default function HomeHero() {
  return (
    <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-brand">
            <h1>PassoLento</h1>
            <div className="brand-divider"></div>
          </div>
          <p className="subtitle">Guida Hiking nelle Dolomiti, per un camminare consapevole</p>
          <p className="tagline">"Riscopri te stesso attraverso il cammino lento"</p>
          <a href="#contact" className="cta-button">
            <i className="fas fa-mountain"></i>
            Inizia il tuo viaggio
          </a>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
          <small>Scorri per scoprire</small>
        </div>
      </section>
  );
}