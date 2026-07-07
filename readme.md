# Symphony — Design System

An engineering-led, AI-native technology company. This design system recreates the
**symphony.is** brand: a confident, dark, spectrum-lit identity for a firm that
builds AI-first products for enterprise and private-equity clients.

> **Source:** built from screenshots of symphony.is plus the official
> **Poppins** font files and the **wordmark logo** supplied by the client, and a
> typography blueprint. Fonts and logo are now exact; colors/spacing are still
> measured from screenshots. See CAVEATS at the bottom.

Brand line: **Engineering-led. AI-native. Impact-driven.**

---

## CONTENT FUNDAMENTALS

- **Voice:** confident, plainspoken, outcome-oriented. Short declaratives, often
  three-beat: "Engineering-led. AI-native. Impact-driven." / "strategy, speed, and
  precision."
- **Person:** "We" / "Our" for the company; "you / your" for the client
  ("Modernize *your* data layer", "discuss *your* AI transformation goals").
- **Casing:** Sentence case everywhere — headings, nav, buttons ("Let's work
  together", "Read the case study"). No ALL-CAPS except tiny flags ("NEW") and
  monospace stat labels.
- **Numbers as proof:** metrics carry the argument — "800+ experts", "~50% faster",
  "~40-60% efficiency lift", "~$4-6M per year". Approximations use a tilde.
- **Headlines** are two- or three-word noun phrases with one emphasis word tinted
  periwinkle: "We are **Symphony**", "Global **footprint**", "Our people and
  **culture**".
- **No emoji.** Tone is enterprise-serious but human ("pair human creativity with AI").

---

## VISUAL FOUNDATIONS

- **Mode:** dark-first, always. Canvas is a blue-tinted near-black (`#08080F`;
  the footprint page goes to `#050509`). There is no light theme.
- **Signature motif — the aurora sweep:** a spectrum gradient arc that reads
  navy → electric blue → magenta/pink → a glowing orange rim, over black. It backs
  the hero and the "people & culture" panel. Captured as `--grad-aurora`.
- **Primary color:** periwinkle/indigo (`#6D5DF6`). Used for the emphasis word in
  headings, primary buttons (with a soft glow), links, tags, and map pins.
- **Type:** one brand typeface — **Poppins** (geometric sans) — for everything.
  Headlines SemiBold 600 / Bold 700 with tight `-0.02em` tracking; body/lists
  Regular 400 at line-height ≥ 1.6 (Poppins is wide); huge metric callouts
  ($4T, 40+, ~80%) Bold 700 / ExtraBold 800 at 72–96px; eyebrow labels SemiBold
  600, ALL CAPS, tiny, wide `0.08–0.12em` tracking. Monospace (Space Mono) is
  reserved only for compact stat chips.
- **Cards:** two treatments. (1) **Glass** — translucent white gradient fill,
  `1px` hairline border, heavy backdrop-blur, deep soft shadow — used floating over
  the aurora (Vision/Mission). (2) **Solid** — near-transparent white fill on the
  black canvas with a subtle hairline border — used for stat/outcome cards.
- **Corner radii:** soft and large — inputs/tiles `12px`, buttons `16px`, cards
  `24px`, big panels `32px`, pills fully round.
- **Borders:** almost always `1px` low-opacity white (`rgba(255,255,255,0.08–0.20)`),
  never hard black.
- **Shadows:** deep and diffuse on dark (`0 20px 50px rgba(0,0,0,.5)`), plus an
  inset top highlight on glass. Accent buttons add an indigo glow.
- **Transparency & blur:** central to the language — the nav is a blurred glass
  bar, nav items are glass pills, cards blur what's behind them.
- **Buttons:** primary = indigo gradient + glow + trailing arrow; secondary =
  glass; also ghost/outline. Press = slight scale-down (0.97).
- **Layout:** roomy, wide gutters (`clamp(20px,5vw,80px)`), max width ~1280px,
  two-column heading/body splits, generous vertical rhythm.
- **Imagery:** cool-to-vivid, saturated. Real photography (corporate/office) sits
  in rounded containers; abstract gradient renders elsewhere. Placeholders here use
  diagonal-stripe fills with a monospace caption.
- **Animation:** smooth ease-outs, fades and gentle reveals; no bounce. Map pins
  use a soft glow ring.

---

## ICONOGRAPHY

- The site uses **thin-to-medium line icons** (consistent ~2px stroke, rounded
  caps): a trend/arrow-up line, a lightning bolt, a dollar glyph, chevrons for
  dropdowns, and a right-arrow on CTAs. This matches the **Lucide / Feather**
  family. This system draws those inline as SVG in components (StatCard, Button,
  NavBar, AnnouncementBar); when you need more, pull from **Lucide**
  (https://lucide.dev) at 2px stroke to stay on-brand.
- **No emoji, no unicode-symbol icons.**
- **Logo / wordmark:** the official Symphony wordmark (lowercase "symphony" with
  the fine diagonal-stripe texture, brand purple `#6050A0`) is packaged at
  `assets/symphony-logo.png` and rendered by the `Wordmark` component. Partner
  logos (Nike, Meta, Apollo, Francisco Partners, EQT, GV) were not provided —
  those tiles still show text stand-ins; drop in official SVGs when available.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — entry point (imports only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `fonts.css` (self-hosted Poppins), `base.css`.
- `assets/` — `symphony-logo.png` + `fonts/` (Poppins TTFs, OFL license).
- `readme.md` — this file. `SKILL.md` — portable skill wrapper.

**Components** (`components/`, namespace `window.Symphony`)
- core/ — `Button`, `Badge`, `Tag`, `Card`
- forms/ — `Input`, `Textarea`
- display/ — `StatCard`, `SectionHeading`, `Eyebrow`
- navigation/ — `NavBar`, `Wordmark`
- feedback/ — `AnnouncementBar`

**Foundation cards** (`guidelines/`) — color, type, spacing, brand/gradient specimens.

**UI kit** (`ui_kits/website/`) — interactive Symphony marketing site
(`index.html`) + factored screens (`Hero`, `Culture`, `Contact`, `CaseStudy`).

---

## CAVEATS

- **Fonts are now exact** — self-hosted **Poppins** (OFL) is the single brand
  typeface; **Space Mono** (Google) is used only for compact stat chips.
- **Wordmark is the official logo image.** Partner logos are still text
  stand-ins — send the real SVGs and I'll wire them in.
- Colors and spacing are still eyeballed from screenshots; share brand tokens /
  a codebase / Figma and I'll make them pixel-exact.
