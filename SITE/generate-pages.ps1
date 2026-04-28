# Template HTML vanilla pour les pages de massage tantra
# Usage: Pour chaque ville, remplacer les placeholders

$cityData = @(
    @{ city = "Avesnes-sur-Helpe"; keyword = "massage tantra"; file = "massage-tantra-avesnes-sur-helpe.html" },
    @{ city = "Farciennes"; keyword = "centre massage tantrique"; file = "centre-massage-tantrique-farciennes.html" },
    @{ city = "Hautmont"; keyword = "massage tantra"; file = "massage-tantra-hautmont.html" },
    @{ city = "Gosselies"; keyword = "massage tantra"; file = "massage-tantra-gosselies.html" },
    @{ city = "Manage"; keyword = "massage tantra"; file = "massage-tantra-manage.html" },
    @{ city = "Maubeuge"; keyword = "massage tantra"; file = "massage-tantra-maubeuge.html" },
    @{ city = "Fourmies"; keyword = "massage tantra"; file = "massage-tantra-fourmies.html" },
    @{ city = "Mettet"; keyword = "massage tantra"; file = "massage-tantra-mettet.html" },
    @{ city = "Braine-le-Comte"; keyword = "massage tantra"; file = "massage-tantra-braine-le-comte.html" },
    @{ city = "Chimay"; keyword = "massage tantra"; file = "massage-tantra-chimay.html" },
    @{ city = "Jeumont"; keyword = "massage tantra"; file = "massage-tantra-jeumont.html" },
    @{ city = "Farciennes"; keyword = "massage tantra"; file = "massage-tantra-farciennes.html" },
    @{ city = "Aiseau-Presles"; keyword = "massage tantra"; file = "massage-tantra-aiseau-presles.html" },
    @{ city = "Mons"; keyword = "massage tantrique"; file = "massage-tantrique-mons.html" },
    @{ city = "Valenciennes"; keyword = "massage tantra"; file = "massage-tantra-valenciennes.html" },
    @{ city = "Nivelles"; keyword = "massage tantra"; file = "massage-tantra-nivelles.html" }
)

