import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic imports for client-only / heavy components
const NeuralBackground = dynamic(() => import("@/components/NeuralBackground"), { ssr: false });
const CustomCursor     = dynamic(() => import("@/components/CustomCursor"),     { ssr: false });
const ScrollProgress   = dynamic(() => import("@/components/ScrollProgress"),   { ssr: false });
const Navbar           = dynamic(() => import("@/components/Navbar"),           { ssr: false });

export default function Home() {
  return (
    <>
      {/* Global chrome */}
      <NeuralBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
