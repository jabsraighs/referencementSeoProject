import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrain confus",
  description: "",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="">
            <ul className="flex flex-row space-x-10 place-content-center">
              <li className="text-sky-400"> Accueil </li>
              <li> Activites </li>
              <li> A propos </li>
              <li> Contact </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
