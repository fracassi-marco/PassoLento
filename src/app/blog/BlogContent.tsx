"use client";

import { useState } from "react";
import BlogPostCard from "../components/BlogPostCard";
import Button from "../components/Button";
import blogPostsData from "@/data/blogPosts.json";
import styles from "./blog.module.css";

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

export default function BlogContent() {
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
    <section className={styles['blog-content']}>
      <div style={{width: '100%', maxWidth: 'none', padding: '0 2rem'}}>
        
        {/* Filtri */}
        <div className={styles['blog-filters-location']}>
          <div className={styles['filter-group']}>
            <label className={styles['filter-label']}><i className="fas fa-tag"></i> Tipo</label>
            <div className={styles['blog-filters']}>
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
          </div>
          <div className={styles['filter-group']}>
            <label className={styles['filter-label']}><i className="fas fa-map"></i> Regione</label>
            <div className={styles['blog-filters']}>
              {regioni.map((regione) => (
                <Button
                  key={regione}
                  variant="filter"
                  active={selectedRegione === regione}
                  onClick={() => handleRegioneChange(regione)}
                >
                  {regione}
                </Button>
              ))}
            </div>
          </div>
          <div className={styles['filter-group']}>
            <label className={styles['filter-label']}><i className="fas fa-map-pin"></i> Provincia</label>
            <div className={styles['blog-filters']}>
              {availableProvince.map((prov) => (
                <Button
                  key={prov}
                  variant="filter"
                  active={selectedProvincia === prov}
                  onClick={() => setSelectedProvincia(prov)}
                >
                  {prov}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid degli articoli */}
        <div className={styles['blog-grid']}>
          {filteredPosts
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>

        {/* Se non ci sono risultati */}
        {filteredPosts.length === 0 && (
          <div className={styles['no-results']}>
            <p>Nessun articolo trovato per i filtri selezionati.</p>
          </div>
        )}

      </div>
    </section>
  );
}
