"use client";

import { Reveal, SectionTag, SectionTitle } from "@/components/ui";
import { portfolioData } from "@/data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-32 px-6 md:px-12 bg-bg2">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-14">
          <SectionTag>Tech Stack</SectionTag>
          <SectionTitle>Skills</SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.07}>
              <motion.div
                whileHover={{ borderColor: "rgba(0,229,255,0.25)", y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface border border-white/[0.06] p-6 clip-corner-sm h-full"
              >
                <div
                  className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-accent mb-4"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ backgroundColor: "rgba(0,229,255,0.08)", color: "#00e5ff" }}
                      className="text-[0.82rem] text-slate-300 bg-surface2 border border-white/[0.06] px-3 py-1.5 cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
