interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BASE_URL = "https://passolento.com";

/**
 * Componente "invisibile": inietta solo il dato strutturato BreadcrumbList
 * (schema.org) per aiutare Google e i motori generativi a capire la
 * gerarchia delle pagine, senza alcun impatto visivo sul sito.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", url: "/" }, ...items];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${BASE_URL}${item.url}`,
          })),
        }),
      }}
    />
  );
}
