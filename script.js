/* ═══════════════════════════════════════
   Jolanda's Business — Script
   Scroll effects, nav, contact form
   ═══════════════════════════════════════ */

'use strict';

// ── MOBILE NAV TOGGLE ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav__links--open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav__links--open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── SCROLL PROGRESS BAR ──
const scrollProgress = document.getElementById('scrollProgress');

if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }, { passive: true });
}

// ── SECTION REVEAL ON SCROLL ──
const revealGroups = document.querySelectorAll('.reveal-group');

if (revealGroups.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Don't unobserve — allow re-animation if needed
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealGroups.forEach(group => observer.observe(group));
} else {
  // Fallback: show all immediately if no IntersectionObserver
  revealGroups.forEach(group => group.classList.add('visible'));
}

// ── CONTACT FORM (self-owned) ──
// No third-party service: submitting composes a prefilled email in the visitor's
// client. Runs entirely client-side; nothing is sent to a server or stored.
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get('name') || 'a visitor';
    const email = data.get('email') || '';
    const message = data.get('message') || '';
    const subject = 'Jolanda website enquiry from ' + name;
    const body = (message + '\n\n— ' + name + (email ? ' <' + email + '>' : ''))
      .replace(/\r?\n/g, '%0A')
      .replace(/#/g, '%23');

    window.location.href =
      'mailto:jolanda.tromp@duytan.edu.vn?subject=' + encodeURIComponent(subject) + '&body=' + body;

    const ok = document.getElementById('formSuccess');
    if (ok) {
      ok.hidden = false;
      ok.textContent = 'Your email client should open with the message ready to send.';
    }
  });
}

// ── NAV BAR HIDE/SHOW ON SCROLL ──
let lastScroll = 0;
const nav = document.getElementById('nav');

if (nav) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Add shadow on scroll
    if (currentScroll > 50) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
      nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ── SMOOTH SCROLL FOR ANCHOR LINKS (progressive enhancement) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});