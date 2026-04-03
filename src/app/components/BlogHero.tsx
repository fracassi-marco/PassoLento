import Button from "./Button";
import styles from "./BlogHero.module.css";

export default function BlogHero({title, subtitle}: {title: string, subtitle: string}) {
  return (
    <section className={styles['blog-hero']}>
        <div className={styles['blog-hero-content']}>
          <div className={styles['back-to-home']}>
            <Button 
              href="/" 
              variant="ghost"
              icon="fa-arrow-left"
            >
              Torna a PassoLento
            </Button>
          </div>
          <h1>{title}</h1>
          <p className={styles['blog-hero-subtitle']}>{subtitle}</p>
        </div>
      </section>
  );
}