// ForgeMend — Main JavaScript
// version: 1.0

document.addEventListener('DOMContentLoaded', () => {

  // ── Sticky nav shadow on scroll ────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile hamburger toggle ─────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close when a mobile nav link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (nav && !nav.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Highlight active nav link ───────────────────────────────
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-mobile .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === currentFile ||
      (currentFile === '' && href === 'index.html') ||
      (href === 'index.html' && window.location.pathname.endsWith('/'))
    ) {
      link.classList.add('active');
    }
  });

  // ── Scroll-triggered fade-up animations ────────────────────
  const fadeEls = document.querySelectorAll('.fade-up, .founder-note');

  if (fadeEls.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
      );
      fadeEls.forEach(el => io.observe(el));
    } else {
      // Fallback: show immediately for older browsers
      fadeEls.forEach(el => el.classList.add('visible'));
    }
  }

  // ── Smooth scroll for in-page anchors ──────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
        ) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});

// ── FAQ accordion ──────────────────────────────────
(function () {
  const faqBtns = document.querySelectorAll('.faq-q');
  if (!faqBtns.length) return;

  faqBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const answerId = btn.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);

      faqBtns.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherId = otherBtn.getAttribute('aria-controls');
          const otherAnswer = document.getElementById(otherId);
          if (otherAnswer) otherAnswer.hidden = true;
        }
      });

      if (isOpen) {
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.hidden = true;
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.hidden = false;
      }
    });
  });

  if (window.location.pathname.includes('services')) {
    const firstBtn = faqBtns[0];
    const firstAnswer = document.getElementById(
      firstBtn.getAttribute('aria-controls')
    );
    if (firstBtn && firstAnswer) {
      firstBtn.setAttribute('aria-expanded', 'true');
      firstAnswer.hidden = false;
    }
  }
})();
