# OGen Family Office — Visual Elevation

Date: 2026-07-11
Status: Approved direction, building

## Goal

Elevate the existing site from a competent dark theme to a high-end, cinematic
"family office" experience. The foundation (design tokens, motion components,
bilingual RTL) is solid — this is an elevation, not a rebuild.

Driven by the brand name **עוגן / "anchor"**: stability, depth, calm gold-lit
water. Concept: **"Deep calm, held steady."**

## Key decisions

- **Brand name:** Use **OGen Family Office** (from the logo), pending user
  confirmation. Current site says "Ogen Capital".
- **Palette:** Enrich the greens to match the logo's true emerald (current bg
  `#05100c` is too close to black). Keep antique gold. **Add a warm
  ivory/cream light family** for new light sections.
- **Light/dark rhythm:** Alternate cinematic dark sections with airy light
  ones so the site breathes and isn't uniformly dark:
  - Dark: hero, scroll-scrub showcase, closing CTA
  - Light (ivory ground, deep-green text, gold accents): principles,
    services, approach, testimonial
- **Ambition:** Bold — new hero + a cinematic scroll-scrub video centerpiece.
- **Assets (hybrid):** User generates 3 images + 1 video with Nano Banana /
  Gemini + Veo 3.1; we build all WebGL, motion, typography, and the
  scroll-scrub engine. Site renders with placeholders until assets arrive.

## Palette (from logo.jpg)

| Token | Now | New | Use |
|---|---|---|---|
| ink | `#05100c` | `#06180f` | darkest ground |
| forest | — | `#0e3a26` | true emerald (logo) |
| ink-2 / ink-3 | dark greens | enriched greens | elevated dark surfaces |
| gold | `#c9a45c` | keep | accent / light |
| **ivory** | — | `#f5f0e4` | **light section ground** |
| **parchment** | — | `#ece4d2` | light section elevated |
| green-ink | — | `#0c2b1c` | text on light ground |

## Structure (homepage, top → bottom)

1. **Hero** (dark) — AI hero image + refined WebGL depth layer; mask-reveal
   headline with one gilded word; a gold "anchor line" that begins here and
   draws down the page on scroll.
2. **Trust ticker** (dark, keep, refine)
3. **Principles** (LIGHT) — three columns on ivory, deep-green text.
4. **Scroll-scrub showcase** (dark) — pinned section; the Veo video scrubs
   frame-by-frame with scroll; principle/phase text fades in over it.
5. **Services** (LIGHT) — editorial list beside the light editorial image.
6. **Approach** (LIGHT) — editorial column + gilded pull-quote.
7. **Testimonial** (LIGHT)
8. **Closing CTA** (dark, cinematic)

## Type + motion

- Keep **Frank Ruhl Libre** (display) — top-tier Hebrew serif — but push scale
  and contrast; refine **Heebo** body rhythm/tracking.
- Motion system: mask-reveal headings, scroll-linked anchor-line spine,
  magnetic CTAs, film grain + vignette on dark sections, load choreography.
  All gated behind `prefers-reduced-motion`.

## Asset prompts

### Image 1 — Hero (dark) · 16:9 + 9:16
Cinematic ultra-detailed macro photograph of a polished antique-gold ship's
anchor resting in perfectly still dark emerald-green water. Single dramatic
warm light upper-left, deep shadows, water like black glass with faint gold
reflections. Serene, opulent, medium-format, shallow DOF. Generous negative
space on the right for text. No text, no logo.

### Image 2 — Light editorial · 4:5
Bright airy minimalist luxury photograph: calm sea horizon at golden hour,
soft warm daylight, cream and pale-gold tones with a hint of deep green.
Tranquil, spacious, editorial, lots of soft negative space. No text, no logo.

### Image 3 — Detail texture · 1:1
Extreme macro of a single golden thread/rope coiling on a dark emerald
surface, warm rim light on the gold fibers, deep shadow, abstract, symbolizing
an anchor line. Luxurious, tactile, cinematic. No text.

### Video — Scroll-scrub centerpiece (Veo 3.1) · 16:9 + 9:16
Slow cinematic ~8s seamless sequence: molten liquid gold slowly pours and
forms into the silhouette of a ship's anchor on a dark emerald background,
gentle warm light, glossy reflections, smooth continuous motion, no shake.
Ends on the fully-formed glowing gold anchor. No text, no logo.

## Out of scope (for now)

- Inner pages beyond homepage (about/services/results/contact/faq/trust) —
  can follow in a second pass once the homepage language is locked.
- Real client data / testimonials copy (client to provide).
