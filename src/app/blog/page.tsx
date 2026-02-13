"use client";

import { useState } from "react";
import Link from "next/link";
import BlogHero from "../components/BlogHero";
import blogPostsData from "@/data/blogPosts.json";

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

const blogPosts: BlogPost[] = blogPostsData;

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