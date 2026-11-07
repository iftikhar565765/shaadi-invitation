/* ═══════════════════════════════════════════════════════════════
   SHAADI · envelope.js
   The opening — the golden gates of the palace. The crest lifts,
   the seam blooms with candlelight, and the gates part.
   · GSAP choreography when GSAP is available
   · Pure-CSS keyframe fallback when GSAP fails to load
   · Instant, motion-free handover under prefers-reduced-motion
   · Always escapable: skip control, the open button, Escape key
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* Tell the inline watchdog (index.html) that the intro system is alive. */
  window.__heirloomIntroReady = true;

  var body = document.body;
  var opening = document.getElementById('opening');
  var gates = document.getElementById('envelope');
  var skipBtn = document.getElementById('skip-intro');
  var openBtn = document.getElementById('open-invitation');

  if (!opening || !gates) {
    // Nothing to orchestrate — reveal the site immediately.
    body.classList.remove('intro-pending');
    body.classList.add('intro-done');
    return;
  }

  var left = gates.querySelector('.gate--left');
  var right = gates.querySelector('.gate--right');
  var crest = gates.querySelector('.gate-crest');
  var seam = gates.querySelector('.gate-seam');
  var glow = opening.querySelector('.opening__glow');
  var fadingParts = '.opening__eyebrow, .opening__names, .opening__hint, ' +
                    '.opening__florals, .opening__watermark, .gate-shadow';

  var reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var hasGsap = typeof window.gsap !== 'undefined';

  var started = false;
  var finished = false;
  var timeline = null;

  /* ── Final handover ──────────────────────────────────────────── */
  function completeIntro(fadeOut) {
    if (finished) return;
    finished = true;

    if (timeline) { timeline.kill(); timeline = null; }

    if (fadeOut) opening.classList.add('is-leaving');

    body.classList.remove('intro-pending');
    body.classList.add('intro-done');

    // Hand focus to the invitation headline for keyboard & screen readers.
    // preventScroll keeps the arrival at the very top of the suite —
    // focusing must never yank the guest into the middle of the card.
    var h1 = document.getElementById('invitation-title');
    if (h1) {
      try { h1.focus({ preventScroll: true }); } catch (e) { h1.focus(); }
      window.scrollTo(0, 0);
    }

    // The cover leaves the accessibility tree entirely.
    opening.setAttribute('aria-hidden', 'true');
    try { opening.inert = true; } catch (e) { /* older browsers: visual hiding suffices */ }

    window.setTimeout(function () {
      opening.style.display = 'none';
    }, fadeOut ? 1050 : 120);

    document.dispatchEvent(new CustomEvent('heirloom:intro-complete'));
  }

  /* ── GSAP choreography — the parting of the gates ────────────── */
  function openWithGsap() {
    gates.classList.add('is-open');

    gsap.set(gates, { scale: 1 });
    gsap.set(left, { xPercent: 0, rotationY: 0 });
    gsap.set(right, { xPercent: 0, rotationY: 0 });
    gsap.set(crest, { scale: 1, opacity: 1 });
    gsap.set(seam, { opacity: 0.55, scaleX: 1 });
    if (glow) gsap.set(glow, { opacity: 1, scale: 1 });

    timeline = gsap.timeline({ onComplete: function () { completeIntro(false); } });

    timeline
      /* 1 · the crest acknowledges the touch */
      .to(crest, { scale: 1.06, duration: 0.42, ease: 'power2.out' })

      /* 2 · the hall's light gathers behind the seam */
      .to(seam, { opacity: 1, duration: 0.5, ease: 'power1.inOut' }, 0.18)
      .to(glow, { opacity: 1, scale: 1.18, duration: 0.9, ease: 'power1.inOut' }, 0.2)

      /* 3 · the crest rises with the light, as if carried through */
      .to(crest, { scale: 1.45, opacity: 0, yPercent: -12, duration: 0.85, ease: 'power2.in' }, 0.5)

      /* 4 · the gates part — the grand reveal */
      .to(left, { xPercent: -103, rotationY: 14, duration: 1.5, ease: 'power2.inOut' }, 1.02)
      .to(right, { xPercent: 103, rotationY: -14, duration: 1.5, ease: 'power2.inOut' }, 1.02)

      /* 5 · the seam blooms and dissolves into the hall */
      .to(seam, { opacity: 0, scaleX: 30, duration: 1.15, ease: 'power2.in' }, 1.28)

      /* 6 · the court's frame quietly leaves the stage */
      .to(fadingParts, { opacity: 0, duration: 0.6, ease: 'power1.out' }, 1.9)

      /* 7 · the gates dissolve as the suite materialises behind them */
      .to(gates, { opacity: 0, scale: 1.04, duration: 0.6, ease: 'power2.in' }, 2.16)

      /* 8 · the cover sheet lifts away, crossfading into the palace */
      .to(opening, { opacity: 0, duration: 0.66, ease: 'power1.inOut' }, 2.24);
  }

  /* ── CSS-keyframes fallback (no GSAP) ────────────────────────── */
  function openWithFallback() {
    var wait = reducedQuery.matches ? 300 : 2900;
    gates.classList.add('is-fallback-open');
    if (glow) glow.style.opacity = '0.9';
    window.setTimeout(function () { completeIntro(true); }, wait);
  }

  /* ── Reduced motion: quiet, near-instant handover ─────────────── */
  function openReduced() {
    gates.classList.add('is-open');
    window.setTimeout(function () { completeIntro(true); }, 120);
  }

  /* ── Entry point ─────────────────────────────────────────────── */
  function open() {
    if (inEditor) return;
    if (started || finished) return;
    started = true;
    skipBtn.disabled = true;
    if (openBtn) openBtn.disabled = true;

    if (reducedQuery.matches)      openReduced();
    else if (hasGsap)              openWithGsap();
    else                           openWithFallback();
  }

  /* Inside the customizer preview the gates are an editable scene,
     not a control — clicks select & recolour their parts instead of
     opening them. Guests (top-level page) keep the full choreography. */
  var inEditor = window.parent !== window;

  gates.addEventListener('click', open);
  if (!inEditor && openBtn) openBtn.addEventListener('click', open);

  skipBtn.addEventListener('click', function () {
    if (started) return;
    started = true;
    completeIntro(true);
  });

  // Escape always offers a way out of the opening.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !finished && body.classList.contains('intro-pending')) {
      started = true;
      completeIntro(true);
    }
  });

  /* ── Replay (wired from the closing scene) ───────────────────── */
  window.heirloomReplayIntro = function () {
    if (!finished) return;
    finished = false;
    started = false;
    skipBtn.disabled = false;
    if (openBtn) openBtn.disabled = false;

    if (window.ScrollTrigger) {
      try { ScrollTrigger.getAll().forEach(function (t) { t.kill(); }); } catch (e) {}
    }

    // Reset the gates to their sealed state.
    gates.classList.remove('is-open', 'is-fallback-open');
    [left, right, crest, seam, glow, gates].forEach(function (el) {
      if (el && el.style) el.removeAttribute('style');
    });
    if (glow) glow.removeAttribute('style');
    opening.querySelectorAll('.opening__eyebrow, .opening__names, .opening__hint, ' +
      '.opening__florals, .opening__watermark, .gate-shadow')
      .forEach(function (el) { el.removeAttribute('style'); });
    if (hasGsap) {
      gsap.set([left, right, crest, seam], { clearProps: 'all' });
      gsap.set([gates, glow], { clearProps: 'all' });
    }

    // Reset the overlay.
    opening.classList.remove('is-leaving');
    opening.removeAttribute('aria-hidden');
    try { opening.inert = false; } catch (e) {}
    opening.style.display = '';
    opening.style.opacity = '';

    // Return to the top, instantly and quietly.
    body.classList.remove('intro-done');
    body.classList.add('intro-pending');
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
    catch (e) { window.scrollTo(0, 0); }

    window.setTimeout(function () {
      try { gates.focus({ preventScroll: true }); } catch (e) { gates.focus(); }
    }, 60);
  };

})();
