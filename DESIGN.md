---
name: Michi
description: Developer Roadmaps — structured learning paths for software engineering disciplines
colors:
  primary: "oklch(0.65 0.2 265)"
  primary-deep: "oklch(0.55 0.2 265)"
  primary-light: "oklch(0.95 0.05 265)"
  background: "oklch(0.99 0.002 260)"
  background-dark: "oklch(0.14 0.005 260)"
  foreground: "oklch(0.14 0.01 260)"
  foreground-dark: "oklch(0.95 0.005 260)"
  card: "oklch(1 0 0)"
  card-dark: "oklch(0.17 0.005 260)"
  muted: "oklch(0.95 0.005 260)"
  muted-dark: "oklch(0.22 0.005 260)"
  border: "oklch(0.91 0.005 260)"
  border-dark: "oklch(0.25 0.005 260)"
  accent-emerald: "oklch(0.7 0.17 160)"
  accent-amber: "oklch(0.75 0.15 80)"
  accent-rose: "oklch(0.65 0.2 20)"
typography:
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.01em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "oklch(1 0 0)"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "20px"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: Michi

## 1. Overview

**Creative North Star: "The Engineer's Notebook"**

Michi's visual system draws from the precision and clarity of well-organized technical documentation. Every element serves a purpose; decoration is absent by design. The system rejects the warm-neutral AI monoculture (cream backgrounds, soft shadows, rounded-everything) in favor of a cooler, more technical aesthetic: slightly blue-tinted neutrals, crisp borders, tight spacing, and typographic hierarchy that does the heavy lifting.

The palette is deliberately restrained — a single vivid indigo-blue primary against near-neutral grays, with functional accents (emerald for success, amber for warning, rose for error) used sparingly. Depth comes from border contrast and tonal shifts, not from box-shadows or glass effects.

**Key Characteristics:**
- Cool-tinted neutral palette (oklch hue 260 throughout)
- Single primary accent used on ≤15% of any screen
- Tight spacing and compact components
- Strong typographic hierarchy with Outfit for display, Geist for body
- Flat surfaces with border-based depth, minimal shadows
- Functional color: green/amber/red for status, not decoration

## 2. Colors

The palette is built on oklch with a consistent blue tint (hue 260) across all neutrals, avoiding the warm-cream default.

### Primary
- **Indigo-Blue** (oklch(0.65 0.2 265)): Primary actions, links, active states, progress indicators. Used on CTAs, selected filters, completed topic markers, and the navbar brand.
- **Indigo-Blue Deep** (oklch(0.55 0.2 265)): Hover state for primary elements. Darker variant for emphasis.
- **Indigo-Blue Light** (oklch(0.95 0.05 265)): Tinted background for primary-accented containers, badge backgrounds.

### Neutral
- **Background** (oklch(0.99 0.002 260)): Page background in light mode. Near-white with subtle blue tint.
- **Foreground** (oklch(0.14 0.01 260)): Primary text color. Near-black with blue tint.
- **Card** (oklch(1 0 0)): Card and surface backgrounds. Pure white for maximum contrast against tinted borders.
- **Muted** (oklch(0.95 0.005 260)): Secondary backgrounds, disabled states, skeleton loaders.
- **Border** (oklch(0.91 0.005 260)): All borders, dividers, and structural lines.

### Dark Mode
- **Background Dark** (oklch(0.14 0.005 260)): Page background in dark mode.
- **Foreground Dark** (oklch(0.95 0.005 260)): Primary text in dark mode.
- **Card Dark** (oklch(0.17 0.005 260)): Card backgrounds in dark mode.
- **Muted Dark** (oklch(0.22 0.005 260)): Secondary surfaces in dark mode.
- **Border Dark** (oklch(0.25 0.005 260)): Borders in dark mode.

### Functional Accents
- **Emerald** (oklch(0.7 0.17 160)): Success states, completed topics, positive indicators.
- **Amber** (oklch(0.75 0.15 80)): Warning states, in-progress indicators.
- **Rose** (oklch(0.65 0.2 20)): Error states, destructive actions, alerts.

### Named Rules
**The Blue Tint Rule.** Every neutral color (background, border, muted, text) carries a subtle blue hue (oklch hue 260). This creates visual cohesion and distinguishes Michi from warm-neutral AI defaults. Never use pure gray or warm-tinted neutrals.

**The Primary Restraint Rule.** The indigo-blue primary accent appears on ≤15% of any given screen. Its rarity creates hierarchy; overuse destroys it.

## 3. Typography

**Display Font:** Outfit (with system-ui fallback)
**Body Font:** Geist (with system-ui fallback)
**Mono Font:** Geist Mono (with ui-monospace fallback)

**Character:** Outfit provides geometric confidence for headings; Geist delivers neutral clarity for body text. The pairing is technical without being cold — professional but not corporate.

