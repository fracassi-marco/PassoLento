export default function Header() {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-mountain"></i>
            <span>PassoLento</span>
          </div>

          <button
            className="nav-toggle"
            id="nav-toggle"
            aria-label="Apri menu di navigazione"
            aria-expanded="false"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className="nav-menu" id="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link" aria-label="Vai alla homepage">Home</a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-link" aria-label="Scopri chi sono">Chi Sono</a>
            </li>
            <li className="nav-item">
              <a href="/#services" className="nav-link" aria-label="Vedi i servizi">Servizi</a>
            </li>
            <li className="nav-item">
              <a href="/#calendar" className="nav-link" aria-label="Prossime escursioni">Prossime Escursioni</a>
            </li>
            <li className="nav-item">
              <a href="/#philosophy" className="nav-link" aria-label="La mia filosofia">Filosofia</a>
            </li>
            <li className="nav-item">
              <a href="/blog/" className="nav-link blog-link" aria-label="Leggi il blog">📝 Blog</a>
            </li>
            <li className="nav-item">
              <a href="/tracce-gpx/" className="nav-link" aria-label="Scarica le tracce GPX">
                <i className="fas fa-map" style={{marginRight: '0.4rem', fontSize: '0.85em'}} aria-hidden="true"></i>Tracce GPX
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-link" aria-label="Contattami">Contatti</a>
            </li>
          </ul>
        </div>
      </nav>

      <style>{`
        #navbar {
          transform: translateY(-100%);
          transition: transform 0.3s ease-in-out;
        }

        #navbar.visible {
          transform: translateY(0);
        }
      `}</style>
    </header>
  );
}
