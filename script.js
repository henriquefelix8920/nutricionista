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
  var parallaxBound = false;
  var scrollTransitionTargets = [];
  var scrollTransitionFrame = 0;
  var scrollTransitionBound = false;
  var scrollResizeBound = false;
  var scrollTransitionMode = null;
  var scrollSectionObserver = null;
  var frontScrollSection = null;
  var ambientObserver = null;
  var ambientTargets = [];
  var visibilityHandlerBound = false;

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
    if (card.classList.contains("motion-tilt")) return;
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
      if (window.innerWidth <= 820 || !finePointer.matches || (preference && preference.matches)) return;
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    if (!parallaxBound) {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      parallaxBound = true;
    }
    schedule();
  }

  function updateScrollTransitions() {
    scrollTransitionFrame = 0;
    if (scrollTransitionMode !== "desktop" || (preference && preference.matches)) return;

    var viewportHeight = Math.max(window.innerHeight || 1, 1);
    var closestItem = null;
    var closestEdge = Infinity;

    scrollTransitionTargets.forEach(function (item) {
      var section = item.section;
      if (!section.classList.contains("scroll-depth-active")) return;

      var rect = section.getBoundingClientRect();
      var centerOffset = rect.top + rect.height * 0.5 - viewportHeight * 0.5;
      var normalized = centerOffset / Math.max((rect.height + viewportHeight) * 0.5, 1);
      var edge = Math.max(0, Math.min(1, Math.abs(normalized)));
      var fromBelow = normalized > 0;

      var y, z, rotateX, scale, opacity;
      if (item.mode === "back") {
        y = (fromBelow ? 18 : -18) * edge;
        z = -360 * edge;
        rotateX = (fromBelow ? 8 : -8) * edge;
        scale = 1 - 0.16 * edge;
        opacity = 1 - 0.30 * edge;
      } else {
        y = -210 * edge;
        z = -105 * edge;
        rotateX = (fromBelow ? 12 : -12) * edge;
        scale = 1 - 0.10 * edge;
        opacity = 1 - 0.32 * edge;
      }

      /* Two style writes per active panel: compositor-friendly transform and opacity only. */
      var transform = "translate3d(0," + y.toFixed(1) + "px," + z.toFixed(1) + "px) rotateX(" +
        rotateX.toFixed(2) + "deg) scale(" + scale.toFixed(3) + ")";
      var opacityValue = opacity.toFixed(3);
      if (item.lastTransform !== transform) {
        section.style.setProperty("--section-flow-transform", transform);
        item.lastTransform = transform;
      }
      if (item.lastOpacity !== opacityValue) {
        section.style.setProperty("--section-flow-opacity", opacityValue);
        item.lastOpacity = opacityValue;
      }

      if (edge < closestEdge) {
        closestEdge = edge;
        closestItem = item;
      }
    });

    /* Stacking changes only when the lead section changes, never on every frame. */
    if (closestItem && closestItem.section !== frontScrollSection) {
      if (frontScrollSection) {
        var previous = scrollTransitionTargets.find(function (item) { return item.section === frontScrollSection; });
        if (previous) previous.section.style.zIndex = String(previous.index + 1);
      }
      closestItem.section.style.zIndex = "50";
      frontScrollSection = closestItem.section;
    } else if (!closestItem && frontScrollSection) {
      var oldFront = scrollTransitionTargets.find(function (item) { return item.section === frontScrollSection; });
      if (oldFront) oldFront.section.style.zIndex = String(oldFront.index + 1);
      frontScrollSection = null;
    }
  }

  function scheduleScrollTransitions() {
    if (scrollTransitionMode === "desktop" && !scrollTransitionFrame) {
      scrollTransitionFrame = window.requestAnimationFrame(updateScrollTransitions);
    }
  }

  function resetScrollTransitionMode() {
    if (scrollSectionObserver) {
      scrollSectionObserver.disconnect();
      scrollSectionObserver = null;
    }
    if (scrollTransitionBound) {
      window.removeEventListener("scroll", scheduleScrollTransitions);
      scrollTransitionBound = false;
    }
    if (scrollTransitionFrame) {
      window.cancelAnimationFrame(scrollTransitionFrame);
      scrollTransitionFrame = 0;
    }
    scrollTransitionTargets.forEach(function (item) {
      var section = item.section;
      section.classList.remove(
        "scroll-depth-layer", "scroll-depth-back", "scroll-depth-drop",
        "scroll-depth-active", "scroll-depth-visible"
      );
      section.style.removeProperty("--section-flow-transform");
      section.style.removeProperty("--section-flow-opacity");
      section.style.removeProperty("z-index");
      item.lastTransform = null;
      item.lastOpacity = null;
    });
    frontScrollSection = null;
    scrollTransitionMode = null;
  }

  function configureScrollTransitions() {
    var coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    var nextMode = window.innerWidth <= 820 || coarse ? "mobile" : "desktop";

    if (scrollTransitionMode === nextMode) {
      scheduleScrollTransitions();
      return;
    }

    resetScrollTransitionMode();
    scrollTransitionMode = nextMode;

    scrollTransitionTargets.forEach(function (item, index) {
      item.index = index;
      item.mode = index % 2 === 0 ? "back" : "drop";
      item.section.classList.add(
        "scroll-depth-layer",
        item.mode === "back" ? "scroll-depth-back" : "scroll-depth-drop"
      );
      if (nextMode === "desktop") item.section.style.zIndex = String(index + 1);
    });

    scrollSectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var item = scrollTransitionTargets.find(function (candidate) {
          return candidate.section === entry.target;
        });
        if (nextMode === "mobile") {
          if (entry.isIntersecting) {
            var targetSection = entry.target;
            scrollSectionObserver.unobserve(targetSection);

            /* Give the initial 3D pose one paint before settling it into view.
               This makes the CSS transition reliable on mobile Safari/Chrome
               without introducing a scroll listener or a per-frame JS loop. */
            window.requestAnimationFrame(function () {
              window.requestAnimationFrame(function () {
                if (scrollTransitionMode === "mobile" &&
                    targetSection.classList.contains("scroll-depth-layer")) {
                  targetSection.classList.add("scroll-depth-visible");
                }
              });
            });
          }
          return;
        }

        entry.target.classList.toggle("scroll-depth-active", entry.isIntersecting);
        if (!entry.isIntersecting && entry.target === frontScrollSection) {
          entry.target.style.zIndex = String(item ? item.index + 1 : 1);
          frontScrollSection = null;
        }
        if (entry.isIntersecting) scheduleScrollTransitions();
      });
    }, nextMode === "mobile"
      ? { threshold: 0.01, rootMargin: "0px 0px 16% 0px" }
      : { threshold: 0, rootMargin: "110% 0px" });

    scrollTransitionTargets.forEach(function (item) {
      scrollSectionObserver.observe(item.section);
    });

    if (nextMode === "desktop") {
      window.addEventListener("scroll", scheduleScrollTransitions, { passive: true });
      scrollTransitionBound = true;
      scheduleScrollTransitions();
    }
  }

  function handleScrollTransitionResize() {
    configureScrollTransitions();
    if (scrollTransitionMode === "desktop" && !parallaxBound) initParallax();
  }

  function initScrollTransitions() {
    if (!scrollTransitionTargets.length) {
      document.querySelectorAll("main > section").forEach(function (section, index) {
        scrollTransitionTargets.push({
          section: section,
          index: index,
          mode: index % 2 === 0 ? "back" : "drop",
          lastTransform: null,
          lastOpacity: null
        });
      });
    }

    if (!scrollResizeBound) {
      window.addEventListener("resize", handleScrollTransitionResize, { passive: true });
      scrollResizeBound = true;
    }
    configureScrollTransitions();
  }

  function clearScrollTransitions() {
    resetScrollTransitionMode();
    if (scrollResizeBound) {
      window.removeEventListener("resize", handleScrollTransitionResize);
      scrollResizeBound = false;
    }
    scrollTransitionTargets = [];
  }

  function initAmbientMotion() {
    if (!("IntersectionObserver" in window)) return;
    if (ambientObserver) ambientObserver.disconnect();
    ambientTargets = [];
    var targets = new Set();
    [
      ".hero-art", ".program-art", ".about-card", ".principle-card",
      ".care-card", ".service-card", ".closing-deco"
    ].forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) { targets.add(element); });
    });
    ambientTargets = Array.from(targets);

    ambientObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("motion-in-view", entry.isIntersecting);
      });
    }, { threshold: 0.01, rootMargin: "100px 0px" });

    ambientTargets.forEach(function (element) { ambientObserver.observe(element); });

    if (!visibilityHandlerBound) {
      document.addEventListener("visibilitychange", function () {
        root.classList.toggle("motion-paused", document.hidden);
      });
      visibilityHandlerBound = true;
    }
    root.classList.toggle("motion-paused", document.hidden);
  }

  function clearAmbientMotion() {
    if (ambientObserver) {
      ambientObserver.disconnect();
      ambientObserver = null;
    }
    ambientTargets.forEach(function (element) { element.classList.remove("motion-in-view"); });
    ambientTargets = [];
    root.classList.remove("motion-paused");
  }

  function applyRandomTitleTransitions() {
    var selectors = [
      ".approach-heading h2",
      ".services-heading h2",
      ".program-copy > h2",
      ".about-copy > h2",
      ".care-heading > h2",
      ".faq-intro > h2",
      ".closing-inner h2",
      ".contact-heading > h2"
    ];
    var headings = [];
    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (heading) {
        headings.push(heading);
      });
    });

    /* Shuffle eight distinct motion styles so no section title repeats a style. */
    var variations = [
      "motion-title-rise",
      "motion-title-slide-left",
      "motion-title-slide-right",
      "motion-title-zoom",
      "motion-title-drop",
      "motion-title-tilt",
      "motion-title-soft",
      "motion-title-diagonal"
    ];
    for (var i = variations.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temporary = variations[i];
      variations[i] = variations[j];
      variations[j] = temporary;
    }

    headings.forEach(function (heading, index) {
      heading.classList.add("motion-title", variations[index % variations.length]);
      heading.style.setProperty("--motion-title-duration", (820 + Math.floor(Math.random() * 360)) + "ms");
      heading.style.setProperty("--motion-title-delay", (35 + Math.floor(Math.random() * 115)) + "ms");
    });
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
      addReveal(".approach-heading h2", 70, 0, null, targets);
      addReveal(".heading-note", 180, 0, null, targets);
      addReveal(".principle-card", 70, 105, "motion-card", targets);

      addReveal(".services-heading .eyebrow", 0, 0, null, targets);
      addReveal(".services-heading h2", 65, 0, null, targets);
      addReveal(".services-heading > p", 165, 0, null, targets);
      addReveal(".service-card", 70, 105, "motion-card", targets);
      addReveal(".service-icon", 130, 0, "motion-icon", targets);
      addReveal(".services-foot > *", 70, 100, null, targets);

      addReveal(".program-art", 0, 0, "motion-scale", targets);
      addReveal(".program-copy > .eyebrow, .program-copy > .program-overline, .program-copy > h2, .program-copy > .program-lead, .program-copy > .button", 40, 75, null, targets);
      addReveal(".program-includes > div", 140, 95, null, targets);

      addReveal(".about-card", 0, 0, "motion-scale", targets);
      addReveal(".about-copy > *", 40, 85, null, targets);
      addReveal(".care-heading > *", 0, 80, null, targets);
      addReveal(".care-card", 60, 120, "motion-card", targets);
      addReveal(".care-graphic", 120, 0, "motion-icon", targets);
      addReveal(".insurance-note", 90, 0, null, targets);
      addReveal(".faq-intro > *", 0, 85, null, targets);
      addReveal(".faq-item", 0, 65, null, targets);

      addReveal(".closing-inner > div:first-child > .eyebrow, .closing-inner > div:first-child > p:last-child", 0, 90, null, targets);
      addReveal(".closing-inner h2", 90, 0, null, targets);
      addReveal(".closing-action > *", 100, 100, null, targets);
      addReveal(".closing-deco", 0, 0, "motion-scale", targets);
      addReveal(".contact-heading > .eyebrow", 0, 0, null, targets);
      addReveal(".contact-heading h2", 85, 0, null, targets);
      addReveal(".contact-card", 70, 105, "motion-card", targets);
      addReveal(".social-row > *", 60, 70, null, targets);
      addReveal(".footer-main > *", 0, 80, null, targets);
      addReveal(".footer-legal > *", 80, 65, null, targets);
      addReveal(".floating-whatsapp", 0, 0, "motion-floating-cta", targets);

      applyRandomTitleTransitions();

      if (finePointer && finePointer.matches && window.innerWidth > 820) {
        document.querySelectorAll(".principle-card, .service-card, .care-card").forEach(attachTilt);
      }

      root.classList.add("motion-ready");
      initialized = true;
      initScrollTransitions();
      initAmbientMotion();
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
      clearScrollTransitions();
      clearAmbientMotion();
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
