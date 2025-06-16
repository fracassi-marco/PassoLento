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
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="Marco Fracassi"/>
      <meta httpEquiv="content-language" content="it"/>
      <meta name="robots" content="noindex, nofollow"/>

      <link rel="preload" href="/dolomiti-bellunesi.webp" as="image"/>

      <link rel="preconnect" href="https://cdnjs.cloudflare.com"/>
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"/>
      <link
        rel="preload"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        as="style"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        crossOrigin="anonymous"
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
