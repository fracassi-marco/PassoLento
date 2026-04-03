import Button from "./Button";
import LocationTags from "./LocationTags";
import styles from "./BlogPostCard.module.css";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  regione?: string | null;
  provincia?: string | null;
  luogo?: string | null;
}

export default function BlogPostCard({
  id,
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  slug,
  regione,
  provincia,
  luogo
}: BlogPostCardProps) {
  return (
    <article key={id} className={styles['blog-post']}>
      <div className={styles['blog-image']}>
        <img src={image} alt={title} width={800} height={450} loading="lazy" />
        <div className={styles['blog-category']}>{category}</div>
      </div>
      <div className={styles['blog-content']}>
        <h3>{title}</h3>
        <LocationTags regione={regione} provincia={provincia} luogo={luogo} />
        <p>{excerpt}</p>
        <div className={styles['blog-meta']}>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('it-IT', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <span className={styles['reading-time']}>{readTime} di lettura</span>
        </div>
        <Button 
          href={`/blog/${slug}/`} 
          variant="primary" 
          icon="fa-mountain"
        >
          Leggi l'articolo
        </Button>
      </div>
    </article>
  );
}
