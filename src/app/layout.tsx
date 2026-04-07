import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Header from "./components/Header";
import CookieBannerLazy from "./components/CookieBannerLazy";

export const metadata: Metadata = {
  title: "PassoLento - Marco Fracassi | Guida Hiking nelle Dolomiti",
  description: "Scopri le Dolomiti con PassoLento. Marco Fracassi, guida hiking certificata tra Trento e Rivamonte Agordino. Escursioni consapevoli nelle Dolomiti.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
    <head>      
      <meta name="author" content="Marco Fracassi"/>
      <meta name="robots" content="index, follow"/>

      <link rel="preload" href="/dolomiti-bellunesi.avif" as="image" type="image/avif" fetchPriority="high"/>
      <link rel="preload" href="/dolomiti-bellunesi.webp" as="image" fetchPriority="high"/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PassoLento",
            "description": "Guida Hiking nelle Dolomiti, per un camminare consapevole",
            "url": "https://passolento.com",
            "telephone": "+39-347-1364144",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Viale Verona",
              "addressLocality": "Trento",
              "postalCode": "38122",
              "addressRegion": "Trentino Alto Adige",
              "addressCountry": "IT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "46.06",
              "longitude": "11.12"
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Dolomiti"
            },
            "image": "https://passolento.com/dolomiti-bellunesi.webp",
            "priceRange": "€"
          })
        }}
      />
    </head>

    <body>
    <CookieBannerLazy/>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    <script dangerouslySetInnerHTML={{ __html: `
      (function() {
        // Navbar scroll visibility
        var navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function() {
          if ((window.pageYOffset || document.documentElement.scrollTop) > 100) {
            navbar.classList.add('visible');
          } else {
            navbar.classList.remove('visible');
          }
        }, { passive: true });

        // Hamburger menu toggle
        var toggle = document.getElementById('nav-toggle');
        var menu = document.getElementById('nav-menu');
        toggle.addEventListener('click', function() {
          var isOpen = toggle.classList.toggle('active');
          menu.classList.toggle('active', isOpen);
          document.body.style.overflow = isOpen ? 'hidden' : '';
          toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu on link click
        menu.querySelectorAll('.nav-link').forEach(function(link) {
          link.addEventListener('click', function() {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
            toggle.setAttribute('aria-expanded', 'false');
          });
        });

        // Close menu on resize
        window.addEventListener('resize', function() {
          if (window.innerWidth > 768) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
            toggle.setAttribute('aria-expanded', 'false');
          }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var href = anchor.getAttribute('href');
            if (href) {
              var target = document.querySelector(href);
              if (target) {
                window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
              }
            }
          });
        });

        // Fade-in on scroll
        var fadeObserver = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) entry.target.classList.add('visible');
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        function observeFadeIns() {
          document.querySelectorAll('.fade-in:not(.visible)').forEach(function(el) { fadeObserver.observe(el); });
        }
        observeFadeIns();
        // Re-observe after back/forward navigation (Next.js re-renders DOM elements)
        new MutationObserver(observeFadeIns).observe(document.body, { childList: true, subtree: true });
      })();
    ` }} />
    </body>
    </html>
  );
}
