# Design System

## Brand Intent
- Tone: technical, visionary, rigorous.
- Experience goal: make complex protocol content easy to scan, navigate, and trust.

## Theme Tokens
- `color.primary`: #4f46e5
- `color.primary.hover`: #4338ca
- `color.text.main.light`: #0f172a
- `color.text.main.dark`: #e6edf7
- `color.text.muted.light`: #475569
- `color.text.muted.dark`: #9aa8be
- `color.surface.light`: #ffffff
- `color.surface.dark`: #0f1724
- `color.surface.muted.light`: #f8fafc
- `color.surface.muted.dark`: #131d2d
- `color.surface.elevated.light`: #ffffff
- `color.surface.elevated.dark`: #182335
- `color.border.light`: #e2e8f0
- `color.border.dark`: #263246
- `color.glow.dark`: rgba(79, 70, 229, 0.18)
- `color.shadow.dark`: rgba(2, 6, 23, 0.42)
- `color.warning`: #dc2626

### Dark Mode Palette Guidance
- Dark mode SHOULD avoid strong blue wash on page backgrounds.
- Dark mode SHOULD maintain three clear layers:
  - base canvas (`surface.dark`)
  - card canvas (`surface.muted.dark`)
  - elevated overlays (`surface.elevated.dark`)
- Primary color in dark mode SHOULD be used as accent lines and focus states, not as large-area fills.
- Text contrast in dark mode MUST prioritize long-form reading comfort for protocol content.

## Typography
- Heading font: Inter / system sans-serif fallback
- Body font: Inter / system sans-serif fallback
- Monospace blocks: JetBrains Mono / ui-monospace fallback
- Hierarchy:
  - H1: highly prominent, used once per page
  - H2/H3: section and subsection scanning anchors
  - Body: comfortable long-form reading line height

## Spacing Scale
- Global spacing baseline SHOULD use 8pt increments.
- Recommended tokens:
  - `space.1 = 8px`
  - `space.2 = 16px`
  - `space.3 = 24px`
  - `space.4 = 32px`
  - `space.5 = 40px`
  - `space.6 = 48px`

## Layout Rules
- Top navigation is sticky with backdrop blur.
- Home page sections are stacked in a single scroll narrative.
- Home page SHOULD follow whitepaper-land style rhythm:
  - Wide hero block
  - Alternating multi-card sections
  - Concluding CTA block
- Docs reader pages use a single-panel long-form reader layout.
- Docs center and reader pages SHOULD reuse home-level visual tokens (surface hierarchy, card rhythm, hover feedback, and accent density) to maintain cross-page consistency.
- In dark mode, cards and readers SHOULD prefer subtle elevation contrast over glow effects.