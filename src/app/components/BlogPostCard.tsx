import Link from "next/link";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function BlogPostCard({
  id,
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  slug
}: BlogPostCardProps) {
  return (
    <article key={id} className="blog-post">
      <div className="blog-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="blog-category">{category}</div>
      </div>
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className="blog-meta">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('it-IT', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <span className="reading-time">{readTime} di lettura</span>
        </div>
        <Link href={`/blog/${slug}/`} className="blog-read-more">
          Leggi l'articolo
        </Link>
      </div>
    </article>
  );
}
