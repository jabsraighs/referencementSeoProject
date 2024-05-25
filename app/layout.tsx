import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrain confus",
  description: "Bienvenue à Terrain Confus, un lieu unique où la nature, l'aventure et la détente se rencontrent. Que vous soyez à la recherche d'une escapade paisible ou d'une aventure exaltante, notre domaine a quelque chose à offrir à chacun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/2b714f5d03.js" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </head>
      <body className={inter.className}>
        <Navbar transparent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