### Hierarchy
- **Display** (800 weight, clamp(2rem, 5vw, 3.5rem), 1.1 line-height): Hero headings, page titles. Appears once per page maximum.
- **Headline** (700 weight, 1.5rem, 1.2 line-height): Section headings within pages.
- **Title** (600 weight, 1.125rem, 1.4 line-height): Card titles, sidebar section headers.
- **Body** (400 weight, 0.9375rem, 1.6 line-height): Primary reading text. Max line length: 65–75ch.
- **Label** (600 weight, 0.75rem, 0.01em letter-spacing): Badges, filter pills, metadata, timestamps.

### Named Rules
**The Hierarchy Rule.** Never more than one display heading per page. If a section needs a heading, use Headline weight. Display weight is reserved for the page's single loudest voice.

**The Compact Rule.** Body text is 15px (0.9375rem), not 16px. This is intentional — Michi packs dense information, and the slight reduction increases information density without harming readability.

## 4. Elevation

Michi uses a flat-by-default system. Depth is conveyed through border contrast and tonal background shifts, not shadows. The one exception: interactive hover states on cards and dropdowns use a subtle shadow to signal lift.

### Shadow Vocabulary
- **Hover Lift** (`0 2px 8px oklch(0 0 0 / 0.06)`): Applied on card hover only. Signals interactivity.
- **Dropdown** (`0 4px 24px oklch(0 0 0 / 0.1)`): Modals, command palette, search overlay. Structural, not decorative.
- **Glow** (`0 0 20px oklch(0.65 0.2 265 / 0.15)`): Hero section primary glow effect. Used once per page maximum.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, focus, overlay) or as a single decorative glow on the hero. If a shadow exists without an interactive trigger, it's wrong.

## 5. Components

### Buttons
- **Shape:** 8px radius (rounded-md)
- **Primary:** Indigo-blue background, white text, 10px 20px padding. Hover: deepen to primary-deep.
- **Secondary:** Transparent background, foreground text, 1px border. Hover: muted background.
- **Ghost:** No border, muted text. Hover: muted background. Used for toolbar actions.
- **Size:** Compact by default. No large/hero button variant exists.

### Chips / Filter Pills
- **Style:** 7px radius, muted background, borderless. 28px height.
- **Selected state:** Primary background, primary-foreground text. Bold weight.
- **Transition:** 150ms ease-out on all state changes.

### Cards / Containers
- **Corner Style:** 12px radius (rounded-lg)
- **Background:** Pure white (card token) in light mode, card-dark in dark mode.
- **Border:** 1px solid border token. Always present — cards never rely on shadow alone.
- **Internal Padding:** 20px (spacing-lg)
- **Hover:** Subtle shadow lift on interactive cards only.

### Inputs / Fields
- **Style:** 1px border, background token, 8px radius. 8px 12px padding.
- **Focus:** 2px primary ring offset. Border shifts to primary color.
- **Placeholder:** Muted foreground, 4.5:1 contrast minimum.

### Navigation (Navbar)
- **Height:** 56px compact. Backdrop-blur-xl with translucent background.
- **Typography:** 600 weight, 0.875rem. Active state: primary color.
- **Mobile:** Slide-out drawer with full-height overlay.

### Roadmap Nodes (React Flow)
- **Shape:** 12px radius, 1px border, white background.
- **States:** Default (border), hover (primary border + shadow), completed (emerald border + checkmark), active (primary background).
- **Typography:** 600 weight, 0.8125rem. Compact by design.

### Sidebar
- **Width:** 300px. Collapsible on desktop, drawer on mobile.
- **Background:** Card token with border-right.
- **Sections:** Title (700 weight), stats row, progress bar, quick actions.

## 6. Do's and Don'ts

### Do:
- **Do** use border contrast (1px solid border tokens) as the primary depth mechanism.
- **Do** keep body text at 15px (0.9375rem) for information density.
- **Do** use oklch with blue hue 260 for all neutral colors — backgrounds, borders, muted surfaces.
- **Do** limit primary accent to ≤15% of any screen surface.
- **Do** use `text-wrap: balance` on headings for even line lengths.
- **Do** respect `prefers-reduced-motion` — all entrance animations have a crossfade alternative.
- **Do** use compact spacing (8px/16px base) — Michi is dense by design.

### Don't:
- **Don't** use warm-tinted neutrals (cream, sand, beige, ivory backgrounds). The blue tint is intentional.
- **Don't** use box-shadows as decoration. Shadows appear only on hover or in overlays.
- **Don't** use glassmorphism (backdrop-blur on cards, frosted glass effects).
- **Don't** use gradient text (`background-clip: text`).
- **Don't** use border-left or border-right greater than 1px as colored accents.
- **Don't** use rounded corners larger than 16px on cards or containers.
- **Don't** use bounce, elastic, or spring easing curves. Ease-out-quart or cubic-bezier(0.16, 1, 0.3, 1) only.
- **Don't** animate layout properties (width, height, padding) unless truly needed.
- **Don't** add decorative eyebrows ("01", "ABOUT", "FEATURES") above every section.
- **Don't** use hero-metric templates (big number + small label + gradient accent).
- **Don't** ship identical card grids (icon + heading + text, repeated endlessly).
