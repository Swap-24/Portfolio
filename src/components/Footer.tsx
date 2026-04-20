"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data";

export default function Footer() {
  const { github, linkedin, email } = portfolioData;

  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-6 md:px-12 py-8 bg-bg/80 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div
          className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-muted"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          © {new Date().getFullYear()} Swapnil Lahiri
        </div>

        <div className="flex items-center gap-4">
          {[
            { href: github,            Icon: Github,   label: "GitHub"   },
            { href: linkedin,          Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${email}`, Icon: Mail,     label: "Email"    },
          ].map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ y: -2, color: "#00e5ff" }}
              className="text-muted transition-colors"
              aria-label={label}
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </div>

        <div
          className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-muted"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Built with Next.js · Three.js · Framer Motion
        </div>
      </div>
    </footer>
  );
}
