# Membership & Course Delivery — Project Definition (Gate 1)

**Project:** jolanda (jolandata.github.io)
**Feature:** Membership sign-up page → free course delivery, self-hosted as static pages (Route B)
**Date:** 2026-10-14
**Status:** Gate 1 — Defined · Approved by Dr. Tromp (route B chosen: no LMS, no paid hosting, static pages)

## 1. What it is
A new **membership sign-up page** on jolandata.github.io that collects free sign-ups (name + email)
and hands members to a course delivered as **static web pages** on the same free GitHub Pages site.

No server, no LMS licence, no per-seat cost. Course content lives as plain HTML pages.

## 2. Problem
Dr. Tromp has a course in **IMS Common Cartridge (`.imscc`)** format — the format used by LMSes like
Blackboard/Moodle. The site is static (GitHub Pages), which cannot import `.imscc` or run login/auth/payment.

Decision context: hosting an LMS (Moodle) cost money (everything usable is paid; MoodleCloud is 28-day
trial only). Requirement from Dr. Tromp: **pay nothing**. Therefore the course is **remade as static
web pages** and the "membership" is a **name + email sign-up** (no payment, no real account auth).

## 3. Audience
Visitors to jolandata.github.io — practitioners, students, and professionals interested in Dr. Tromp's
courses on XR, AI, and human-centered innovation, who sign up to follow a course.

## 4. Scope
**In scope:**
- `membership.html` — sign-up landing page (MailerLite name+email form) with a clear "Access your course" path.
- `courses/` — course portal + lesson pages (static HTML, remade from the `.imscc` content).
- Nav link "Membership" added to the site's shared navigation.
- Lightweight client-side access gate on the course portal (free membership; *not* a security boundary — see limits).

**Out of scope (this build stage):**
- Real member accounts / login / payment (not needed: free membership by decision).
- Importing the `.imscc` directly (GitHub Pages can't; content is remade as HTML).
- Full course content — requires Dr. Tromp's source material (see GATE-1 blockers).

## 5. Success criteria
1. `membership.html` live at `jolandata.github.io/membership.html`, styled to match the site.
2. Sign-up form collects name + email into Dr. Tromp's MailerLite account (no config/credit needed).
3. Course portal `courses/index.html` reachable from the sign-up page, with an access gate + lesson list.
4. Nav updated site-wide; committed and pushed to `main` (auto-deploys).

## 6. Open items / blockers for full course
- **Course content:** RESOLVED 2026-10-14 — the full `.imscc` was supplied and converted to 47 static course pages (see README work log). Minor cleanup possible: review a few internal links, and optionally add an interactive quiz experience later (currently static self-check pages).
- **MailerLite form ID:** currently reusing the existing newsletter form embed; if a dedicated membership
  list/group is wanted, create it in MailerLite and swap one ID.

## 7. Next gate
Gate 2 — Validate (free-tier viability; already reasoned above → proceed to design/build).
