# IMPLEMENTATION-PLAN.md — Jolanda's Business Brand Website

**Author:** Eliza, Chief of Staff, 4ChiefXROfficers
**Date:** 2026-08-28
**Gate:** 4 — Plan

---

## Executive Summary

**Goal:** Build and deploy a single-page XR/AI consulting brand website for Jolanda's Business, hosted on GitHub Pages using raw HTML/CSS/JS.

**Estimated effort:** ~3-4 build sessions (each 30-60 min)
**Parallelizable:** Yes — 2-3 subagent workstreams possible in Phase 2/3
**Risk:** Low — static site, no backend, no dependencies

---

## Phase Breakdown

### Phase 0 — Git Setup & GitHub Pages Configuration

**Duration:** ~15 minutes
**Who:** Eliza (direct)

| Task | Details |
|---|---|
| 0.1 | Create `jolanda.github.io` repo on GitHub |
| 0.2 | Init local git, set remote |
| 0.3 | Push initial structure |
| 0.4 | Enable GitHub Pages (Settings → Pages → Deploy from main, /root) |

**Deliverable:** Empty repo serving at `https://jolanda.github.io` with 404 page.

---

### Phase 1 — HTML Scaffold (index.html)

**Duration:** ~45 minutes
**Who:** Eliza (direct — single-file, no parallelism needed)

Build the semantic HTML5 structure with all 8 sections:

| Section | Content | Notes |
|---|---|---|
| `<nav>` | Sticky nav: Logo + 4 links | Mobile hamburger markup |
| 1. Hero | Tagline, subheadline, 2 CTAs | Full-viewport section |
| 2. Problem | 3 pain-point cards | XR / AI / Human Factors |
| 3. Services | 3-card grid | Each: title, description, CTA |
| 4. Case Studies | 2-3 expandable entries | Placeholder content |
| 5. About | Bio paragraphs + photo + logo bar | Pulled from DESIGN.md |
| 6. Process | 3-step horizontal timeline | Step cards |
| 7. Testimonials | 2-3 quote cards | Placeholder quotes |
| 8. Contact | Email, LinkedIn, form (Formspree) | mailto + Formspree action |
| `<footer>` | Copyright + back-to-top | |

**Deliverable:** `index.html` with all sections, semantic HTML5, ARIA labels.

---

### Phase 2 — CSS Styling (style.css)

**Duration:** ~60 minutes
**Can be parallelized:** ✅ Yes — split by section

#### Workstream 2a — Design Tokens & Base Styles (~20 min)
- Custom properties (`@layer base`)
- Color palette, typography (Google Fonts @import), spacing
- CSS reset + base typography
- `prefers-reduced-motion` support

#### Workstream 2b — Layout & Sections (~30 min)
- Sticky nav styling
- Hero section (full-viewport, centered, CTA buttons)
- Content containers (max-width 1100px, centered)
- Grid layouts (3-col services, 2-col problem cards, timeline)
- Mobile responsiveness (3 breakpoints)
- Section padding/typography per section

#### Workstream 2c — Animations & Effects (~10 min)
- Scroll-driven fade-in via `@starting-style` and Intersection Observer classes
- Service card hover effects
- Scroll progress bar
- Smooth transitions

**Deliverable:** `style.css` with all styles organized by `@layer`.

---

### Phase 3 — JavaScript (script.js)

**Duration:** ~30 minutes
**Who:** Eliza (direct)

| Feature | Technique |
|---|---|
| Sticky nav active section | Intersection Observer |
| Scroll progress bar | Intersection Observer + CSS custom property |
| Mobile hamburger toggle | `classList.toggle()` |
| Smooth scroll (nav links) | `scrollIntoView({ behavior: 'smooth' })` |
| Scroll-triggered section animations | Intersection Observer → add `.visible` class |
| Contact form | Formspree `fetch()` POST |
| Reduced motion detection | `matchMedia('prefers-reduced-motion')` |

**Deliverable:** `script.js` as ES module.

---

### Phase 4 — Assets & Content Finalization

**Duration:** ~30 minutes
**Can be parallelized:** ✅ Yes — split by asset type

#### Workstream 4a — Images
- Convert logo concept to SVG vector
- Create hero background visual (abstract XR-themed WebP)
- Source/prepare Dr. Tromp photo for About section (WebP)
- All images optimized (WebP, compressed)

#### Workstream 4b — Content Polish
- Finalize case study content from professional-profile project
- Finalize testimonial content (real quotes if available)
- Link CV PDF
- Proofread all copy

**Deliverable:** All assets in `assets/`, copy finalized.

---

### Phase 5 — GitHub Pages Deployment

**Duration:** ~15 minutes
**Who:** Eliza (direct)

