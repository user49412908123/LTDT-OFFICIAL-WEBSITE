---
name: LTDT Site Web Officiel — Structure complète
description: Architecture complète du site "Le Temps d'un Tantra" — fichiers, design system, Sanity config
type: project
---

Site statique HTML/CSS/JS entièrement construit. Base path: `SITE/`

**Why:** Site vitrine haut de gamme pour salon de massage tantrique à Charleroi. Confidentialité et discrétion sont des valeurs centrales du client.

**How to apply:** Respecter strictement le design system (couleurs, polices, CTA) et le ton chaleureux/luxueux à chaque modification.

## Fichiers produits (tous complets)
- `css/main.css` — 1832 lignes, design system complet
- `js/main.js` — Navbar, hero GSAP, ScrollTrigger, carousel reviews, FAQ accordion
- `js/equipe.js` — Fetch Sanity members, carousel infini
- `js/membre-detail.js` — Fetch membre par slug, galerie, commentaires
- `js/sanity.js` — NE PAS MODIFIER (contient sanityFetch + imageUrl)
- `index.html` — Hero, carousel reviews, sections A+B, avantages, FAQ
- `equipe.html` — Intro + carousel dynamique Sanity
- `membre-detail.html` — Profil masseuse avec stats, galerie, commentaires
- `services.html` — Tarifs solo + couple + bienfaits + highlights
- `salon.html` — Editorial: anonymat, intimité, parking
- `charte.html` — 4 sections éthique (01–04)
- `contact.html` — Tel + email + horaires, pas de formulaire

## Sanity
- Project ID: `vl89okmp`
- Dataset: `production`
- Type `member`: firstname, slug, mainImage, age, Taille, poids, bonnet, cheveux, yeux, nationalite, origine, gallery[]
- Type `comment`: author, text, _createdAt, belongsTo (ref → member)

## Design System
- Bg: `#141414` | Text: `#FBFBFB` | Gold: `#FBB646`
- Heading: `'the-seasons', serif` (Adobe Typekit: `kog5izj`)
- Body: `'Neue Montreal', sans-serif` (woff2 dans `assets/`)
- GSAP local: `js/gsap.min.js` + ScrollTrigger CDN 3.12.5

## Assets (dans `assets/`)
- Fonts Neue Montreal: Regular, Medium, Bold, Light + Italic variants
- `hero-image-accueil.svg`, `2-COL-IMAGE-LEFT-ACCUEIL.svg`, `2-COL-IMAGE-RIGHT-ACCUEIL.svg`
- `LOGO-NAVBAR-GAUCHE-JAUNE.svg`, `LOGO-FOOTER-BLANC.svg`, `LOGO-ICON.svg`
