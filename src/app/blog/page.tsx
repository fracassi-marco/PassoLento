import defaultMetadata from "@/app/components/DefaultMetadata";
import BlogHero from "../components/BlogHero";
import BlogContent from "./BlogContent";

export const metadata = defaultMetadata(
  "Guide e Consigli - Blog",
  "Scopri guide utili e consigli pratici per vivere al meglio le tue esperienze di trekking e nordic walking nelle Dolomiti con la filosofia PassoLento.",
  "/blog/",
  ["https://passolento.com/dolomiti-bellunesi.webp"],
);

export default function BlogPage() {
  return (
    <div className="blog-page">
      <BlogHero 
        title="Guide e consigli" 
        subtitle="Scopri guide utili e consigli pratici per vivere al meglio le tue esperienze di trekking e nordic walking nelle Dolomiti con la filosofia PassoLento"
      />

      <BlogContent />
    </div>
  );
}