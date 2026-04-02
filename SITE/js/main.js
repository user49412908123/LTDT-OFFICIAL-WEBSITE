gsap.registerPlugin(ScrollTrigger);

(function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".navbar__hamburger");
  const drawer = document.querySelector(".nav-drawer");
  const overlay = document.querySelector(".nav-overlay");

  if (!navbar) return;

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );

  const navLinks = document.querySelectorAll(
    ".navbar__nav a, .nav-drawer__links a",
  );
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  if (!hamburger || !drawer || !overlay) return;

  let isOpen = false;

  function openDrawer() {
    isOpen = true;
    hamburger.classList.add("is-open");
    document.body.classList.add("no-scroll");

    // Make visible first
    drawer.style.visibility = "visible";
    overlay.style.visibility = "visible";

    gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(drawer, { x: 0, duration: 0.45, ease: "power3.out" });
  }

  function closeDrawer() {
    isOpen = false;
    hamburger.classList.remove("is-open");
    document.body.classList.remove("no-scroll");

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        overlay.style.visibility = "hidden";
      },
    });
    gsap.to(drawer, {
      x: "100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        drawer.style.visibility = "hidden";
      },
    });
  }

  hamburger.addEventListener("click", () =>
    isOpen ? closeDrawer() : openDrawer(),
  );
  overlay.addEventListener("click", closeDrawer);

  const closeBtn = drawer.querySelector(".nav-drawer__close");
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) closeDrawer();
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
})();

(function initHeroAnimation() {
  const hero = document.querySelector(".hero__content");
  if (!hero) return;

  const h1 = hero.querySelector("h1");
  const para = hero.querySelector("p");
  const ctas = hero.querySelectorAll(".cta-group > *");

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  if (h1) {
    gsap.set(h1, { opacity: 0, y: 40 });
    tl.to(h1, { opacity: 1, y: 0, duration: 0.9 });
  }

  if (para) {
    gsap.set(para, { opacity: 0, y: 28 });
    tl.to(para, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");
  }

  if (ctas.length) {
    gsap.set(ctas, { opacity: 0, y: 20 });
    tl.to(
      ctas,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
      },
      "-=0.4",
    );
  }
})();

(function initScrollAnimations() {
  document.querySelectorAll(".anim-fade-up").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
  });

  document
    .querySelectorAll(".section-header, .faq__header, .advantages__header")
    .forEach((el) => {
      const children = el.children;
      if (!children.length) return;
      gsap.set(children, { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 86%",
        once: true,
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power2.out",
          });
        },
      });
    });

  document.querySelectorAll(".two-col__inner").forEach((inner) => {
    const image = inner.querySelector(".two-col__image");
    const text = inner.querySelector(".two-col__text");

    if (image) {
      gsap.set(image, { opacity: 0, x: -30 });
      ScrollTrigger.create({
        trigger: inner,
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(image, {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power2.out",
          }),
      });
    }

    if (text) {
      const textChildren = text.querySelectorAll(":scope > *");
      gsap.set(textChildren, { opacity: 0, y: 24 });
      ScrollTrigger.create({
        trigger: inner,
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(textChildren, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.15,
          }),
      });
    }
  });

  document.querySelectorAll(".advantage-item").forEach((item, i) => {
    gsap.set(item, { opacity: 0, y: 28 });
    ScrollTrigger.create({
      trigger: item,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: i * 0.08,
          ease: "power2.out",
        }),
    });
  });

  document.querySelectorAll(".pricing-card").forEach((card, i) => {
    gsap.set(card, { opacity: 0, y: 20 });
    ScrollTrigger.create({
      trigger: card,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: (i % 3) * 0.08,
          ease: "power2.out",
        }),
    });
  });

  document.querySelectorAll(".highlight-card").forEach((card, i) => {
    gsap.set(card, { opacity: 0, y: 20 });
    ScrollTrigger.create({
      trigger: card,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: (i % 3) * 0.07,
          ease: "power2.out",
        }),
    });
  });

  document.querySelectorAll(".charte-section__inner").forEach((inner) => {
    const num = inner.querySelector(".charte-section__number");
    const content = inner.querySelector(".charte-section__content");

    if (num) gsap.set(num, { opacity: 0, x: -20 });
    if (content) gsap.set(content, { opacity: 0, y: 24 });

    ScrollTrigger.create({
      trigger: inner,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (num)
          gsap.to(num, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" });
        if (content)
          gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay: 0.1,
          });
      },
    });
  });

  document
    .querySelectorAll(".editorial-section__inner > *")
    .forEach((el, i) => {
      gsap.set(el, { opacity: 0, y: 22 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: i * 0.06,
            ease: "power2.out",
          }),
      });
    });

  document.querySelectorAll(".contact-block").forEach((block, i) => {
    gsap.set(block, { opacity: 0, y: 24 });
    ScrollTrigger.create({
      trigger: block,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(block, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: i * 0.1,
          ease: "power2.out",
        }),
    });
  });
})();

(function initReviewsCarousel() {
  const wrapper = document.querySelector(
    ".reviews-carousel .carousel-track-wrapper",
  );
  const track = document.querySelector(".reviews-carousel .carousel-track");
  if (!wrapper || !track) return;

  const origCards = Array.from(track.children);
  origCards.forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });

  requestAnimationFrame(() => {
    const halfWidth = track.scrollWidth / 2;
    let anim = gsap.to(track, {
      x: -halfWidth,
      duration: 32,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % halfWidth),
      },
    });

    wrapper.addEventListener("mouseenter", () => anim.pause());
    wrapper.addEventListener("mouseleave", () => anim.play());

    wrapper.addEventListener("touchstart", () => anim.pause(), {
      passive: true,
    });
    wrapper.addEventListener("touchend", () => anim.play(), { passive: true });
  });
})();

(function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach((item) => {
    const answer = item.querySelector(".faq-item__answer");
    if (answer) gsap.set(answer, { height: 0, overflow: "hidden" });
  });

  items.forEach((item) => {
    const question = item.querySelector(".faq-item__question");
    if (!question) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      items.forEach((other) => {
        if (other !== item && other.classList.contains("is-open")) {
          closeItem(other);
        }
      });

      isOpen ? closeItem(item) : openItem(item);
    });
  });

  function openItem(item) {
    const answer = item.querySelector(".faq-item__answer");
    const inner = item.querySelector(".faq-item__answer-inner");
    if (!answer) return;

    item.classList.add("is-open");

    answer.style.height = "auto";
    const naturalH = answer.offsetHeight;
    answer.style.height = "0px";

    gsap.to(answer, { height: naturalH, duration: 0.42, ease: "power2.out" });
    if (inner) {
      gsap.fromTo(
        inner,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", delay: 0.12 },
      );
    }
  }

  function closeItem(item) {
    const answer = item.querySelector(".faq-item__answer");
    const inner = item.querySelector(".faq-item__answer-inner");

    item.classList.remove("is-open");
    if (inner)
      gsap.to(inner, { opacity: 0, y: 4, duration: 0.18, ease: "power2.in" });
    if (answer)
      gsap.to(answer, { height: 0, duration: 0.32, ease: "power2.in" });
  }
})();
