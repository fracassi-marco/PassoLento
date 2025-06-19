import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";
import CookieBanner from "@/app/components/CookieBanner";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "PassoLento - Marco Fracassi | Guida Hiking nelle Dolomiti",
  description: "Scopri le Dolomiti con PassoLento. Marco Fracassi, guida hiking certificata tra Trento e Rivamonte Agordino. Escursioni consapevoli nelle Dolomiti trentine e bellunesi.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
    <head>      
      <meta name="author" content="Marco Fracassi"/>
      <meta name="robots" content="index, follow"/>

      <link rel="preload" href="/dolomiti-bellunesi.webp" as="image"/>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PassoLento",
            "description": "Guida Hiking nelle Dolomiti, per un camminare consapevole",
            "url": "https://passolento.com",
            "telephone": "+39-347-1364144",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Trento",
              "addressRegion": "Trentino Alto Adige",
              "addressCountry": "IT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "46.06",
              "longitude": "11.12"
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Dolomiti"
            }
          })
        }}
      />
    </head>

    <body>
    <CookieBanner/>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
