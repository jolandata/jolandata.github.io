# DESIGN.md — Jolanda's Business Brand Website

**Author:** Eliza, Chief of Staff, 4ChiefXROfficers
**Date:** 2026-08-28
**Gate:** 3 — Design

---

## 1. Visual Identity

### Color Palette

| Token | Hex | Role |
|---|---|---|
| `--bg-primary` | `#0a0a0f` | Dark background (deep charcoal-navy) |
| `--bg-secondary` | `#12121a` | Section backgrounds, cards |
| `--bg-tertiary` | `#1a1a2e` | Hover states, elevated elements |
| `--accent-xr` | `#00d4ff` | Cyan — XR/Spatial elements, highlights |
| `--accent-ai` | `#ff4d94` | Magenta — AI/neural elements, CTAs |
| `--accent-warm` | `#ffb347` | Amber — Human Factors, warmth, trust signals |
| `--text-primary` | `#f0f0f5` | Headings, body copy |
| `--text-secondary` | `#a0a0b8` | Subtext, metadata |
| `--text-muted` | `#5a5a70` | Placeholder, captions |
| `--border` | `#2a2a3e` | Dividers, card borders |

**Rationale:** Dark backgrounds are the dominant pattern in XR/AI tech-forward consulting (60% of competitors). The three-accent model maps to the three pillars of the brand: cyan for XR/Spatial, magenta for AI/Intelligence, amber for Human Factors/Warmth — creating a unique color story no competitor uses.

### Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Logo / Brand mark | `'Space Grotesk', sans-serif` | 700 (Bold) | 1.5rem |
| Headings (h1-h3) | `'Space Grotesk', sans-serif` | 600 (Semibold) | 2.5rem → 1.25rem |
| Body text | `'Inter', sans-serif` | 400 (Regular) | 1rem / 1rem |
| Small / Captions | `'Inter', sans-serif` | 400 (Regular) | 0.875rem |
| Code / Technical | `'JetBrains Mono', monospace` | 400 | 0.9rem |

**Rationale:** Space Grotesk is a modern geometric sans-serif with tech-forward character — perfect for a brand in spatial computing. Inter provides exceptional readability for body text at all sizes. Both self-hostable via Google Fonts (zero cost, no license fees).

### Logo

![Brand Logo](../../imgs/logo-concept.png) *(to be refined)*

Generated brand concept saved at `C:\Users\jolan\Desktop\Projects\jolanda\imgs\logo-concept.png` (created via AI-generated imagery — dark background, brand mark combining XR/AI/HF elements, "JOLANDA'S BUSINESS" in bold sans-serif). Final SVG version to be hand-crafted during Gate 5 — Build.

---

## 2. Layout & Structure

### Page Architecture

Single-page vertical scroll, no internal navigation to separate pages. Sticky top navigation with smooth-scroll section links.

```
┌────────────────────────────────────────────────┐
│  STICKY NAV [Logo] [Services] [About] [Contact] │  👆 fixed at top
├────────────────────────────────────────────────┤
│  SECTION 1: HERO                               │
│  ┌──────────────────────────────────────────┐  │
│  │  "XR & AI for Human-Centered Innovation"  │  │
│  │  Subheadline + [Book a Discovery Call]    │  │
│  │  ↓ Scroll indicator                       │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  SECTION 2: THE PROBLEM                        │
│  ┌──────────────────────────────────────────┐  │
│  │  "Organizations struggle to bridge the   │  │
│  │   gap between XR possibilities and       │  │
│  │   real-world impact."                    │  │
│  │  3 pain-point cards (XR, AI, HF)         │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  SECTION 3: SERVICES                           │
│  ┌──────────────────────────────────────────┐  │
│  │  [XR Strategy] [AI Readiness] [HF Eval]  │  │
│  │  3-card grid with descriptions + CTAs    │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  SECTION 4: CASE STUDIES                       │
│  ┌──────────────────────────────────────────┐  │
│  │  2-3 mini case studies (expandable)      │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  SECTION 5: ABOUT                              │
│  ┌──────────────────────────────────────────┐  │
│  │  Photo + condensed bio + credentials     │  │
│  │  Logo bar (EuroXR, SUNY, DTU, etc.)      │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  SECTION 6: PROCESS                           │
│  ┌──────────────────────────────────────────┐  │
│  │  3-step visual: Discover → Analyze →     │  │
│  │  Deliver (horizontal timeline)           │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  SECTION 7: TESTIMONIALS                       │
│  ┌──────────────────────────────────────────┐  │
│  │  2-3 quote cards with names/titles       │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  SECTION 8: CONTACT                            │
│  ┌──────────────────────────────────────────┐  │
│  │  "Let's Talk" heading                     │  │
│  │  Email: jolanda.tromp@duytan.edu.vn       │  │
│  │  LinkedIn icon link                       │  │
│  │  Contact form (or mailto link)            │  │
│  └──────────────────────────────────────────┘  │
├────────────────────────────────────────────────┤
│  FOOTER [© 2026 Jolanda's Business]            │
└────────────────────────────────────────────────┘
```

