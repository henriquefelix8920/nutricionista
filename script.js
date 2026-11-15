(function () {
  "use strict";

  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".main-navigation");

  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      navigation.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  var year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
}());

/* Botanical editorial motion layer — progressive enhancement. */
(function () {
  "use strict";
  var root = document.documentElement;
  var preference = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var finePointer = window.matchMedia ? window.matchMedia("(hover: hover) and (pointer: fine)") : null;
  var observer = null;
  var initialized = false;

  function addReveal(selector, delay, stagger, extra, targets) {
    document.querySelectorAll(selector).forEach(function (element, index) {
      element.classList.add("motion-reveal");
      if (extra) element.classList.add(extra);
      element.style.setProperty("--motion-delay", (delay + index * (stagger || 0)) + "ms");
      targets.add(element);
    });
  }

  function addEntrance(selector, delay, extra, stagger) {
    document.querySelectorAll(selector).forEach(function (element, index) {
      element.classList.add("motion-enter");
      if (extra) element.classList.add(extra);
      element.style.setProperty("--motion-delay", (delay + index * (stagger || 0)) + "ms");
    });
  }

  function attachTilt(card) {
    card.classList.add("motion-tilt");
    card.addEventListener("pointermove", function (event) {
      if (event.pointerType !== "mouse") return;
      var rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--motion-rotate-x", (y * -2.2).toFixed(2) + "deg");
      card.style.setProperty("--motion-rotate-y", (x * 2.2).toFixed(2) + "deg");
      card.classList.add("motion-tilting");
    });
    card.addEventListener("pointerleave", function () {
      card.classList.remove("motion-tilting");
      card.style.removeProperty("--motion-rotate-x");
      card.style.removeProperty("--motion-rotate-y");
    });
  }

  function initParallax() {
    var hero = document.querySelector(".hero");
    var art = document.querySelector(".hero-art-wrap");
    if (!hero || !art || !finePointer || !finePointer.matches || window.innerWidth <= 820) return;
    art.classList.add("motion-parallax");
    var frame = 0;
    function update() {
      frame = 0;
      if (preference && preference.matches) return;
      var rect = hero.getBoundingClientRect();
      var progress = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
      art.style.setProperty("--hero-parallax-y", (progress * -14).toFixed(1) + "px");
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();
  }

  function initialize() {
    if (preference && preference.matches) return;
    if (!("IntersectionObserver" in window)) return;
    if (initialized && root.classList.contains("motion-ready")) return;

    try {
      var targets = new Set();

      /* Coordinated first screen entrance. */
      addEntrance(".topline", 20);
      addEntrance(".site-header", 75);
      addEntrance(".hero .eyebrow", 150);
      addEntrance(".hero h1", 270, "motion-mask");
      addEntrance(".hero-lead", 520);
      addEntrance(".hero-actions > *", 700, null, 115);
      addEntrance(".hero-meta", 970);
      addEntrance(".hero-art", 390, "motion-art");
      addEntrance(".art-caption", 1010);

      /* Scroll reveals, once per element. */
      addReveal(".intro-band-inner > *", 0, 55, null, targets);
      addReveal(".approach-heading .eyebrow", 0, 0, null, targets);
      addReveal(".approach-heading h2", 70, 0, "motion-mask", targets);
      addReveal(".heading-note", 180, 0, null, targets);
      addReveal(".principle-card", 70, 105, "motion-card", targets);

      addReveal(".services-heading .eyebrow", 0, 0, null, targets);
      addReveal(".services-heading h2", 65, 0, "motion-mask", targets);
      addReveal(".services-heading > p", 165, 0, null, targets);
      addReveal(".service-card", 70, 105, "motion-card", targets);
      addReveal(".service-icon", 130, 0, "motion-icon", targets);
      addReveal(".services-foot > *", 70, 100, null, targets);

      addReveal(".program-art", 0, 0, "motion-scale", targets);
      addReveal(".program-copy > *", 40, 75, null, targets);
      addReveal(".program-includes > div", 140, 95, null, targets);

      addReveal(".about-card", 0, 0, "motion-scale", targets);
      addReveal(".about-monogram", 120, 0, "motion-scale", targets);
      addReveal(".about-copy > *", 40, 85, null, targets);
      addReveal(".care-heading > *", 0, 80, null, targets);
      addReveal(".care-card", 60, 120, "motion-card", targets);
      addReveal(".care-graphic", 120, 0, "motion-icon", targets);
      addReveal(".insurance-note", 90, 0, null, targets);
      addReveal(".faq-intro > *", 0, 85, null, targets);
      addReveal(".faq-item", 0, 65, null, targets);

      addReveal(".closing-inner > div:first-child > *", 0, 90, null, targets);
      addReveal(".closing-inner h2", 90, 0, "motion-mask", targets);
      addReveal(".closing-action > *", 100, 100, null, targets);
      addReveal(".closing-deco", 0, 0, "motion-scale", targets);
      addReveal(".contact-heading > *", 0, 85, null, targets);
      addReveal(".contact-heading h2", 85, 0, "motion-mask", targets);
      addReveal(".contact-card", 70, 105, "motion-card", targets);
      addReveal(".social-row > *", 60, 70, null, targets);
      addReveal(".footer-main > *", 0, 80, null, targets);
      addReveal(".footer-legal > *", 80, 65, null, targets);
      addReveal(".floating-whatsapp", 0, 0, "motion-floating-cta", targets);

      if (finePointer && finePointer.matches && window.innerWidth > 820) {
        document.querySelectorAll(".principle-card, .service-card, .care-card").forEach(attachTilt);
      }

      root.classList.add("motion-ready");
      initialized = true;
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

      targets.forEach(function (element) {
        if (!element.classList.contains("motion-visible")) observer.observe(element);
      });

      window.requestAnimationFrame(function () {
        root.classList.add("motion-entered");
        document.querySelectorAll(".motion-enter").forEach(function (element) {
          element.classList.add("motion-visible");
        });
        initParallax();
      });
    } catch (error) {
      root.classList.remove("motion-ready", "motion-entered");
      if (observer) observer.disconnect();
      if (window.console && typeof window.console.warn === "function") {
        window.console.warn("Motion layer disabled; content remains available.", error);
      }
    }
  }

  function onPreferenceChange(event) {
    if (event.matches) {
      if (observer) observer.disconnect();
      root.classList.remove("motion-ready", "motion-entered");
    } else {
      initialize();
    }
  }

  initialize();
  if (preference) {
    if (typeof preference.addEventListener === "function") preference.addEventListener("change", onPreferenceChange);
    else if (typeof preference.addListener === "function") preference.addListener(onPreferenceChange);
  }
}());
