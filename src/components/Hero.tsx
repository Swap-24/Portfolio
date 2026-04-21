"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { portfolioData } from "@/data";

const ROLES = [
  "AI / ML Engineer",
  "Computer Vision Dev",
  "Full Stack Builder",
  "Systems Thinker",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-accent">
      {displayed}
      <span className="animate-blink">_</span>
    </span>
  );
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const dur = 1400;
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setVal(parseFloat((ease * target).toFixed(2)));
            if (t < 1) requestAnimationFrame(tick);
            else setVal(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-syne)" }}>
      {val}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { name, email, github, linkedin, stats } = portfolioData;
  const [first, last] = name.split(" ");

  return (
    <section id="hero" className="relative z-10 min-h-screen grid place-items-center px-6 md:px-12 pt-24 pb-16">
      <div className="max-w-5xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-0"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-accent" />
            <span
              className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              AI / ML Engineer · Computer Science @ KIIT
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3.5rem,9vw,7.5rem)] font-extrabold leading-[0.93] tracking-[-0.04em] text-slate-100 mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {first}
            <br />
            <span className="text-gradient">{last}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-[clamp(0.85rem,1.5vw,1rem)] tracking-[0.08em] text-slate-500 mb-6"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            {"//"} &nbsp;<Typewriter />
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-[520px] text-[1.05rem] font-light text-slate-400 leading-[1.8] mb-10"
          >
            {portfolioData.summary}
          </motion.p>

          {/* CTA row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.1em] uppercase bg-accent text-bg px-6 py-3 transition-all hover:shadow-[0_0_28px_rgba(0,229,255,0.35)] hover:-translate-y-0.5 clip-corner-sm"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              <ArrowDown size={13} /> View Projects
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.1em] uppercase text-accent border border-accent/25 px-6 py-3 transition-all hover:border-accent/60 hover:bg-accent/5"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              <Github size={13} /> GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.1em] uppercase text-slate-500 border border-white/[0.08] px-6 py-3 transition-all hover:text-accent hover:border-accent/25"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              <Linkedin size={13} /> LinkedIn
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/[0.07]"
          >
            {stats.map(({ value, suffix, label }) => (
              <div key={label}>
                <div
                  className="text-[2.5rem] font-extrabold leading-none text-accent"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div
                  className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-muted mt-1.5"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
