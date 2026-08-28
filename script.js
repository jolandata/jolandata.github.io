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

// ── CONTACT FORM (Formspree) ──
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.contact__submit');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactForm.innerHTML = '<p class="contact__success">Thank you! Your message has been sent. I\'ll get back to you within 48 hours.</p>';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      document.getElementById('formFallback').style.display = 'block';
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
