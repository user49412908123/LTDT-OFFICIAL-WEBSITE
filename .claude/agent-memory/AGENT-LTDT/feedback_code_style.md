---
name: Style de code attendu — LTDT
description: Règles de style et d'approche pour les livraisons de code sur ce projet
type: feedback
---

Toujours livrer du code complet et production-ready, jamais de pseudo-code ou de placeholder "TODO".

**Why:** Le client confie la production complète. Les fichiers partiels créent de la confusion et nécessitent des allers-retours.

**How to apply:**
- Écrire chaque fichier de A à Z en une seule livraison
- Respecter le design system (couleurs, polices, CTA) sans exception
- Intégrer GSAP dans les composants (ScrollTrigger, stagger 0.08s, ease power2.out)
- Ton du copy : chaleureux, haut de gamme, discret — jamais vulgaire
- Mobile-first CSS, breakpoints 768px et 1024px
- Pas de framework JS externe sauf GSAP
- Animations sobres : opacity + translateY, pas de scale/rotation agressifs
