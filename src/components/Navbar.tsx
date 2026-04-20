"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useScrollProgress";

const NAV_ITEMS = [
  { label: "Projects",       href: "#projects"      },
  { label: "Skills",         href: "#skills"        },
  { label: "Education",      href: "#education"     },
  { label: "Certs",          href: "#certifications"},
  { label: "Contact",        href: "#contact"       },
];

const SECTION_IDS = ["hero", "projects", "skills", "education", "certifications", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 md:px-12 py-4 transition-all duration-300 ${
          scrolled ? "bg-bg/70 backdrop-blur-2xl border-b border-accent/10" : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-extrabold text-xl tracking-[-0.03em] text-accent"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          SL<span className="text-slate-100">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className="relative font-mono text-[0.68rem] tracking-[0.12em] uppercase transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    color: isActive ? "#00e5ff" : "#64748b",
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:swapnil240805@gmail.com"
            className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-accent border border-accent px-4 py-2 transition-all duration-200 hover:bg-accent hover:text-bg"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile menu btn */}
        <button
          className="md:hidden text-slate-400 hover:text-accent transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[60px] left-0 right-0 z-[999] bg-bg2/95 backdrop-blur-2xl border-b border-accent/10 py-6 px-8 flex flex-col gap-5"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[0.8rem] tracking-[0.12em] uppercase text-slate-400 hover:text-accent transition-colors"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:swapnil240805@gmail.com"
              className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-accent border border-accent px-4 py-2.5 text-center hover:bg-accent hover:text-bg transition-all"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
