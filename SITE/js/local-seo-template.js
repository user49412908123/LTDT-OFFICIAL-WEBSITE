(() => {
  const body = document.body;
  if (!body) return;
  const city = body.dataset.city || "Charleroi";
  const keyword = body.dataset.keyword || "massage tantra";
  const keywordCap = keyword.charAt(0).toUpperCase() + keyword.slice(1);
  const pageLabel = `${keywordCap} ${city}`;

  body.innerHTML = `
    <header class="navbar" role="banner">
      <div class="navbar__inner">
        <div class="navbar__logo"><a href="index.html" aria-label="Accueil — Le Temps d'un Tantra"><img src="assets/LOGO-NAVBAR-GAUCHE-JAUNE.svg" alt="Le Temps d'un Tantra" width="160" height="34" /></a></div>
        <nav class="navbar__nav" aria-label="Navigation principale"><ul><li><a href="index.html">Accueil</a></li><li><a href="equipe.html">Equipe</a></li><li><a href="services.html">Services &amp; Tarifs</a></li><li><a href="salon.html">Salon</a></li><li><a href="livre-or.html">Livre d'or</a></li><li><a href="charte.html">Charte</a></li></ul></nav>
        <div class="navbar__right"><a href="contact.html" class="cta-4">Contact</a></div>
        <button class="navbar__hamburger" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>
    <div class="nav-drawer" role="dialog" aria-label="Menu navigation"><button class="nav-drawer__close" aria-label="Fermer le menu">&#x2715;</button><nav class="nav-drawer__links" aria-label="Navigation mobile"><a href="index.html">Accueil</a><a href="equipe.html">Equipe</a><a href="services.html">Services &amp; Tarifs</a><a href="salon.html">Salon</a><a href="livre-or.html">Livre d'or</a><a href="charte.html">Charte</a></nav><div class="nav-drawer__cta"><a href="contact.html" class="cta-3">Prendre rendez-vous</a></div></div>
    <div class="nav-overlay" aria-hidden="true"></div>
    <main>
      <div class="hero-placeholder" aria-label="${pageLabel}">
        <div class="hero-placeholder__content seo-anim">
          <span class="section-label">Présence locale</span>
          <h1><span class="title-highlight">${keywordCap}</span> à ${city} avec Le Temps d'un Tantra</h1>
          <p>Depuis ${city}, profitez d'un accueil chaleureux, d'un cadre haut de gamme et d'une discrétion absolue.</p>
          <span class="hero-gold-line" aria-hidden="true"></span>
        </div>
      </div>
      <section class="services-section" aria-label="Expérience locale">
        <div class="services-section__inner">
          <header class="services-section__header">
            <span class="section-label">Approche confidentielle</span>
            <h2 class="seo-anim"><span class="title-highlight">${keywordCap}</span> à ${city} avec Le Temps d'un Tantra</h2>
            <p class="services-section__description seo-anim">Ici, tout commence par vous : écoute, respect et discrétion pour un moment de lâcher-prise total à proximité de ${city}.</p>
          </header>
          <div class="cta-group" style="gap:12px;flex-wrap:wrap">
            <a href="services.html" class="cta-3">Découvrir les services</a>
            <a href="salon.html" class="cta-4">Visiter le salon</a>
          </div>
        </div>
      </section>

      <section class="highlights-section" aria-label="Référence locale">
        <div class="highlights-section__inner">
          <header class="highlights-section__header">
            <span class="section-label">Signature maison</span>
            <h2 class="seo-anim">Le Temps d'un Tantra, référence <span class="title-highlight">${keyword}</span> près de ${city}</h2>
          </header>
          <div class="highlights-grid">
            <article class="highlight-card">
              <div class="highlight-card__icon" aria-hidden="true">✦</div>
              <div>
                <h3 class="highlight-card__title seo-anim">Le Temps d'un Tantra pour votre ${keyword} à ${city}</h3>
                <p class="highlight-card__text">Chaque rendez-vous est préparé sur-mesure pour préserver votre confort et votre discrétion, dans un cadre premium.</p>
              </div>
            </article>
            <article class="highlight-card">
              <div class="highlight-card__icon" aria-hidden="true">◈</div>
              <div>
                <p class="highlight-card__text">Accueil soigné, confidentialité totale et équipe expérimentée : une expérience raffinée, du premier échange jusqu'à votre départ.</p>
              </div>
            </article>
          </div>
          <div class="cta-group" style="margin-top:20px;gap:12px;flex-wrap:wrap">
            <a href="equipe.html" class="cta-3">Découvrir l'équipe</a>
            <a href="contact.html" class="cta-4">Prendre contact</a>
          </div>
        </div>
      </section>

      <section class="section text-center" aria-label="Réservation locale">
        <div class="container" style="max-width:860px">
          <h2 class="seo-anim">Réserver un ${keyword} à ${city} avec Le Temps d'un Tantra</h2>
          <p class="seo-anim" style="color:rgba(251,251,251,.62)">Un appel ou un message suffit pour organiser votre venue. Nous vous répondons avec tact, clarté et discrétion.</p>
          <div class="cta-group" style="justify-content:center;gap:12px;flex-wrap:wrap">
            <a href="contact.html" class="cta-3">Réserver maintenant</a>
            <a href="services.html" class="cta-4">Voir les prestations</a>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer" role="contentinfo">
      <div class="footer__inner">
        <div class="footer__logo"><a href="index.html" aria-label="Accueil — Le Temps d'un Tantra"><img src="assets/LOGO-FOOTER-BLANC.svg" alt="Le Temps d'un Tantra" width="160" height="40" /></a></div>
        <nav class="footer__nav" aria-label="Navigation pied de page"><ul><li><a href="index.html">Accueil</a></li><li><a href="equipe.html">Equipe</a></li><li><a href="services.html">Services</a></li><li><a href="salon.html">Salon</a></li><li><a href="livre-or.html">Livre d'or</a></li><li><a href="charte.html">Charte</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
        <div class="footer__contact"><span class="footer__contact-hours">Été&nbsp;: 10H–20H &nbsp;|&nbsp; Hiver&nbsp;: 10H–19H</span><span class="footer__contact-item"><a href="mailto:contact@letempsduntantra.be">contact@letempsduntantra.be</a></span><span class="footer__contact-item"><a href="tel:+32470100716">0470&nbsp;10&nbsp;07&nbsp;16</a></span></div>
      </div>
      <div class="container"><div class="footer__bottom"><p>&copy; 2026 Le Temps d'un Tantra — Tous droits réservés</p></div></div>
    </footer>
  `;

  const mainScript = document.createElement("script");
  mainScript.src = "js/main.js";
  document.body.appendChild(mainScript);

  if (window.gsap) {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".seo-anim").forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          delay: index * 0.04,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        },
      );
    });
  }
})();
