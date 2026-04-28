(async function initMembreDetail() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    showError("Aucun profil spécifié.");
    return;
  }

  const QUERY = `*[_type == "member" && slug.current == $slug][0] {
    firstname,
    age,
    Taille,
    poids,
    bonnet,
    cheveux,
    yeux,
    nationalite,
    origine,
    "image": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    "commentaires": *[_type == "comment" && belongsTo._ref == ^._id] | order(_createdAt desc) {
      author,
      text,
      _createdAt
    }
  }`;

  let member;
  try {
    member = await sanityFetch(QUERY.replace("$slug", `"${slug}"`));
  } catch (err) {
    showError("Impossible de charger ce profil pour le moment.");
    return;
  }

  if (!member) {
    showError("Ce profil n'existe pas ou n'est plus disponible.");
    return;
  }

  if (member.firstname) {
    document.title = `${member.firstname} — Le Temps d'un Tantra`;
  }

  const nameEl = document.getElementById("member-name");
  if (nameEl) {
    nameEl.textContent = member.firstname
      ? `${member.firstname} — masseuse tantra à Charleroi`
      : "Masseuse tantra à Charleroi";
  }

  const feedbackTitleEl = document.getElementById("feedback-title");
  if (feedbackTitleEl) {
    feedbackTitleEl.textContent = member.firstname
      ? `Laisser un commentaire pour ${member.firstname}`
      : "Laisser un commentaire pour cette praticienne";
  }

  const feedbackTextEl = document.getElementById("feedback-text");
  if (feedbackTextEl) {
    feedbackTextEl.textContent = member.firstname
      ? `Vous avez vécu une expérience avec ${member.firstname} ? Envoyez-nous votre commentaire par e-mail ou par message, il pourra être ajouté à son profil.`
      : "Vous avez vécu une expérience avec cette praticienne ? Envoyez-nous votre commentaire par e-mail ou par message, il pourra être ajouté à son profil.";
  }

  const feedbackEmailLinkEl = document.getElementById("feedback-email-link");
  if (feedbackEmailLinkEl) {
    const subject = member.firstname
      ? `Commentaire pour ${member.firstname}`
      : "Commentaire pour une praticienne";
    feedbackEmailLinkEl.href = `mailto:contact@letempsduntantra.be?subject=${encodeURIComponent(subject)}`;
  }

  const imgEl = document.getElementById("member-image");
  if (imgEl && member.image) {
    imgEl.src = imageUrl(member.image, 800);
    imgEl.alt = member.firstname || "Masseuse";
    imgEl.classList.add("zoomable-image");
  }

  const statMap = {
    "stat-age": member.age ? `${member.age} ans` : "—",
    "stat-taille": member.Taille ? `${member.Taille} cm` : "—",
    "stat-poids": member.poids ? `${member.poids} kg` : "—",
    "stat-bonnet": member.bonnet || "—",
    "stat-cheveux": member.cheveux || "—",
    "stat-yeux": member.yeux || "—",
    "stat-nationalite": member.nationalite || "—",
    "stat-origine": member.origine || "—",
  };

  Object.entries(statMap).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) {
      const valueEl = el.querySelector(".stat-card__value");
      if (valueEl) valueEl.textContent = value;
    }
  });

  const galleryEl = document.getElementById("gallery");
  if (galleryEl) {
    if (member.gallery && member.gallery.length) {
      galleryEl.innerHTML = "";
      const imgs = member.gallery.map((url) => {
        const img = document.createElement("img");
        img.src = imageUrl(url, 600);
        img.alt = `${member.firstname || "Photo"} — galerie`;
        img.loading = "lazy";
        img.classList.add("zoomable-image");
        gsap.set(img, { opacity: 0, y: 16 });
        return img;
      });

      imgs.forEach((img) => galleryEl.appendChild(img));

      ScrollTrigger.create({
        trigger: galleryEl,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(imgs, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.07,
            ease: "power2.out",
          });
        },
      });
    } else {
      galleryEl.innerHTML = '<p class="empty-state">Galerie à venir...</p>';
    }
  }

  setupImageLightbox();

  const commentsList = document.getElementById("comments-list");
  const commentsSection = document.getElementById("comments-section");

  if (commentsList) {
    if (member.commentaires && member.commentaires.length) {
      commentsList.innerHTML = "";

      member.commentaires.forEach((comment, i) => {
        const li = document.createElement("li");
        li.className = "comment-item anim-fade-up";

        const date = comment._createdAt
          ? new Date(comment._createdAt).toLocaleDateString("fr-BE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "";

        li.innerHTML = `
          <div class="comment-item__header">
            <span class="comment-item__author">${escapeHtml(comment.author || "Anonyme")}</span>
            ${date ? `<span class="comment-item__date">${date}</span>` : ""}
          </div>
          <p class="comment-item__text">${escapeHtml(comment.text || "")}</p>
        `;

        gsap.set(li, { opacity: 0, y: 20 });
        commentsList.appendChild(li);
      });

      ScrollTrigger.create({
        trigger: commentsList,
        start: "top 86%",
        once: true,
        onEnter: () => {
          gsap.to(commentsList.querySelectorAll(".comment-item"), {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
          });
        },
      });
    } else {
      if (commentsSection) commentsSection.style.display = "none";
    }
  }

  const memberInfo = document.querySelector(".member-hero__info");
  if (memberInfo) {
    const children = Array.from(memberInfo.children);
    gsap.set(children, { opacity: 0, y: 24 });
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.2,
    });
  }

  const memberImgWrap = document.querySelector(".member-hero__image-wrap");
  if (memberImgWrap) {
    gsap.from(memberImgWrap, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.1,
    });
  }

  const statsGrid = document.querySelector(".stats-grid");
  if (statsGrid) {
    const statCards = statsGrid.querySelectorAll(".stat-card");
    gsap.set(statCards, { opacity: 0, y: 16 });
    ScrollTrigger.create({
      trigger: statsGrid,
      start: "top 86%",
      once: true,
      onEnter: () => {
        gsap.to(statCards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
        });
      },
    });
  }
})();

function setupImageLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("image-lightbox-img");
  const closeBtn = document.getElementById("image-lightbox-close");

  if (!lightbox || !lightboxImg || !closeBtn) return;

  const openLightbox = (img) => {
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "Agrandissement photo";
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-lightbox-open");
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    lightboxImg.alt = "";
    document.body.classList.remove("is-lightbox-open");
  };

  document.querySelectorAll(".zoomable-image").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img));
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

function showError(message) {
  const main = document.querySelector("main") || document.body;
  const existing = document.querySelector(".member-hero");
  const target = existing || main;

  const div = document.createElement("div");
  div.style.cssText = `
    text-align: center;
    padding: 120px 24px;
    font-family: 'the-seasons', serif;
    color: rgba(251,251,251,0.45);
    font-size: 1rem;
    letter-spacing: 0.1em;
  `;
  div.textContent = message;

  if (existing) {
    existing.after(div);
  } else {
    main.prepend(div);
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
