"use client";

import { useState } from "react";
import BlogHero from "../components/BlogHero";
import BlogPostCard from "../components/BlogPostCard";
import Button from "../components/Button";
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
  regione: string | null;
  provincia: string | null;
  luogo: string | null;
}

const blogPosts: BlogPost[] = blogPostsData;

const categories = ["Tutti", ...Array.from(new Set(blogPosts.map(post => post.category)))];
const regioni = ["Tutte", ...Array.from(new Set(blogPosts.map(post => post.regione).filter((r): r is string => r !== null)))];
const province = ["Tutte", ...Array.from(new Set(blogPosts.map(post => post.provincia).filter((p): p is string => p !== null)))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [selectedRegione, setSelectedRegione] = useState("Tutte");
  const [selectedProvincia, setSelectedProvincia] = useState("Tutte");

  const filteredPosts = blogPosts.filter(post => {
    const matchCategory = selectedCategory === "Tutti" || post.category === selectedCategory;
    const matchRegione = selectedRegione === "Tutte" || post.regione === selectedRegione;
    const matchProvincia = selectedProvincia === "Tutte" || post.provincia === selectedProvincia;
    return matchCategory && matchRegione && matchProvincia;
  });

  // Province disponibili in base alla regione selezionata
  const availableProvince = selectedRegione === "Tutte"
    ? province
    : ["Tutte", ...Array.from(new Set(blogPosts.filter(p => p.regione === selectedRegione).map(p => p.provincia).filter((p): p is string => p !== null)))];

  const handleRegioneChange = (regione: string) => {
    setSelectedRegione(regione);
    setSelectedProvincia("Tutte");
  };

  return (
    <div className="blog-page">
      <BlogHero 
        title="Guide e consigli" 
        subtitle="Scopri guide utili e consigli pratici per vivere al meglio le tue esperienze di trekking e nordic walking nelle Dolomiti con la filosofia PassoLento"
      />

      {/* Main Content */}
      <section className="blog-content">
        <div style={{width: '100%', maxWidth: 'none', padding: '0 2rem'}}>
          
          {/* Filtri categoria */}
          <div className="blog-filters">
            {categories.map((category) => (
              <Button
                key={category}
                variant="filter"
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Filtri località */}
          <div className="blog-filters-location">
            <div className="filter-group">
              <label className="filter-label"><i className="fas fa-map"></i> Regione</label>
              <div className="filter-options">
                {regioni.map((regione) => (
                  <button
                    key={regione}
                    type="button"
                    className={`filter-location-btn ${selectedRegione === regione ? 'active' : ''}`}
                    onClick={() => handleRegioneChange(regione)}
                  >
                    {regione}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <label className="filter-label"><i className="fas fa-map-pin"></i> Provincia</label>
              <div className="filter-options">
                {availableProvince.map((prov) => (
                  <button
                    key={prov}
                    type="button"
                    className={`filter-location-btn ${selectedProvincia === prov ? 'active' : ''}`}
                    onClick={() => setSelectedProvincia(prov)}
                  >
                    {prov}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid degli articoli */}
          <div className="blog-grid">
            {filteredPosts
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>

          {/* Se non ci sono risultati */}
          {filteredPosts.length === 0 && (
            <div className="no-results">
              <p>Nessun articolo trovato per i filtri selezionati.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}