(async function initEquipe() {
  const wrapper = document.getElementById("team-carousel-wrapper");
  const template = document.getElementById("masseur-card-template");

  if (!wrapper || !template) return;

  const QUERY = `*[_type == "member"] | order(_createdAt asc) {
    firstname,
    slug,
    "imageUrl": mainImage.asset->url
  }`;

  let members = [];
  try {
    members = await sanityFetch(QUERY);
  } catch (err) {
    wrapper.innerHTML =
      '<p class="empty-state">Nos masseuses arrivent bientôt...</p>';
    return;
  }

  if (!members || !members.length) {
    wrapper.innerHTML =
      '<p class="empty-state">Nos masseuses arrivent bientôt...</p>';
    return;
  }

  const track = document.createElement("div");
  track.className = "carousel-track";

  function createCard(member) {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".team-card");

    const img = card.querySelector(".team-card__image");
    const name = card.querySelector(".team-card__name");
    const cta = card.querySelector(".team-card__cta");

    if (img) {
      img.src = imageUrl(member.imageUrl, 600);
      img.alt = member.firstname || "Masseuse";
    }

    if (name) {
      name.textContent = member.firstname || "Masseuse";
    }

    if (cta && member.slug && member.slug.current) {
      cta.href = `membre-detail.html?slug=${member.slug.current}`;
    }

    return clone;
  }

  members.forEach((member) => {
    track.appendChild(createCard(member));
  });

  const copies = Math.ceil(1600 / (260 + 24)) + 1;
  for (let i = 0; i < copies; i++) {
    members.forEach((member) => {
      const clone = createCard(member);
      const card = clone.querySelector
        ? clone.querySelector(".team-card")
        : clone.firstElementChild;
      if (card) card.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  }

  wrapper.querySelector(".loading-state")?.remove();

  const trackWrapper = document.createElement("div");
  trackWrapper.className = "carousel-track-wrapper";
  trackWrapper.appendChild(track);
  wrapper.appendChild(trackWrapper);

  requestAnimationFrame(() => {
    const originalWidth = members.length * (260 + 24); // card width + gap

    let anim = gsap.to(track, {
      x: -originalWidth,
      duration: members.length * 4,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % originalWidth),
      },
    });

    trackWrapper.addEventListener("mouseenter", () => anim.pause());
    trackWrapper.addEventListener("mouseleave", () => anim.play());

    trackWrapper.addEventListener("touchstart", () => anim.pause(), {
      passive: true,
    });
    trackWrapper.addEventListener("touchend", () => anim.play(), {
      passive: true,
    });
  });

  if (typeof ScrollTrigger !== "undefined") {
    gsap.from(wrapper, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapper,
        start: "top 85%",
        once: true,
      },
    });
  }
})();