| Task | Details |
|---|---|
| 5.1 | Create GitHub repo `jolanda.github.io` |
| 5.2 | `git init && git add . && git commit -m "Initial site"` |
| 5.3 | `git remote add origin && git push -u origin main` |
| 5.4 | Verify site live at `https://jolanda.github.io` |
| 5.5 | (Optional) Set up custom domain CNAME |

**Deliverable:** Live website at `https://jolanda.github.io`.

---

### Phase 6 — Testing & Quality (Gate 6)

**Duration:** ~20 minutes
**Who:** Eliza (direct)

| Check | Tool / Method |
|---|---|
| HTML validation | validator.w3.org (or `nu` validator CLI) |
| CSS validation | jigsaw.w3.org/css-validator |
| Lighthouse Performance | DevTools Lighthouse tab |
| Lighthouse Accessibility | DevTools Lighthouse tab |
| Mobile responsive | DevTools device toolbar (375px, 768px, 1024px+) |
| Keyboard navigation | Tab through all interactive elements |
| Reduced motion | System setting → verify animations disabled |
| Form submission | Test Formspree endpoint |
| Link check | All internal/external links work |

**Deliverable:** TEST-RESULTS.md with validation reports.

---

## Dependency Graph

```
Phase 0 (Git Setup)
    │
    ▼
Phase 1 (HTML) ──────────────┐
    │                          │
    ▼                          ▼
Phase 2 (CSS)           Phase 4a (Assets/Images)
    │                          │
    ▼                          │
Phase 3 (JS) ◄────────────────┘
    │
    ▼
Phase 4b (Content Polish)
    │
    ▼
Phase 5 (Deploy)
    │
    ▼
Phase 6 (Test & Launch)
```

**Parallel workstreams:**
- Phase 2a + Phase 4a can run in parallel (CSS design tokens + image creation)
- Phase 2b/2c depend on Phase 1 (need HTML structure for CSS selectors)
- Phase 3 depends on Phase 2 (needs CSS class names for JS)
- Phase 4b can overlap with Phases 2-3 (content is independent of code)

---

## Delegation Strategy

| Phase | Delegation | Why |
|---|---|---|
| Phase 0-1 | **Direct** | Git setup and HTML scaffold are a single coherent task — delegating would cost more context than it saves |
| Phase 2a + 2b | **✅ Delegate in parallel** | CSS design tokens and layout/section styles are independent workstreams — write spec for each |
| Phase 2c | **Direct** | Animation logic is tightly coupled with JS scroll effects |
| Phase 3 | **Direct** | JS is a single coherent module — splitting across agents causes merge conflicts |
| Phase 4a | **✅ Delegate** | Image creation (SVG logo, hero visual) is purely creative — no code merge issues |
| Phase 4b | **Direct** | Content needs cross-section consistency only I can judge |
| Phase 5-6 | **Direct** | Deploy and test are quick, sequential, and need full context |

**Max concurrent subagents: 2** (CSS workstreams + image creation can run in parallel during Phase 2-3).

---

## Timeline Estimate (per session)

| Session | Phases | Est. Duration | What Gets Built |
|---|---|---|---|
| Session A | Phase 0 + Phase 1 + Phase 2a | ~60 min | Repo, HTML scaffold, CSS design tokens |
| Session B | Phase 2b + Phase 2c + Phase 3 | ~60 min | Full styling + JS interactivity |
| Session C | Phase 4a + Phase 4b | ~30 min | Final assets + copy |
| Session D | Phase 5 + Phase 6 | ~30 min | Deploy + test |

**Total:** ~3 hours over 4 sessions.

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Formspree API changes | Low | Medium | Form sends to mailto as fallback |
| GitHub Pages TLS issues | Low | Low | Auto SSL via Let's Encrypt |
| Logo redesign needed | Medium | Low | SVG version hand-crafted in Phase 4a |
| Content gaps (testimonials, case studies) | Medium | Low | Use placeholder text with TODO markers |
| Mobile layout issues | Low | Low | Test at 3 breakpoints before deploy |

---

## Resource Requirements

| Resource | Needed? | Details |
|---|---|---|
| GitHub account | ✅ Yes | `jolandagt` — repo `jolanda.github.io` |
| Formspree account | ✅ Yes | Free tier — create form endpoint for contact |
| Google Fonts | ✅ Yes | Space Grotesk + Inter (free, self-host option) |
| CV PDF | 🟡 Needed | From professional-profile project |
| Photo | 🟡 Needed | Professional headshot for About section |
| Testimonials | 🟡 Desired | Real quotes if available |

---

## Sign-off

**Plan prepared by:** Eliza, Chief of Staff, 4ChiefXROfficers

**Reviewed by:** *(awaiting Dr. Tromp's approval)*

---

*This document is a decision gate. Once reviewed and approved, we proceed to Gate 5 — Build.*