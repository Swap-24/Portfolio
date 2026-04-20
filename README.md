# Swapnil Lahiri — Portfolio

Personal portfolio website built with Next.js 14, React Three Fiber, Framer Motion, and Tailwind CSS.

## Tech Stack

| Layer        | Technology                                      |
|--------------|-------------------------------------------------|
| Framework    | Next.js 14 (App Router)                         |
| Language     | TypeScript                                      |
| Styling      | Tailwind CSS                                    |
| 3D / WebGL   | Three.js via @react-three/fiber + @react-three/drei |
| Animations   | Framer Motion                                   |
| Icons        | Lucide React                                    |

## Features

- **Neural network background** — Three.js particle graph that reacts to mouse movement
- **Custom cursor** — Framer Motion dot + spring-trailing ring
- **Scroll progress bar** — Framer Motion `useScroll` hooked to a gradient bar
- **Active nav indicator** — IntersectionObserver tracks visible section
- **Typewriter effect** — Cycles through role titles in the hero
- **Animated stat counters** — Count up on scroll into view
- **Project filter tabs** — Filter by AI/ML, Web, Vision, Game
- **Animated layout grid** — Framer Motion `AnimatePresence` on filter change
- **Contact form** — Opens system mail client with pre-filled content
- **Clip-path card corners** — Sci-fi chamfered corners on all cards
- **Noise texture overlay** — CSS SVG filter grain on full page
- **Fully responsive** — Mobile nav, fluid type sizes, responsive grid

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, fonts
│   ├── page.tsx          # Page assembly (all sections)
│   └── globals.css       # Tailwind base + custom utilities
├── components/
│   ├── ui/index.tsx      # Reveal, SectionTag, SectionTitle, TagPill
│   ├── NeuralBackground.tsx  # R3F particle graph
│   ├── CustomCursor.tsx      # Framer Motion cursor
│   ├── ScrollProgress.tsx    # Scroll bar
│   ├── Navbar.tsx            # Fixed nav + mobile menu
│   ├── Hero.tsx              # Hero with typewriter + counters
│   ├── Projects.tsx          # Cards + filter tabs
│   ├── Skills.tsx            # Skill groups grid
│   ├── Education.tsx         # Education cards
│   ├── Certifications.tsx    # Cert list
│   ├── Contact.tsx           # Contact + quick message form
│   └── Footer.tsx            # Footer
├── data/index.ts         # All portfolio content (single source of truth)
├── hooks/
│   └── useScrollProgress.ts  # useScrollProgress, useActiveSection
└── lib/
    └── utils.ts          # cn() helper
```

## Updating Content

All content lives in **`src/data/index.ts`**. Edit that file to update:
- Personal info, links, email
- Stats
- Projects (add/remove/edit)
- Skill groups
- Education
- Certifications

## Deployment

### Vercel (recommended)
```bash
npx vercel
```

### Railway / Other Node hosts
```bash
npm run build
npm run start
```
