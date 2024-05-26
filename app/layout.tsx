import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrain confus : Votre havre de paix en pleine nature, loin du quotidien",
  description: "Évadez-vous dans un havre de paix où nature, aventure et détente se rencontrent. Séjour inoubliable pour tous: escapade paisible ou aventure exaltante.",
  alternates: {
    canonical: "https://www.unterrainconfus.fr",
    languages: {
      fr: "https://www.unterrainconfus.fr"
    }
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/2b714f5d03.js" crossOrigin="anonymous"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
      </head>
      <body className={inter.className}>
        <Navbar transparent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
