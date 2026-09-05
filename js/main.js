/* ============================================================
   GRXVITAS.MEDIA — MAIN JAVASCRIPT
   ============================================================
   Handles: loader, navbar, mobile menu, smooth scroll,
   scroll-reveal animations, portfolio rendering, lightbox,
   video hover previews, contact form.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     DOM REFERENCES
     ---------------------------------------------------------- */
  const DOM = {
    loader:         document.getElementById('loader'),
    nav:            document.getElementById('nav'),
    navHamburger:   document.getElementById('navHamburger'),
    navMobile:      document.getElementById('navMobile'),
    navLinks:       document.querySelectorAll('.nav__link, .nav__mobile-link'),
    portfolioGrid:  document.getElementById('portfolioGrid'),
    lightbox:       document.getElementById('lightbox'),
    lightboxClose:  document.getElementById('lightboxClose'),
    lightboxVideo:  document.getElementById('lightboxVideo'),
    contactForm:    document.getElementById('contactForm'),
    instagramLink:  document.getElementById('instagramLink'),
    instagramHandle:document.getElementById('instagramHandle'),
    footerInstagram:document.getElementById('footerInstagram'),
    footerEmail:    document.getElementById('footerEmail'),
  };


  /* ----------------------------------------------------------
     INIT
     ---------------------------------------------------------- */
  function init() {
    hideLoader();
    initNavScroll();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    renderPortfolio();
    initLightbox();
    initContactForm();
    populateSiteConfig();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  /* ----------------------------------------------------------
     LOADER
     ---------------------------------------------------------- */
  function hideLoader() {
    window.addEventListener('load', function () {
      setTimeout(function () {
        DOM.loader.classList.add('is-hidden');
      }, 600);
    });
  }


  /* ----------------------------------------------------------
     NAVBAR — Scroll Effect
     ---------------------------------------------------------- */
  function initNavScroll() {
    var scrolled = false;

    function checkScroll() {
      var shouldBeScrolled = window.scrollY > 60;
      if (shouldBeScrolled !== scrolled) {
        scrolled = shouldBeScrolled;
        DOM.nav.classList.toggle('is-scrolled', scrolled);
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }


  /* ----------------------------------------------------------
     MOBILE MENU
     ---------------------------------------------------------- */
  function initMobileMenu() {
    DOM.navHamburger.addEventListener('click', function () {
      var isOpen = DOM.navMobile.classList.toggle('is-open');
      DOM.navHamburger.classList.toggle('is-active', isOpen);
      DOM.navHamburger.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });

    // Close on link click
    DOM.navMobile.querySelectorAll('.nav__mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    DOM.navMobile.classList.remove('is-open');
    DOM.navHamburger.classList.remove('is-active');
    DOM.navHamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }


  /* ----------------------------------------------------------
     SMOOTH SCROLL — Anchor Links
     ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }


  /* ----------------------------------------------------------
     SCROLL REVEAL — Intersection Observer
     ---------------------------------------------------------- */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal-up');

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    });

    elements.forEach(function (el) { observer.observe(el); });
  }


  /* ----------------------------------------------------------
     PORTFOLIO — Render from site-config.js
     ---------------------------------------------------------- */
  function renderPortfolio() {
    if (!DOM.portfolioGrid || typeof PORTFOLIO_DATA === 'undefined') return;

    var html = '';

    PORTFOLIO_DATA.forEach(function (item) {
      var sizeClass = 'portfolio-card--' + (item.size || 'medium');
      var hasVideo = item.videoUrl && item.videoUrl.length > 0;
      var hasPoster = item.posterUrl && item.posterUrl.length > 0;

      html += '<div class="portfolio-card ' + sizeClass + ' reveal-up" data-id="' + item.id + '"';
      if (hasVideo) html += ' data-video="' + item.videoUrl + '"';
      html += '>';

      // Media or placeholder
      if (hasPoster) {
        html += '<img class="portfolio-card__media" src="' + item.posterUrl + '" alt="' + item.title + '" loading="lazy">';
      }
      if (hasVideo) {
        html += '<video class="portfolio-card__media portfolio-card__video-preview" src="' + item.videoUrl + '" muted loop playsinline preload="none" style="' + (hasPoster ? 'opacity:0;' : '') + '"></video>';
      }

      // Placeholder (shown when no media)
      if (!hasVideo && !hasPoster) {
        html += '<div class="portfolio-card__placeholder">';
        html += '  <div class="portfolio-card__placeholder-icon">';
        html += '    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
        html += '  </div>';
        html += '  <span class="portfolio-card__placeholder-text">YOUR VIDEO HERE</span>';
        html += '</div>';
      }

      // Overlay
      html += '<div class="portfolio-card__overlay">';
      html += '  <span class="portfolio-card__category">' + item.category + '</span>';
      html += '  <h3 class="portfolio-card__title">' + item.title + '</h3>';
      html += '  <p class="portfolio-card__desc">' + item.description + '</p>';
      html += '</div>';

      // Play button
      if (hasVideo) {
        html += '<div class="portfolio-card__play">';
        html += '  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
        html += '</div>';
      }

      html += '</div>';
    });

    DOM.portfolioGrid.innerHTML = html;

    // Re-observe newly added elements
    initScrollReveal();

    // Video hover previews
    initVideoHover();

    // Click to open lightbox
    DOM.portfolioGrid.querySelectorAll('.portfolio-card[data-video]').forEach(function (card) {
      card.addEventListener('click', function () {
        openLightbox(this.getAttribute('data-video'));
      });
    });
  }


  /* ----------------------------------------------------------
     VIDEO HOVER PREVIEW
     ---------------------------------------------------------- */
  function initVideoHover() {
    var previews = DOM.portfolioGrid.querySelectorAll('.portfolio-card__video-preview');

    previews.forEach(function (video) {
      var card = video.closest('.portfolio-card');

      card.addEventListener('mouseenter', function () {
        video.style.opacity = '1';
        video.play().catch(function () { /* autoplay blocked, silent fail */ });
      });

      card.addEventListener('mouseleave', function () {
        video.pause();
        video.currentTime = 0;
        if (card.querySelector('.portfolio-card__media:not(.portfolio-card__video-preview)')) {
          video.style.opacity = '0';
        }
      });
    });
  }


  /* ----------------------------------------------------------
     LIGHTBOX
     ---------------------------------------------------------- */
  function initLightbox() {
    DOM.lightboxClose.addEventListener('click', closeLightbox);

    DOM.lightbox.addEventListener('click', function (e) {
      if (e.target === DOM.lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && DOM.lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  function openLightbox(videoUrl) {
    DOM.lightboxVideo.src = videoUrl;
    DOM.lightbox.classList.add('is-open');
    document.body.classList.add('no-scroll');
    DOM.lightboxVideo.play().catch(function () {});
  }

  function closeLightbox() {
    DOM.lightboxVideo.pause();
    DOM.lightboxVideo.removeAttribute('src');
    DOM.lightbox.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }


  /* ----------------------------------------------------------
     CONTACT FORM
     ---------------------------------------------------------- */
  function initContactForm() {
    if (!DOM.contactForm) return;

    DOM.contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = this.querySelector('button[type="submit"]');
      var originalText = btn.textContent;

      btn.textContent = 'SENDING...';
      btn.disabled = true;

      // Simulate submission — replace with your backend endpoint
      setTimeout(function () {
        btn.textContent = 'SENT ✓';

        setTimeout(function () {
          btn.textContent = originalText;
          btn.disabled = false;
          DOM.contactForm.reset();
        }, 2500);
      }, 1500);

      /*
       * TODO: Replace the above with your actual form submission.
       * Example with fetch:
       *
       * fetch('YOUR_ENDPOINT', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(Object.fromEntries(new FormData(this)))
       * })
       * .then(res => { ... })
       * .catch(err => { ... });
       */
    });
  }


  /* ----------------------------------------------------------
     POPULATE SITE CONFIG — Social / Contact
     ---------------------------------------------------------- */
  function populateSiteConfig() {
    if (typeof SITE_CONFIG === 'undefined') return;

    var ig = SITE_CONFIG.instagram;
    if (ig) {
      if (DOM.instagramLink) DOM.instagramLink.href = ig.url;
      if (DOM.instagramHandle) DOM.instagramHandle.textContent = ig.handle;
      if (DOM.footerInstagram) DOM.footerInstagram.href = ig.url;
    }

    if (SITE_CONFIG.email) {
      if (DOM.footerEmail) DOM.footerEmail.href = 'mailto:' + SITE_CONFIG.email;
    }
  }

})();
