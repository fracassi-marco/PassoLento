"use client";

import { useState } from "react";
import Link from "next/link";
import BlogHero from "../components/BlogHero";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Valchesina: La Passeggiata delle Fontane",
    excerpt: "Un viaggio contemplativo tra le fontane secolari di Rivamonte Agordino, dove ogni goccia racconta una storia",
    category: "Escursioni",
    date: "2025-07-24",
    readTime: "5 min",
    image: "/blog/1/fontana-1.webp",
    slug: "valchesina-rivamonte-agordino"
  },
  {
    id: "2", 
    title: "Val di Fassa: Da Pera di Fassa a Canazei",
    excerpt: "Una passeggiata rigenerante lungo il fiume Avisio, tra le maestose vette delle Dolomiti e fontane di montagna purissime",
    category: "Escursioni",
    date: "2025-06-15",
    readTime: "6 min",
    image: "/blog/2/montagna.webp",
    slug: "val-di-fassa-pera-canazei"
  },
  {
    id: "3",
    title: "La Magia della Fonte del Mattino",
    excerpt: "Quando l'acqua diventa rituale e l'autunno si trasforma in preghiera quotidiana",
    category: "Riflessioni",
    date: "2025-10-20",
    readTime: "4 min", 
    image: "/blog/3/fonte-acqua-zoom.webp",
    slug: "magia-fonte-mattino"
  }
];

const categories = ["Tutti", "Escursioni", "Riflessioni", "Consigli"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  const filteredPosts = selectedCategory === "Tutti" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <BlogHero 
        title="Guide e consigli" 
        subtitle="Scopri guide utili e consigli pratici per vivere al meglio le tue esperienze di trekking e nordic walking nelle Dolomiti con la filosofia PassoLento"
      />

      {/* Main Content */}
      <section className="blog-content">
        <div style={{width: '100%', maxWidth: 'none', padding: '0 2rem'}}>
          
          {/* Filtri */}
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid degli articoli */}
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-post">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('it-IT', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </time>
                    <span className="reading-time">{post.readTime} di lettura</span>
                  </div>
                  <Link href={`/blog/${post.slug}/`} className="blog-read-more">
                    Leggi l'articolo
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Se non ci sono risultati */}
          {filteredPosts.length === 0 && (
            <div className="no-results">
              <p>Nessun articolo trovato per la categoria selezionata.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}