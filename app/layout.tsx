import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEAO",
  description: "SEAO — Gestion des invités, placement et accueil",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="topbar">
          <div className="nav">
            <div className="brand">SEAO</div>
            <nav className="navlinks">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/features">Features</Link>
            </nav>
            <div className="actions">
              <Link className="btn" href="/signin">Sign in</Link>
              <Link className="btn primary" href="/signin">Get Started</Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