function Generate-HTML {
    param(
        [string]$City,
        [string]$Keyword,
        [string]$FilePath
    )
    
    $capitalizedKeyword = $Keyword.Substring(0,1).ToUpper() + $Keyword.Substring(1)
    $titleTag = "$capitalizedKeyword $City — Le Temps d'un Tantra"
    $h1Tag = "$capitalizedKeyword à $City — Le Temps d'un Tantra"
    $h2Section = "$Keyword à $City avec Le Temps d'un Tantra"
    $h2Highlights = "Le Temps d'un Tantra, référence $keyword près de $City"
    $h2Final = "Réserver un $keyword à $City"
    
    $html = @"
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>$titleTag</title>
    <meta name="description" content="$capitalizedKeyword à $City : expérience haut de gamme, accueil chaleureux et discrétion totale. Salon wellness discret à Mont-sur-Marchienne." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://letempsduntantra.be/$($FilePath.Split('\')[-1])" />
    <meta property="og:title" content="$titleTag" />
    <meta property="og:description" content="$capitalizedKeyword à $City : expérience haut de gamme, accueil chaleureux et discrétion totale." />
    <meta property="og:url" content="https://letempsduntantra.be/$($FilePath.Split('\')[-1])" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_BE" />
    <link rel="stylesheet" href="https://use.typekit.net/kog5izj.css" />
    <link rel="stylesheet" href="css/main.css" />
    <script src="js/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  </head>
  <body>
    <noscript>
      <main>
        <h1>$h1Tag</h1>
        <p>Découvrez le $keyword à $City. Salon wellness discret, professionnel et confidentiel.</p>
        <nav>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
          <a href="equipe.html">Equipe</a>
          <a href="salon.html">Salon</a>
        </nav>
      </main>
    </noscript>

    <header class="navbar" role="banner">
      <div class="navbar__inner">
        <div class="navbar__logo">
          <a href="index.html" aria-label="Accueil — Le Temps d'un Tantra">
            <img src="assets/LOGO-NAVBAR-GAUCHE-JAUNE.svg" alt="Le Temps d'un Tantra" width="160" height="34" />
          </a>
        </div>
        <nav class="navbar__nav" aria-label="Navigation principale">
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="equipe.html">Equipe</a></li>
            <li><a href="services.html">Services &amp; Tarifs</a></li>
            <li><a href="salon.html">Salon</a></li>
            <li><a href="livre-or.html">Livre d'or</a></li>
            <li><a href="charte.html">Charte</a></li>
          </ul>
        </nav>
        <div class="navbar__right">
          <a href="contact.html" class="cta-4">Contact</a>
        </div>
        <button class="navbar__hamburger" aria-label="Ouvrir le menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div class="nav-drawer" role="dialog" aria-label="Menu navigation">
      <button class="nav-drawer__close" aria-label="Fermer le menu">&#x2715;</button>
      <nav class="nav-drawer__links" aria-label="Navigation mobile">
        <a href="index.html">Accueil</a>
        <a href="equipe.html">Equipe</a>
        <a href="services.html">Services &amp; Tarifs</a>
        <a href="salon.html">Salon</a>
        <a href="livre-or.html">Livre d'or</a>
        <a href="charte.html">Charte</a>
      </nav>
      <div class="nav-drawer__cta">
        <a href="contact.html" class="cta-3">Prendre rendez-vous</a>
      </div>
    </div>

    <div class="nav-overlay" aria-hidden="true"></div>

    <main>
      <div class="hero-placeholder" aria-label="$keyword à $City">
        <div class="hero-placeholder__content">
          <span class="section-label">Présence locale</span>
          <h1>$h1Tag</h1>
          <p>Le salon se situe à proximité du R3, sortie 5 à Mont-sur-Marchienne. Ici, tout commence par vous : écoute, respect et discrétion pour un moment de lâcher-prise total. Rendez-vous exclusifs, parking privatif, confidentialité garantie. Depuis $City, profitez d'un accueil chaleureux, d'un cadre haut de gamme et d'une discrétion absolue.</p>
          <span class="hero-gold-line" aria-hidden="true"></span>
        </div>
      </div>

      <section class="services-section" aria-labelledby="city-heading">
        <div class="services-section__inner">
          <header class="services-section__header">
            <span class="section-label">Approche confidentielle</span>
            <h2 id="city-heading">$h2Section</h2>
            <p class="services-section__description">Ici, tout commence par vous : écoute, respect et discrétion pour un moment de lâcher-prise total à proximité de $City. Massage sensuel, expérience couple, rituels énergétiques : chaque séance est orchestrée pour votre détente profonde.</p>
          </header>
          <div class="cta-group" style="justify-content: flex-start">
            <a href="services.html" class="cta-3">Découvrir les services</a>
            <a href="salon.html" class="cta-4">Visiter le salon</a>
          </div>
        </div>
      </section>

      <section class="highlights-section" aria-label="Référence locale">
        <div class="highlights-section__inner">
          <header class="highlights-section__header">
            <span class="section-label">Signature maison</span>
            <h2>$h2Highlights</h2>
          </header>
          <div class="highlights-grid">
            <article class="highlight-card seo-anim">
              <div class="highlight-card__icon" aria-hidden="true">✦</div>
              <div>
                <h3 class="highlight-card__title">$capitalizedKeyword à $City : sur-mesure et discret</h3>
                <p class="highlight-card__text">Chaque rendez-vous est préparé sur-mesure pour préserver votre confort et votre discrétion, dans un cadre premium où l'intimité s'épanouit sans crainte.</p>
              </div>
            </article>
            <article class="highlight-card seo-anim">
              <div class="highlight-card__icon" aria-hidden="true">◈</div>
              <div>
                <h3 class="highlight-card__title">Accueil, confidentialité et expertise</h3>
                <p class="highlight-card__text">Accueil soigné, confidentialité totale et équipe expérimentée : une expérience raffinée, du premier échange jusqu'à votre départ.</p>
              </div>
            </article>
          </div>
          <div class="cta-group" style="justify-content: flex-start; margin-top: 40px">
            <a href="equipe.html" class="cta-3">Découvrir l'équipe</a>
            <a href="contact.html" class="cta-4">Prendre contact</a>
          </div>
        </div>
      </section>

      <section class="section text-center">
        <div class="container">
          <h2>$h2Final</h2>
          <p style="max-width: 480px; margin: 16px auto 32px; color: rgba(251, 251, 251, 0.62)">Un appel ou un message suffit pour organiser votre venue. Nous vous répondons avec tact, clarté et discrétion.</p>
          <div class="cta-group" style="justify-content: center">
            <a href="contact.html" class="cta-3">Réserver maintenant</a>
            <a href="services.html" class="cta-4">Voir les prestations</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer" role="contentinfo">
      <div class="footer__inner">
        <div class="footer__logo">
          <a href="index.html" aria-label="Accueil — Le Temps d'un Tantra">
            <img src="assets/LOGO-FOOTER-BLANC.svg" alt="Le Temps d'un Tantra" width="160" height="40" />
          </a>
        </div>
        <nav class="footer__nav" aria-label="Navigation pied de page">
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="equipe.html">Equipe</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="salon.html">Salon</a></li>
            <li><a href="livre-or.html">Livre d'or</a></li>
            <li><a href="charte.html">Charte</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="footer__contact">
          <span class="footer__contact-hours">Été&nbsp;: 10H–20H &nbsp;|&nbsp; Hiver&nbsp;: 10H–19H</span>
          <span class="footer__contact-item"><a href="mailto:contact@letempsduntantra.be">contact@letempsduntantra.be</a></span>
          <span class="footer__contact-item"><a href="tel:+32470100716">0470&nbsp;10&nbsp;07&nbsp;16</a></span>
        </div>
      </div>
      <div class="container">
        <div class="footer__bottom">
          <p>&copy; 2026 Le Temps d'un Tantra — Tous droits réservés</p>
        </div>
      </div>
    </footer>

    <script src="js/main.js"></script>
    <script>
      if (window.gsap) {
        if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".seo-anim").forEach((el, i) => {
          gsap.fromTo(el, { y: 24, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.75, delay: i * 0.04, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" }
          });
        });
      }
    </script>
  </body>
</html>
"@
    
    return $html
}

# Générer les pages
foreach ($city in $cityData) {
    $html = Generate-HTML -City $city.city -Keyword $city.keyword -FilePath $city.file
    $filePath = Join-Path (Get-Location) $city.file
    
    # Remplacer le fichier existant
    if (Test-Path $filePath) {
        Remove-Item $filePath
    }
    
    $html | Out-File -FilePath $filePath -Encoding UTF8 -Force
    Write-Host "✓ Généré: $($city.file)"
}

Write-Host "`n✅ Toutes les pages ont été générées!"
