# MARKET-ANALYSIS.md — Jolanda's Business Brand Website

**Author:** Eliza, Chief of Staff, 4ChiefXROfficers
**Date:** 2026-08-28
**Gate:** 2 — Validate

---

## Executive Summary

A single-page brand website for Jolanda's Business is **viable, low-cost, fast to launch, and has a clear market differentiator** — making it a strong candidate to proceed to Gate 3 (Design).

| Criterion | Verdict |
|---|---|
| **Makes money?** | ✅ Yes — a professional brand site directly supports consulting lead generation |
| **Low cost?** | ✅ Yes — $0 hosting (GitHub Pages), $0 tech stack (raw HTML/CSS/JS) |
| **Fast?** | ✅ Yes — can launch in days, not weeks |
| **Viable?** | ✅ Yes — unique market position (XR+AI+Human Factors combo is underserved) |

---

## 1. Competitive Landscape

### Competitors Analyzed
7 competitor sites and design references were researched:

| Site | Focus | Single-Page? | Dark Mode? | Personal Brand? | XR+AI Combo? | Human Factors? |
|---|---|---|---|---|---|---|
| xr.consulting | XR consulting | ❌ | ❌ | ❌ | ❌ (XR only) | ❌ |
| immerseconsult.com | AI + XR + software | ❌ | ⚠️ | ❌ | ✅ | ❌ |
| wrexa.com | AR/VR/AI dev shop | ❌ | ⚠️ | ❌ | ✅ | ❌ |
| rocket.new (template) | AI consulting template | ✅ | ✅ | ❌ | ✅ | ❌ |
| aura.build (template) | AI portfolio template | ✅ | ✅ | ❌ | ⚠️ (AI only) | ❌ |
| Dribbble concept | AI consulting concept | ✅ | ⚠️ | ❌ | ⚠️ (AI only) | ❌ |
| **Jolanda (opportunity)** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### The Gap
**No competitor site** currently positions itself at the intersection of all three:
- Extended Reality (XR)
- Artificial Intelligence (AI)
- Human Factors / UX / Cognitive Science

This is Jolanda's unique differentiator. Most competitor sites are faceless agency pages, not expert-driven personal brand sites.

---

## 2. Tech Stack Recommendation

**Recommendation: Raw HTML + CSS + JavaScript** (no framework, no static site generator)

| vs. | Verdict |
|---|---|
| 11ty / Hugo / Astro | A build tool adds maintenance overhead with zero benefit for a single page |
| Jekyll | Ruby gem dependency management fights creative design; Liquid templates are restrictive |
| React / Vite | 200KB+ of JS runtime to render text on a consulting page is over-engineering |

**Why raw wins:**
- All modern CSS features available today (`@layer`, `@scope`, `scroll-timeline`, View Transitions, `:has()`, container queries) — no build step
- Zero dependencies — works identically in 2036
- Push to GitHub Pages → live in ~2 minutes
- ~6-8 files total at launch: `index.html`, `style.css`, `script.js`, and assets

**GitHub Pages setup:**
- Repo: `jolanda.github.io` (User/Org site pattern for cleanest URL)
- Deploy: push `index.html` to `main` branch — auto-served, no config needed
- Future custom domain: add CNAME record + GitHub Pages setting

---

## 3. Content Strategy

### Recommended Section Flow (follows buyer psychology)

| # | Section | Purpose |
|---|---|---|
| 1 | **Hero** | Value proposition + primary CTA ("Book a Discovery Call") |
| 2 | **Problem** | Name the pain your clients face (failing XR deployments, unclear AI strategy) |
| 3 | **Services** | 3-4 service buckets (XR strategy, AI readiness, Human Factors, Speaking) |
| 4 | **Case Studies** | 2-3 proof points (grants, projects, engagements) |
| 5 | **About** | Condensed bio + credentials + photo |
| 6 | **Process** | 3-step visual: Discover → Analyze → Deliver |
| 7 | **Testimonials** | Quotes from collaborators or clients |
| 8 | **Contact** | Form + email + calendar link |

### Calls-to-Action
- **Primary:** "Book a Discovery Call" (highest conversion for consultants)
- **Supporting:** "Let's Talk", "Start the Conversation"
- **Avoid:** "Get Started", "Sign Up", "Request Quote"

### Content Placement
| Content | On-page vs Linked |
|---|---|
| Bio / Background | ✅ On-page (condensed, 2-3 paragraphs) |
| Full CV / Publications | 🔗 Linked (Google Scholar, LinkedIn) |
| Case Studies | ✅ On-page (mini highlights) |
| Testimonials | ✅ On-page |
| Client Logos | ✅ On-page (logo strip) |

---

## 4. Feasibility Assessment

| Factor | Assessment |
|---|---|
| **Cost** | **$0** — GitHub Pages free, no software licenses, self-hosted fonts |
| **Time to launch** | **Days** — single page, no build pipeline, no backend |
| **Technical risk** | **Minimal** — static HTML/CSS/JS, no runtime dependencies |
| **Maintenance burden** | **Near-zero** — no framework updates, no package management |
| **Skills required** | HTML, CSS, vanilla JS — all supported by existing tooling |
| **Scalability** | Can add 11ty later if content grows to 5+ pages |

---

## 5. Viability Verdict

| Criterion | Answer | Evidence |
|---|---|---|
| Makes money? | ✅ YES | Direct lead generation for consulting engagements |
| Low cost? | ✅ YES | $0 hosting, $0 tooling, raw HTML/CSS/JS |
| Fast? | ✅ YES | Single page, days to launch, no build step |
| Viable? | ✅ YES | Unique XR+AI+Human Factors niche — underserved by competitors |

**All four criteria pass.** Proceed to Gate 3 — Design.

---

## 6. Next Steps (Gate 3 — Design)

1. **Visual identity** — Create brand assets: logo, color palette, typography, moodboard
2. **Wireframe / layout** — Sketch the 8-section single-page layout
3. **Content writing** — Draft copy for each section (bio, services, case studies)
4. **Technical scaffold** — Create `index.html`, `style.css`, `script.js` with structure
5. **Select hero visual approach** — Abstract 3D/XR-themed illustration, particle effects, or custom graphic

---

*This document is a decision gate. Once reviewed and approved, we proceed to Gate 3 — Design.*