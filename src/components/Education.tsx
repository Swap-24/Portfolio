"use client";

import { Reveal, SectionTag, SectionTitle } from "@/components/ui";
import { portfolioData } from "@/data";

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-32 px-6 md:px-12 max-w-[1280px] mx-auto">
      <Reveal className="mb-14">
        <SectionTag>Background</SectionTag>
        <SectionTitle>Education</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {portfolioData.education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.1}>
            <div className="relative bg-surface border border-white/[0.07] p-8 overflow-hidden group hover:border-accent/25 transition-all duration-300 hover:-translate-y-1">
              {/* Accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent" />

              <div
                className="font-mono text-[0.62rem] tracking-[0.12em] text-muted mb-3"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {edu.year}
              </div>
              <h3
                className="text-[1.15rem] font-bold text-slate-100 mb-1.5 leading-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {edu.degree}
              </h3>
              <div className="text-accent text-[0.9rem] mb-3">{edu.institution}</div>
              <div className="text-[0.82rem] text-muted leading-[1.65]">{edu.detail}</div>

              {/* Location badge */}
              <div
                className="absolute top-7 right-7 font-mono text-[0.58rem] tracking-[0.1em] uppercase text-muted/50"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {edu.location}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
