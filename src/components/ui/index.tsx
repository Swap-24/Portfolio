"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Fade-up reveal wrapper ──────────────────────────────────────
interface RevealProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function Reveal({ children, className, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ── Section tag line ────────────────────────────────────────────
export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="block w-6 h-px bg-accent" />
      <span
        className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent"
        style={{ fontFamily: "var(--font-space-mono)" }}
      >
        {children}
      </span>
    </div>
  );
}

// ── Section heading ─────────────────────────────────────────────
export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-slate-100",
        className
      )}
      style={{ fontFamily: "var(--font-syne)" }}
    >
      {children}
    </h2>
  );
}

// ── Tag pill ────────────────────────────────────────────────────
export function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-mono text-[0.6rem] tracking-[0.08em] uppercase px-2.5 py-1 border border-white/[0.07] text-muted transition-colors hover:border-accent/30 hover:text-slate-300"
      style={{ fontFamily: "var(--font-space-mono)" }}
    >
      {children}
    </span>
  );
}
