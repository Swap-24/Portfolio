"use client";

import { Reveal, SectionTag, SectionTitle } from "@/components/ui";
import { portfolioData } from "@/data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-32 px-6 md:px-12 bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-14">
          <SectionTag>Learning</SectionTag>
          <SectionTitle>Certifications</SectionTitle>
        </Reveal>

        <div className="flex flex-col">
          {portfolioData.certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.07}>
              <motion.div
                whileHover={{ x: 4, backgroundColor: "rgba(13,20,37,0.9)" }}
                transition={{ duration: 0.2 }}
                className="group grid grid-cols-[120px_1fr_auto] md:grid-cols-[160px_1fr_auto] gap-6 md:gap-10 items-center py-6 border-b border-white/[0.06] hover:border-accent/20 transition-colors duration-200 cursor-default"
              >
                {/* Period */}
                <div
                  className="font-mono text-[0.62rem] tracking-[0.1em] text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  {cert.period}
                </div>

                {/* Title + issuer */}
                <div>
                  <div className="text-[0.95rem] font-medium text-slate-200 group-hover:text-slate-100 transition-colors leading-snug">
                    {cert.name}
                  </div>
                  <div className="text-[0.8rem] text-muted mt-1">{cert.issuer}</div>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-accent3 border border-accent3/30 px-3 py-1.5 whitespace-nowrap group-hover:border-accent3/60 transition-colors"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  <CheckCircle2 size={11} />
                  Done
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
