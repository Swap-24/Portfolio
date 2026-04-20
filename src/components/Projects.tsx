"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data";
import { Reveal, SectionTag, SectionTitle, TagPill } from "@/components/ui";

const ALL_TAGS = ["All", "AI/ML", "Web", "Vision", "Game"];
const TAG_MAP: Record<string, string[]> = {
  "AI/ML": ["HuggingFace", "LangGraph", "LangChain", "ChromaDB", "LLaMA 3.1", "Groq API", "RAG"],
  "Web":   ["React", "Node.js", "Socket.io", "FastAPI", "Flask", "PostgreSQL", "Supabase"],
  "Vision":["OpenCV", "YOLO", "dlib", "NumPy", "Matplotlib"],
  "Game":  ["Unity", "C#", "MURF API"],
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = portfolioData.projects.filter((p) => {
    if (filter === "All") return true;
    return (TAG_MAP[filter] ?? []).some((t) => p.tags.includes(t));
  });

  return (
    <section id="projects" className="relative z-10 py-32 px-6 md:px-12 max-w-[1280px] mx-auto">
      <Reveal className="mb-14">
        <SectionTag>Selected Work</SectionTag>
        <SectionTitle>Projects</SectionTitle>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mt-8">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`font-mono text-[0.62rem] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 ${
                filter === tag
                  ? "border-accent text-accent bg-accent/8"
                  : "border-white/[0.07] text-muted hover:border-accent/30 hover:text-slate-300"
              }`}
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              {tag}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative border bg-surface transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                project.featured
                  ? "md:col-span-2 border-accent2/30 hover:border-accent2/60"
                  : "border-white/[0.07] hover:border-accent/25"
              } clip-corner-md`}
            >
              {/* Glow overlay on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  project.featured
                    ? "bg-gradient-to-br from-accent2/5 to-transparent"
                    : "bg-gradient-to-br from-accent/4 to-transparent"
                }`}
              />

              {/* Left accent stripe */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] ${
                  project.featured ? "bg-accent2" : "bg-accent/30"
                } group-hover:bg-accent transition-colors duration-300`}
              />

              <div className="p-7 relative">
                {/* Date */}
                <div
                  className="font-mono text-[0.62rem] tracking-[0.12em] text-muted mb-3"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  {project.date}
                </div>

                {/* Title */}
                <h3
                  className={`font-extrabold leading-tight tracking-tight text-slate-100 mb-3 ${
                    project.featured ? "text-[1.5rem] md:text-[1.7rem]" : "text-[1.15rem]"
                  }`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-[0.875rem] text-slate-400 font-light leading-[1.75] mb-4">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="mb-5 space-y-1">
                  {project.bullets.map((b, bi) => (
                    <li key={bi} className="text-[0.82rem] text-slate-400 leading-[1.6] pl-4 relative">
                      <span
                        className={`absolute left-0 top-[0.35rem] text-[0.6rem] ${
                          project.featured ? "text-accent2" : "text-accent"
                        }`}
                      >
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => <TagPill key={t}>{t}</TagPill>)}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