### Section Dimensions

| Section | Min Height | Max Width | Notes |
|---|---|---|---|
| Hero | 100vh | 1200px | Full viewport, center-aligned |
| Content sections | auto | 1100px | Centered container |
| Cards | auto | 320px per card | 3-column grid, 2-col on tablet, 1-col on mobile |

### Navigation

- **Sticky top bar** — logo left, nav links right (Smooth scroll to sections)
- **Desktop:** 4 links: Services, About, Case Studies, Contact
- **Mobile:** Hamburger menu overlay
- **Scroll indicator** — thin progress bar at top showing scroll depth

---

## 3. Copy — Section Content

### Hero Tagline
```
XR & AI for Human-Centered Innovation
```
**Subheadline:** Bridging emerging technology with human needs — strategic consulting in XR, AI, and human factors.

**Primary CTA:** [Book a Discovery Call]
**Secondary CTA:** [Explore Services ↓]

### Problem Statement
```
The XR-AI opportunity is real. The path is not.
```

Organizations today face three converging challenges:
1. **XR complexity** — Which platform? What's proven vs hype? How to deploy at scale?
2. **AI uncertainty** — Where does AI actually add value? How to build trust-worthy, human-centered systems?
3. **Human factors blind spots** — Will users adopt it? Is it safe, usable, and inclusive?

I help you answer these questions with clarity and confidence.

### Services (3-Pillar Model)

| Pillar | What | Outcomes |
|---|---|---|
| **XR Strategy & Design** | Feasibility assessment, platform selection, prototype evaluation, deployment planning for VR/AR/MR | De-risked XR investment, clear roadmap, validated use cases |
| **AI Readiness & Governance** | Human-centered AI assessment, responsible AI frameworks, human-AI teaming evaluation | Trustworthy AI systems, regulatory readiness, user trust |
| **Human Factors Evaluation** | UX/usability assessment, presence & immersion measurement, accessibility audit, safety evaluation | Evidence-based improvements, reduced user error, inclusive design |

### About (Condensed Bio)

Dr. Jolanda G. Tromp is a Professor of Extended Reality, Human-Computer Interaction, and Intelligent Systems at Duy Tan University (Vietnam), with 25+ years of experience spanning research, industry, and consultancy across Europe, the US, and Asia.

She has worked with organizations from Motorola and the University of Nottingham to the European Commission and SUNY, leading projects in XR strategy, AI readiness, human factors evaluation, and immersive collaboration.

Her work bridges the gap between what technology makes possible and what people actually need — grounded in rigorous research and delivered with practical focus.

### Process

| Step | What Happens |
|---|---|
| **1. Discover** | We map your context, goals, constraints, and user needs |
| **2. Analyze** | Evidence-based assessment of feasibility, risks, and opportunities |
| **3. Deliver** | Clear recommendations, actionable roadmap, or validated prototype |

### Testimonials *(placeholder — populate with real quotes)*

> "Dr. Tromp's ability to bridge XR technology with human factors is exceptional. Her work on our project was instrumental in de-risking our XR strategy."
> — *Name, Organization*

### Contact

**Let's talk about your next project.**

