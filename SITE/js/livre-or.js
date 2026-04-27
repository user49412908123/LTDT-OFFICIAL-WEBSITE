(async function initGuestbookPage() {
  const guestbookEntries = document.getElementById("guestbook-entries");
  if (!guestbookEntries) return;

  guestbookEntries.innerHTML = '<p class="guestbook-empty">Chargement des commentaires...</p>';

  const QUERY = `*[_type == "guestbookComment" && coalesce(isApproved, true) == true] | order(coalesce(publishedAt, _createdAt) desc) {
    firstname,
    showFirstname,
    message,
    "date": coalesce(publishedAt, _createdAt)
  }`;

  let entries = [];
  try {
    entries = await sanityFetch(QUERY);
  } catch (error) {
    guestbookEntries.innerHTML =
      '<p class="guestbook-empty">Impossible de charger le livre d\'or pour le moment.</p>';
    return;
  }

  if (!entries || !entries.length) {
    guestbookEntries.innerHTML =
      '<p class="guestbook-empty">Aucun commentaire publié pour le moment.</p>';
    return;
  }

  guestbookEntries.innerHTML = "";

  entries.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "guestbook-item";

    const author = entry.showFirstname && entry.firstname ? entry.firstname : "Anonyme";
    const date = entry.date
      ? new Date(entry.date).toLocaleDateString("fr-BE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    article.innerHTML = `
      <div class="guestbook-item__header">
        <span class="guestbook-item__author">${escapeHtml(author)}</span>
        ${date ? `<span class="guestbook-item__date">${date}</span>` : ""}
      </div>
      <p class="guestbook-item__text">${escapeHtml(entry.message || "")}</p>
    `;

    if (typeof gsap !== "undefined") {
      gsap.set(article, { opacity: 0, y: 20 });
    }

    guestbookEntries.appendChild(article);
  });

  if (typeof ScrollTrigger !== "undefined" && typeof gsap !== "undefined") {
    ScrollTrigger.create({
      trigger: guestbookEntries,
      start: "top 86%",
      once: true,
      onEnter: () => {
        gsap.to(guestbookEntries.querySelectorAll(".guestbook-item"), {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
        });
      },
    });
  }
})();

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
