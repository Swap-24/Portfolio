"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, Copy, Check } from "lucide-react";
import { Reveal, SectionTag, SectionTitle } from "@/components/ui";
import { portfolioData } from "@/data";

export default function Contact() {
  const { email, phone, github, linkedin } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10 py-32 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="mb-14 text-center">
          <SectionTag>Let&apos;s Connect</SectionTag>
          <SectionTitle>Get In Touch</SectionTitle>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <Reveal>
            <p className="text-[1.05rem] font-light text-slate-400 leading-[1.85] mb-10">
              Open to internship opportunities, research collaborations, and interesting
              problems to solve. If you&apos;re building something in AI/ML or want to chat about
              a project, my inbox is always open.
            </p>

            {/* Big email with copy button */}
            <div className="group flex items-center gap-4 mb-10">
              <a
                href={`mailto:${email}`}
                className="font-extrabold text-[clamp(1rem,2.5vw,1.6rem)] tracking-tight text-slate-100 hover:text-accent transition-colors leading-none"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {email}
              </a>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleCopy}
                className="flex-shrink-0 p-2 border border-white/[0.08] text-muted hover:text-accent hover:border-accent/30 transition-colors"
                title="Copy email"
              >
                {copied ? <Check size={14} className="text-accent3" /> : <Copy size={14} />}
              </motion.button>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap gap-3">
              {[
                { href: github,            Icon: Github,   label: "Swap-24"     },
                { href: linkedin,          Icon: Linkedin, label: "LinkedIn"    },
                { href: `mailto:${email}`, Icon: Mail,     label: "Email"       },
                { href: `tel:${phone}`,    Icon: Phone,    label: phone         },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.1em] uppercase text-muted border border-white/[0.07] px-4 py-2.5 hover:text-accent hover:border-accent/30 transition-all duration-200"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  <Icon size={12} />
                  {label}
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Right: quick message form */}
          <Reveal delay={0.15}>
            <QuickMessageForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QuickMessageForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Build mailto link as a graceful no-backend solution
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:swapnil240805@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass =
    "w-full bg-surface border border-white/[0.07] text-slate-200 text-[0.9rem] px-4 py-3 focus:outline-none focus:border-accent/40 placeholder-muted/60 transition-colors";

  return (
    <div className="bg-surface border border-white/[0.07] p-8 clip-corner-md">
      <h3
        className="font-bold text-[1.1rem] text-slate-100 mb-6"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Quick Message
      </h3>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={inputClass}
        />
        <textarea
          rows={4}
          placeholder="Your message..."
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className={`${inputClass} resize-none`}
        />

        <motion.button
          whileHover={{ y: -1, boxShadow: "0 0 24px rgba(0,229,255,0.25)" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          className="flex items-center justify-center gap-2 font-mono text-[0.72rem] tracking-[0.1em] uppercase bg-accent text-bg py-3.5 transition-all clip-corner-sm"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          {sent ? (
            <><Check size={13} /> Opened Mail Client</>
          ) : (
            <><Send size={13} /> Send Message</>
          )}
        </motion.button>
      </div>
    </div>
  );
}
