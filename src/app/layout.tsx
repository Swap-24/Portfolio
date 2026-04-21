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
      
      <body>{children}</body>
    </html>
  );
}