Email: jolanda.tromp@duytan.edu.vn
LinkedIn: [linkedin.com/in/jolanda-tromp-phd-638b84a](https://linkedin.com/in/jolanda-tromp-phd-638b84a)

---

## 4. Technical Architecture

### Stack
- **HTML:** Semantic HTML5 (`<header>`, `<section>`, `<nav>`, `<article>`, `<footer>`)
- **CSS:** Modern CSS (`@layer`, custom properties, `@container` queries, `scroll-driven animations`)
- **JS:** Vanilla ES modules (Intersection Observer for scroll animations, smooth scroll, form handling)
- **Fonts:** Google Fonts (Space Grotesk, Inter) — self-hosted fallback
- **Icons:** Simple SVG inline icons (no icon library dependency)
- **Forms:** Formspree or mailto (no backend)

### File Structure
```
jolanda/
├── index.html          # Single-page site
├── style.css           # All styles, organized by @layer
├── script.js           # Vanilla JS (scroll effects, nav, contact)
├── assets/
│   ├── fonts/          # Self-hosted Space Grotesk + Inter
│   ├── images/
│   │   ├── logo.svg    # Vector brand logo
│   │   ├── hero.webp   # Hero visual (abstract XR-themed)
│   │   ├── about.webp  # Dr. Tromp photo
│   │   └── ...         # Section graphics
│   └── resume.pdf      # Downloadable CV
├── .gitignore
└── README.md
```

### Deployment
- **Repo:** `jolanda.github.io` (GitHub Pages user site)
- **Deploy:** `git push main` → auto-live in ~2 minutes
- **Domain:** Temporary `jolanda.github.io`; custom domain later

---

## 5. Interactive Elements

| Element | Technique | Purpose |
|---|---|---|
| Scroll-driven animations | `scroll-timeline` CSS | Hero parallax, section entry fades |
| Service card hovers | CSS `:hover` + transforms | Interactive feedback |
| Sticky nav highlight | Intersection Observer | Active section indicator |
| Mobile hamburger | CSS `:target` or JS toggle | Responsive navigation |
| Contact form | Formspree (free) + `fetch` | Zero-backend inquiry |
| Scroll progress bar | Intersection Observer + CSS custom property | User orientation |
| Smooth scroll | CSS `scroll-behavior: smooth` | Section-to-section navigation |

### Performance Targets
| Metric | Target |
|---|---|
| Page weight | < 100KB (without images) |
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| First Contentful Paint | < 0.8s |
| Largest Contentful Paint | < 1.2s |

---

## 6. Mobile Responsiveness

| Breakpoint | Layout Changes |
|---|---|
| > 1024px | Full desktop: 3-col service grid, sticky top nav |
| 768px – 1024px | Tablet: 2-col service grid, reduced hero height |
| < 768px | Mobile: 1-col stack, hamburger nav, full-width sections |
| < 400px | Small phone: tighter padding, smaller headings |

All touch targets ≥ 48px (WCAG 2.2). Reduced motion support via `@media (prefers-reduced-motion)`.

---

## 7. Accessibility

- Semantic HTML5 landmarks
- ARIA labels on interactive elements
- Color contrast ratios ≥ 4.5:1 (text) and ≥ 3:1 (large text)
- Keyboard-navigable (all interactive elements focusable)
- Focus indicators visible (not removed)
- `prefers-reduced-motion` respected
- Alt text on all images
- Form labels associated with inputs

---

## 8. Design Decisions Log

| Decision | Option Chosen | Alternative(s) | Rationale |
|---|---|---|---|
| Color model | Dark bg + 3 accent colors | Light mode, single accent | Dark is dominant in XR/AI; 3 accents map to 3 brand pillars |
| Typography | Space Grotesk + Inter | DM Sans + Inter, or monospace-heavy | Grotesk signals tech-forward; Inter is proven readable |
| Hero | Full-viewport with CTA | Carousel, video bg | Carousel has poor engagement; video adds weight |
| Logo format | Vector SVG | PNG, icon-only | SVG scales infinitely, supports dark/light variants |
| Contact form | Formspree (free tier) | Custom PHP, no form | Formspree requires zero backend, 1000 submissions/mo free |
| Animations | CSS-only (prefer `scroll-timeline`) | JS-driven (GSAP, AOS) | CSS-only = no JS dependency, better perf, respects reduced-motion |

---

*This document is a decision gate. Once reviewed and approved, we proceed to Gate 4 — Plan.*

---

👁️ **Visual previews available:**
- Logo concept: `MEDIA:C:\Users\jolan\AppData\Local\hermes\cache\images\openrouter_gen_20260828_073313_d69393a1.png`
- Project lifecycle flowchart: `MEDIA:C:\Users\jolan\Desktop\Projects\admin\project-lifecycle-flowchart.html`