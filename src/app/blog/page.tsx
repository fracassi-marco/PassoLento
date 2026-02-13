"use client";

import { useState } from "react";
import BlogHero from "../components/BlogHero";
import BlogPostCard from "../components/BlogPostCard";
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
              <BlogPostCard key={post.id} {...post} />
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