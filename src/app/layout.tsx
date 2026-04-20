import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swapnil Lahiri — AI/ML Engineer",
  description:
    "AI/ML-focused Computer Engineering student at KIIT. Building intelligent systems from scratch — computer vision, real-time AI arenas, RAG pipelines, and more.",
  keywords: ["AI", "ML", "Computer Vision", "React", "Python", "KIIT", "Swapnil Lahiri"],
  openGraph: {
    title: "Swapnil Lahiri — AI/ML Engineer",
    description: "Portfolio of Swapnil Lahiri — AI/ML, Computer Vision, Full Stack.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
