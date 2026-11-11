# Parcours Hommes — Design System

**Parcours Hommes** ("Men's Track") is a men's health sub-brand from **Émilie Naturelle**, a French-Canadian natural-health company. Where Émilie Naturelle's core brand speaks to a general/female-leaning wellness audience, Parcours Hommes is a dedicated program for men: at-home hormone and biomarker testing, a virtual consultation, and a personalized action plan. The tagline across every reference asset is **"Teste. Comprends. Transforme."** ("Test. Understand. Transform.") — the three-step structure that shapes every funnel and page in this system.

Topics the brand covers (seen across reference lockups): testosterone/hormones, cortisol, nervous system, circadian rhythm/sleep, energy — i.e. the biomarker panel a Parcours Hommes test measures.

**Sources provided for this system:** five brand reference images (title-card lockups: "MASCULIN ANCRÉ", "CONSULTATION VIRTUELLE / TESTS À DOMICILE / PLAN DE MATCH COMPLET", "ÉMILIE NATURELLE — PARCOURS HOMMES — Teste, Comprends, Transforme" ×2, "SYSTÈME NERVEUX / CYCLE CIRCADIEN / HORMONES / ÉNERGIE"), copied into `references/`. No codebase, Figma file, or existing component library was attached — this is a **from-scratch system** built to the brand direction described below and confirmed with the user. No product copy, live site, or app was available to mine directly; all UI kit copy here is original, written in the brand's confirmed tone, and should be reviewed against Émilie Naturelle's actual approved copy before shipping.

**Palette note:** per explicit direction, this system's colors are **not** carried over from Émilie Naturelle's core brand — they're a new, intentionally more masculine palette (see Visual Foundations), while reusing the ink-black/bone-paper duo and display typography visible in the reference lockups.

## Index

