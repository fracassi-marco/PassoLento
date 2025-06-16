'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const fadeInRef = useRef<IntersectionObserver | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize fade-in animations
    const initFadeInAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      fadeInRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in').forEach(el => {
        fadeInRef.current?.observe(el);
      });
    };

    // Initialize smooth scrolling
    const initSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href')!);
          if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    };

    // Initialize animations and smooth scrolling
    initFadeInAnimations();
    initSmoothScrolling();

    // Cleanup observer on component unmount
    return () => {
      if (fadeInRef.current) {
        fadeInRef.current.disconnect();
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <nav id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <i className="fas fa-mountain"></i>
            <span>PassoLento</span>
          </div>
          
          <button 
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            id="nav-toggle" 
            aria-label="Apri menu di navigazione" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link" aria-label="Vai alla homepage" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-link" aria-label="Scopri chi sono" onClick={closeMenu}>Chi Sono</a>
            </li>
            <li className="nav-item">
              <a href="/#services" className="nav-link" aria-label="Vedi i servizi" onClick={closeMenu}>Servizi</a>
            </li>
            <li className="nav-item">
              <a href="/#calendar" className="nav-link" aria-label="Prossime escursioni" onClick={closeMenu}>Prossime
                Escursioni</a>
            </li>
            <li className="nav-item">
              <a href="/#philosophy" className="nav-link" aria-label="La mia filosofia" onClick={closeMenu}>Filosofia</a>
            </li>
            {/*<li class="nav-item">
                <a href="./blog.html" class="nav-link blog-link" aria-label="Leggi il blog">📝 Blog</a>
            </li>*/}
            <li className="nav-item">
              <a href="/#contact" className="nav-link" aria-label="Contattami" onClick={closeMenu}>Contatti</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}