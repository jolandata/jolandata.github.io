# Tech Stack Recommendation — Jolanda's Business Brand Website

**Author:** Hermes Agent (Tech Research subagent)
**Date:** 2026-08-28
**Gate:** 2 — Validate
**Status:** Recommended

---

## Executive Summary

**Recommendation: Plain HTML / CSS / JavaScript (no framework, no SSG)**

For a creative, tech-forward single-page consulting landing page hosted on GitHub Pages, raw vanilla HTML/CSS/JS is the optimal choice. It gives maximum creative control, zero ongoing maintenance, zero cost, and the best possible performance — all with the simplest possible workflow.

---

## Options Comparison

| Criteria | Raw HTML/CSS/JS | 11ty (Eleventy) | Hugo | Astro | Jekyll | React/Vite |
|----------|:---:|:---:|:---:|:---:|:---:|:---:|
| **Creative freedom** | ★★★★★ | ★★★★☆ | ★★★☆☆ | ★★★★☆ | ★★☆☆☆ | ★★★★☆ |
| **Modern CSS (animations, layers, scroll-driven, view transitions)** | ★★★★★ Full native browser support | ★★★★★ (same; SSG doesn't restrict CSS) | ★★★★★ (same) | ★★★★★ (same) | ★★★★★ (same) | ★★★☆☆ (can do it but JS overhead) |
| **Interactivity (JS)** | ★★★★★ Direct, no abstraction | ★★★★★ (same) | ★★★★★ (same) | ★★★★☆ (islands pattern) | ★★★★★ (same) | ★★★★☆ (but bloated) |
| **Maintenance overhead** | **★☆☆☆☆** None | ★★★☆☆ npm updates | ★★★☆☆ binary updates | ★★★☆☆ npm updates | ★★☆☆☆ Ruby + gem updates | ★★★★☆ npm + Vite + React updates |
| **Build step required** | **No** | Yes | Yes | Yes | Yes | Yes |
| **GitHub Pages deploy** | **Push → live** | Push → build → push `_site` or GitHub Actions | Push → build → push or Actions | Push → build → push `dist` or Actions | **Push → auto-built** (native) | Push → build → push or Actions |
| **Zero cost** | ✅ | ✅ (GitHub Actions minutes free) | ✅ | ✅ | ✅ | ✅ |
| **Performance (Lighthouse)** | ★★★★★ Sub-100KB, instant | ★★★★★ Static output | ★★★★★ Static output | ★★★★★ Static output | ★★★★☆ (some JS/Liquid overhead) | ★★☆☆☆ 200KB+ JS baseline |
| **Setup complexity** | **★☆☆☆☆** Trivial | ★★★☆☆ | ★★★★☆ | ★★★☆☆ | ★★☆☆☆ | ★★★★☆ |
| **Future-proofing (10yr)** | ★★★★★ No deps to rot | ★★★☆☆ Node ecosystem churn | ★★★★☆ Go binary ages well | ★★★☆☆ Node ecosystem churn | ★★☆☆☆ Ruby gem rot | ★★☆☆☆ React version treadmill |

---

## Detailed Analysis

### Raw HTML/CSS/JS ✅ RECOMMENDED

**Why it wins for this project:**

- **Maximum creative control.** A tech-forward XR/AI consulting site needs modern CSS features: `@layer` for cascade management, `@scope` for scoped styles, `scroll-driven animations` for parallax effects, `View Transitions API` for smooth page reveals, `:has()` for contextual styling, `container queries` for true component responsiveness, and `custom properties` for a design token system. All of these work today in modern browsers — no framework needed.
- **Zero build step, zero dependencies.** Create an `index.html`, a `style.css`, and a `script.js`. Push to a GitHub Pages repo. Done. No npm install, no `package.json`, no CI pipeline, no node_modules rot. The site will deploy identically in 2026 and 2036.
- **Insane performance.** A well-crafted single-page consulting site can load in under 50KB of transfer size (HTML+CSS+JS+fonts). No React/Vue/Svelte runtime, no hydration, no JS framework overhead. Lighthouse scores will be 100 across the board.
- **GitHub Pages is *made* for this.** Push to `main` (or `gh-pages`), it serves `index.html` directly. No config, no Actions, no build step.
- **No lock-in.** Want to add 11ty later? Drop your HTML into 11ty templates. Want to add Astro? Copy and paste. Starting raw is never a dead end.

### 11ty (Eleventy) — Honorable mention

11ty is excellent — JavaScript-based templates (Nunjucks/Liquid), zero-config to start, excellent perf. But for a **single page**, the templating engine has almost no work to do. You'd write `index.liquid` which calls `{% include "header.liquid" %}` — on a single page that's just extra files with no real benefit. The maintenance overhead of `npm update` and `package.json` is real, even if small. If the site grows to 5+ pages, 11ty becomes worthwhile — but for one page, skip it.

### Hugo

Fastest SSG bar none, but Go templates (`{{ .Title }}`) are verbose and inflexible for creative design work. The theme system is opinionated — fighting it to produce truly custom creative layouts is painful. Overkill for one page.

### Astro

Beautiful dev experience and the islands architecture is genuinely innovative. But: (a) for a single page with no interactive islands, Astro's value is zero, (b) the `.astro` component syntax adds a mental model tax, (c) you now depend on the Astro ecosystem evolving under you. Great for a multi-page site with interactive components; wrong tool for a one-page consulting site.

### Jekyll

GitHub Pages auto-builds Jekyll natively — that's the *only* advantage. In every other dimension it's the worst option here: Ruby gem dependency management (often broken), Liquid template syntax is restrictive, the default theme (Minima) fights any creative deviation, and the `_config.yml` + `_layouts/` + `_includes/` folder structure is designed for blogs, not single-page creative landing pages.

### React / Vite + GitHub Pages

The most over-engineered option. You're delivering 200KB+ of JavaScript (React runtime + Vite polyfills + client-side router) to render text and images. On a consulting landing page. This is a textbook case of choosing the wrong tool for the job. SEO is worse (JS-dependent rendering), performance is worse (bundle size, hydration), and maintenance is worse (React version upgrades, breaking changes, `npm audit`). Don't do this.

---

## Recommended Repo Structure

```
jolanda/
├── index.html          # Single-page site (all content)
├── style.css            # All styles (or split by section if large)
├── script.js            # Interactivity (scroll effects, contact form, etc.)
├── assets/
│   ├── fonts/           # Self-hosted fonts (or @import from Google Fonts)
│   ├── images/          # Hero images, icons, section graphics
│   │   ├── hero.webp    # WebP for performance (fallback via <picture>)
│   │   ├── logo.svg     # Vector logo (created from scratch)
│   │   └── ...
│   └── resume.pdf       # Downloadable CV
├── .gitignore
└── README.md
```

**Total: 8 files at launch. No `package.json`, no `node_modules`, no config.**

### File conventions

| File | Content |
|------|---------|
| `index.html` | Semantic HTML5 single page. All sections as `<section id="...">`. Inline critical CSS (above-the-fold) in `<style>` for instant first paint, load `style.css` deferred. |
| `style.css` | Modern CSS: `@layer` cascade, custom properties for design tokens, `@container` queries, `@media (prefers-reduced-motion)` for accessibility. Organized by layer: `base → layout → components → utilities`. |
| `script.js` | Vanilla JS modules (type="module" in HTML for native ES module support). Intersection Observer for scroll-triggered animations, smooth scroll, form handling with `fetch` + Formspree or EmailJS. No library needed. |

---

## GitHub Pages Setup & Deployment

### 1. Create the repository

Two patterns:

**A. User/Org site** (`jolanda.github.io`)
```
Create repo named: jolanda.github.io
GitHub Pages auto-enables on main branch, root directory.
Site at: https://jolanda.github.io
```

**B. Project site** (`<any-repo-name>`)
```
Create any repo name (e.g. jolanda)
Settings → Pages → Source: Deploy from branch: main, /root
Site at: https://jolanda.github.io/jolanda
```
Recommended: **Pattern A** (cleanest URL for a consulting brand).

### 2. Push and deploy

```bash
git init
git add .
git commit -m "Initial commit — single-page consulting site"
git remote add origin git@github.com:jolandagt/jolanda.git
git push -u origin main
```

GitHub Pages serves `index.html` from the root automatically. No Actions, no build step, no config file. The site is live in ~1-2 minutes.

### 3. Custom domain (optional)

1. Buy domain (e.g. `jolanda.com`) via Namecheap/Cloudflare/GoDaddy
2. Add CNAME record pointing to `jolanda.github.io`
3. In GitHub repo → Settings → Pages → Custom domain: `jolanda.com`
4. GitHub auto-provisions SSL via Let's Encrypt

### 4. Recommended `.gitignore`

```
# No dependencies to ignore — just OS artifacts
.DS_Store
Thumbs.db
*.swp
*~
```

That's it. 3 lines.

---

## Modern CSS Features Available (No Build Step Required)

These are native browser features in 2026 that make a "tech-forward" creative site possible without any framework:

| Feature | Use on this site |
|---------|-----------------|
| **`@layer`** | Organize CSS cascade: `base → design-system → components → overrides` |
| **`@scope`** | Scoped styles within a section without BEM naming |
| **Custom Properties (`--var`)** | Design token system for colors, spacing, typography |
| **`@container` queries** | Section-responsive layouts (not viewport-based) |
| **`scroll-timeline`** | Scroll-driven animations — hero parallax, progress bars |
| **`View Transitions API`** | Smooth crossfade/nav transitions (JS-controlled) |
| **`:has()` selector** | Contextual styling: "card with image → different layout" |
| **`@starting-style`** | Entry animations for elements entering the viewport |
| **`subgrid`** | Align content across nested grid layouts |
| **`color-mix()`** | Dynamic color generation from design tokens |
| **`<dialog>` element** | Contact form modal — semantic and accessible |
| **ES Modules (`<script type="module">`)** | Import/export vanilla JS without bundlers |

---

## When to Revisit This Decision

The raw HTML/CSS/JS choice stays optimal unless the site evolves to:

- **5+ pages** → Consider 11ty for template reuse (header, footer, nav)
- **Blog/content section** → Consider 11ty or Jekyll for Markdown-based content management
- **Interactive dashboard / data viz** → Consider Astro with a React/Svelte island for the interactive part only
- **Client wants a CMS** → Consider 11ty + Decap CMS (headless Git-based CMS)

But for a single-page consulting landing page (the scope defined in PROJECT.md): raw HTML/CSS/JS is the right call.

---

## Summary

| ✅ **Recommended** | Raw HTML + CSS + JS |
|---|---|
| **Why** | Maximum creative control, zero maintenance, zero cost, best performance, simplest deploy |
| **Files at launch** | `index.html`, `style.css`, `script.js` + assets — ~6-8 files total |
| **Deploy** | Push to GitHub Pages main branch. Live in 2 minutes. |
| **Dependencies** | Zero. None. No package.json, no build, no CI. |
| **Design potential** | All modern CSS features available — animations, scroll-driven effects, view transitions, responsive grids |
| **Future-proof** | Will work identically in 10+ years. No framework rot. |