- `styles.css` — root stylesheet, imports every token file below.
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css` — design tokens.
- `base.css` — resets, grain-texture utility, focus states.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Badge, Tag, Toast, ProgressBar.
- `components/data/` — Card, StatCard, BiomarkerRow.
- `components/navigation/` — Tabs.
- `ui_kits/landing/` — three landing-page directions: `A-bold.html`, `B-editorial.html`, `C-data.html`.
- `ui_kits/funnel/` — intake quiz + checkout (`index.html`).
- `ui_kits/dashboard/` — results dashboard (`index.html`).
- `references/` — the five source brand images.
- `SKILL.md` — Claude Code-compatible skill wrapper for this system.

## Components

| Group | Components |
|---|---|
| Forms | Button, IconButton, Input, Select, Checkbox, Radio, Switch |
| Feedback | Badge, Tag, Toast, ProgressBar |
| Data | Card, StatCard, BiomarkerRow |
| Navigation | Tabs |

**Intentional additions:** none of these map to a pre-existing library (there was no component source to enumerate against) — this is the standard primitive set sized to the three products below, per the "no source defines components" path.

## Products / UI kits

1. **Landing / marketing page** — the acquisition page for the program. Three visual directions to compare (see Visual Foundations for what differs):
   - **A — Bold/Grain** (`ui_kits/landing/A-bold.html`): centered hero, heaviest ember accent use, full-page grain, most confrontational copy.
   - **B — Editorial/Quiet** (`ui_kits/landing/B-editorial.html`): asymmetric hero, generous whitespace, a light paper-toned section break, forest-green accent, softer tone.
   - **C — Data-forward** (`ui_kits/landing/C-data.html`): dashboard mockup embedded in the hero, mono stat callouts, product-led rather than manifesto-led.
2. **Consultation / test funnel** (`ui_kits/funnel/index.html`) — a 3-question intake quiz (single-select cards) followed by a one-page checkout, using ProgressBar, Input, Checkbox, Button.
3. **Results / biomarker dashboard** (`ui_kits/dashboard/index.html`) — sidebar + tabs + StatCard grid + BiomarkerRow detail table + action-plan callout.

## Content fundamentals

- **Address:** informal **tu**, always — "ton corps", "ta réalité", "commence ton bilan". Never vous.
- **Tense/mood:** imperative and declarative, short sentences. The brand's own tagline is three bare imperatives: *"Teste. Comprends. Transforme."*
- **Tone:** blunt, confident, no-nonsense — "locker-room-adjacent but clean." No hedging, no soft qualifiers ("peut-être", "on pense que"). States things as fact: *"Arrête de deviner. Commence à savoir."*
- **Casing:** display headlines are set in full uppercase (matches the Anton display face); body copy is sentence case, never title case.
- **Punctuation as rhythm:** the source lockups end short phrases with hard periods for staccato pacing ("Teste. Comprends. Transforme.") rather than commas or dashes.
- **Vocabulary:** clinical/data-forward when talking about the product (biomarqueurs, cortisol, testostérone, plan d'action), plain and physical when talking about the reader (dormir, énergie, entraînement) — avoid vague wellness-speak ("équilibre", "harmonie").
- **Emoji:** none. The reference lockups and this direction use type and color for emphasis, never emoji or decorative glyphs.
- **Vibe:** a coach/trainer giving you a plan, not a spa giving you a suggestion.

## Visual foundations

- **Color:** an intentionally new, masculine palette — **not** inherited from Émilie Naturelle's core brand palette (explicit brand direction). Base duo is **ink-black** (`--ink-950` `#08080a` and steps up to `--ink-600`) against **bone/cream paper** (`--bone-50`–`--bone-300`), matching the black-background/cream-type lockups supplied. Primary accent is **ember** — a rust/burnt-orange (`--ember-500` `#c4451c`) used for CTAs and energy moments. Secondary accent is a **deep forest green** (`--forest-500` `#34503d`) for calm, secondary, and positive-status contexts. Status colors (positive/watch/alert) reuse forest/an amber/ember-adjacent rust so the dashboard never needs an unrelated red/green traffic-light palette.
- **Type:** **Anton** (condensed, heavy, all-caps) for every display/headline moment — this is the exact character of the brand reference lockups. **Archivo** (sturdy grotesk) for all body copy and UI labels — chosen because it holds its own next to Anton without competing, and has the weight range (400–800) the system needs. **Space Mono** for anything numeric/clinical: biomarker values, prices, data tables — gives the "measured, not marketed" feeling core to the product.
- **Spacing:** 4px base unit, scale 4/8/12/16/24/32/48/64/80/96/128. Sections breathe generously (`--space-24`/`--space-32` between major blocks) — the brand is blunt in copy but not cramped in layout.
- **Backgrounds:** flat ink-black is the default canvas. No gradients anywhere in the system — the brand reference is emphatically flat color blocks. A single light "paper" surface (`--surface-paper`, bone-100) is used sparingly as a section break (see Direction B), never as the primary canvas. No photography was supplied; landing pages currently ship without imagery — flag this to the user (see Caveats).
- **Grain/texture:** one of the five reference lockups shows visible film-grain/paper texture; the others are flat. Direction is: **grain only on hero / section-break moments**, not applied system-wide. Implemented as a pure-CSS SVG turbulence overlay (`.grain` utility class in `base.css`) at low opacity (`--grain-opacity: 0.05`) with `mix-blend-mode: overlay` — no bitmap noise asset.
- **Animation:** short and purposeful only — `--duration-fast` (120ms) for hover/press feedback, `--duration-base`/`--duration-slow` for progress bars and toggles. No bounce/spring easing (`--ease-standard` is a standard ease curve) — matches the blunt, no-nonsense tone. No decorative looping animation.
- **Hover states:** primary buttons darken by one step and lift 1px; secondary/ghost buttons gain a faint bone-tinted wash (`rgba(242,236,220,0.06)`); Tags/Cards use the same faint wash. No color-inversion hovers.
- **Press states:** handled via the same transform/background transition, no separate scale-down — kept subtle and fast given the blunt visual language (a springy press would read as playful, which the brand isn't).
- **Borders:** hairline (1px) at low-opacity bone (`--border-subtle`/`--border-default`/`--border-strong`) on dark surfaces; a dark hairline (`--border-on-paper`) on the light paper surface. No colored borders except the ember focus/active state.
- **Shadows:** minimal by design — flat color blocks read as more masculine/confident than soft depth. `--shadow-sm/md/lg` exist for toasts and modals only; cards and buttons on the dark canvas rely on border + fill contrast, not shadow.
- **Corner radii:** deliberately sharp brand — `--radius-none`/`--radius-sm` (3px) is the default for buttons, inputs, and cards; `--radius-md` (6px) for larger containers; `--radius-pill` is reserved for exactly two controls (Switch, Tag) so the pill shape stays a meaningful signal rather than a default.
- **Cards:** flat fill (`--surface-canvas-raised` or `--surface-card`), 1px hairline border, `--radius-md`, no shadow. On the paper surface, cards use `--border-on-paper` instead.
- **Transparency/blur:** transparency is used only for the overlay scrim (`--surface-overlay`) and status-badge backgrounds (tinted at ~16% opacity); no backdrop-blur/glassmorphism anywhere — it reads as too soft for this brand.
- **Imagery:** no photography or illustration was supplied with this brief. Do not invent lifestyle photography — ask the user for real photo assets before adding imagery to a shipped page; in the meantime, landing pages lean on type, color blocks, and data mockups instead of images.
- **Layout rules:** header nav is a simple non-sticky row in all three landing directions (kept simple since no interaction spec was given); max content width `1280px` (`--container-max`) for the bold/data directions, a narrower `1080px` editorial measure for Direction B.

## Iconography

No icon set, icon font, or SVG sprite was supplied with this brief. The UI kits currently use **zero decorative icons** — status is communicated via color + Badge/dot instead of glyphs, and the one directional icon in the system (a chevron in the forms card) is a hand-drawn inline SVG limited to that single use. **If/when this system needs a broader icon set**, the recommended substitute is **Lucide** (CDN: `https://unpkg.com/lucide@latest`) — a stroke-based, single-weight icon set that matches this system's flat, no-gradient, no-fill visual language; flag this as a substitution, not a confirmed brand choice, until the user confirms or supplies their own set. Emoji and unicode-glyph icons are not used anywhere in this system (see Content Fundamentals).

## Fonts — placeholder flag

**Anton, Archivo, and Space Mono are Google Fonts placeholders**, not the brand's real typefaces — no font files were supplied with this brief. Anton was chosen as the closest free match to the condensed, heavy, all-caps display face visible in every reference lockup. **Please supply the real Parcours Hommes / Émilie Naturelle font files (or confirm these Google Fonts substitutes are acceptable)** so `tokens/typography.css` can be updated with real `@font-face` declarations.

## Logo — none supplied

No logo or brand mark was provided for Parcours Hommes. Per policy, none was drawn or reconstructed. Every place a mark would go instead sets the name in the Anton display face (see `guidelines/brand-wordmark.card.html`). **Please attach the real logo/wordmark files** if one exists.

## Caveats — please help iterate

- **No codebase, Figma, or existing site was attached** — this whole system (palette, type pairing, component set, all three landing directions, funnel, and dashboard) is an original construction from the five reference images plus your answers to the intake questions. Nothing here should be treated as "already approved" brand material.
- **Fonts are Google Fonts placeholders** (Anton / Archivo / Space Mono) — need real font files or confirmation to keep them.
- **No logo file** — wordmark is typeset only.
- **No photography/illustration supplied** — landing pages currently ship image-free by design; send real photos if you want a more editorial, photo-led direction.
- **Copy is original**, written to the confirmed tone — please review every line against what Émilie Naturelle would actually want said publicly (health/wellness claims especially) before shipping.

**Bold ask:** tell me which of the three landing directions (A/B/C) to push further — or mix elements from more than one — and send real font files, a logo (if one exists), and any photography so I can replace the current type-and-color-only system with the real assets.
