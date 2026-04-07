import { MetadataRoute } from 'next';
import blogPosts from '@/data/blogPosts.json';

export const dynamic = "force-static";

const BASE_URL = 'https://passolento.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date('2025-06-17'), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/blog/`, lastModified: new Date(Math.max(...blogPosts.map(p => new Date(p.date).getTime()))), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tracce-gpx/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/regolamento-escursioni/`, lastModified: new Date('2025-08-21'), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy/`, lastModified: new Date('2025-06-17'), changeFrequency: 'yearly', priority: 0.1 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}
