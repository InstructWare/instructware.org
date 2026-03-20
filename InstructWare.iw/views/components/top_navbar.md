# Component: Top Navbar

## Layout
- Left zone:
  - [text] Brand mark: `InstructWare`
  - [text] Secondary text: `Natural Language is Source Code`
- Primary nav zone (desktop, adjacent to left zone):
  - [text] Nav item: Home (`/`)
  - [text] Nav item: Docs (`/docs`)
- Right zone:
  - Theme switch trigger component (`components/theme_switcher.md`)
  - Language switch trigger component (`components/lang_switcher.md`)
  - GitHub link placeholder (optional external link slot)
- Mobile zone:
  - Compact menu trigger (hamburger)
  - Expanded menu panel includes nav items and global switchers

## Display Rules
- Navbar spacing SHOULD follow global 8pt baseline rhythm.
- Desktop primary nav zone SHOULD sit close to brand zone with clear but compact spacing.
- Desktop layout SHOULD avoid placing Home/Docs as an isolated center block.
- On mobile width, middle and right zones SHOULD collapse into a single expandable panel.
- Expanding mobile panel MUST NOT create duplicated switch controls outside panel.

## Interaction Hooks
- Clicking brand navigates to `/`.
- Clicking `Home` navigates to `/`.
- Clicking `Docs` navigates to `/docs`.
- Clicking mobile menu trigger toggles collapsed panel visibility.
- Theme switch action delegates to `logic/ui/on_toggle_theme.md`.
- Language switch action delegates to `logic/ui/on_switch_language.md`.
