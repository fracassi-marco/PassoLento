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
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="Marco Fracassi"/>
      <meta name="robots" content="noindex, nofollow"/>

      <link rel="preload" href="/dolomiti-bellunesi.webp" as="image"/>
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
