'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const fadeInRef = useRef<IntersectionObserver | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize fade-in animations and smooth scrolling
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    fadeInRef.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      }
    }, observerOptions);

    for (const el of document.querySelectorAll('.fade-in')) {
      fadeInRef.current?.observe(el);
    }

    // Smooth scrolling for anchor links
    const abortController = new AbortController();
    for (const anchor of document.querySelectorAll('a[href^="#"]')) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }, { signal: abortController.signal });
    }

    return () => {
      if (fadeInRef.current) {
        fadeInRef.current.disconnect();
      }
      abortController.abort();
    };
  }, []);

  // Navbar scroll behavior (independent of route)
  useEffect(() => {
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        navbar?.classList.add('visible');
      } else {
        navbar?.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            {<li className="nav-item">
                <a href="/blog/" className="nav-link blog-link" aria-label="Leggi il blog">📝 Blog</a>
            </li>}
            <li className="nav-item">
              <a href="/tracce-gpx/" className="nav-link" aria-label="Scarica le tracce GPX" onClick={closeMenu}>
                <i className="fas fa-map" style={{marginRight: '0.4rem', fontSize: '0.85em'}} aria-hidden="true"></i>Tracce GPX
              </a>
            </li>
            <li className="nav-item">
              <a href="/#contact" className="nav-link" aria-label="Contattami" onClick={closeMenu}>Contatti</a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
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