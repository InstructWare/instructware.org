# Visual Design Contract

This document defines the visual contract for the official InstructWare web experience. It is the authoritative design source for color, typography, spacing, and component-level style behavior. @iwp

## Scope

This contract applies to:

- home page,
- docs center page,
- docs reader page,
- global header and global controls.

This contract should be consumed together with page structure contracts under `pages/*.md`.

## Design Goals

- Present a stable, reliable, engineering-first product tone.
- Keep visual hierarchy explicit and low-noise.
- Prioritize readability for long-form protocol and manifesto content.
- Maintain theme parity between light and dark modes.

## Core Tokens

### Color Tokens

Light theme:

- `--iwp-primary`: `#0969da`
- `--iwp-primary-hover`: `#0550ae`
- `--iwp-primary-contrast`: `#ffffff`
- `--iwp-warning`: `#cf222e`
- `--iwp-text`: `#1f2328`
- `--iwp-text-muted`: `#57606a`
- `--iwp-heading`: `#1f2328`
- `--iwp-surface`: `#ffffff`
- `--iwp-surface-muted`: `#f6f8fa`
- `--iwp-surface-elevated`: `#ffffff`
- `--iwp-border`: `#d0d7de`
- `--iwp-canvas-bg`: `#f6f8fa`

Dark theme:

- `--iwp-primary`: `#58a6ff`
- `--iwp-primary-hover`: `#79c0ff`
- `--iwp-primary-contrast`: `#0d1117`
- `--iwp-text`: `#e6edf3`
- `--iwp-text-muted`: `#8b949e`
- `--iwp-heading`: `#f0f6fc`
- `--iwp-surface`: `#161b22`
- `--iwp-surface-muted`: `#0d1117`
- `--iwp-surface-elevated`: `#1c2128`
- `--iwp-border`: `#30363d`
- `--iwp-canvas-bg`: `#0d1117`

### Typography Tokens

- `--iwp-font`: system sans stack with zh/en fallback (`-apple-system`, `Segoe UI`, `PingFang SC`, `Microsoft YaHei`, `Noto Sans CJK SC`, ...)
- `--iwp-mono`: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`

Typography baseline:

- body text color defaults to `--iwp-text`,
- paragraph/list text defaults to `--iwp-text-muted` unless elevated content regions specify stronger contrast,
- heading weight: `600`,
- body/list weight: `400`,
- heading letter spacing: tight negative tracking.

### Layout Tokens

- container max width: `1160px`
- spacing scale: `8 / 16 / 24 / 32 / 40 / 48`
- card radius: `10px`
- button radius: `6px`

## Component Contracts

### Global Header

- Header is sticky at top with border-separated surface.
- Navigation and controls should remain compact and high-contrast.
- Locale and theme controls should use the same border and radius language as buttons.
- Theme toggle label must follow active locale copy.

### Cards

- Cards must use `surface + border` as primary separation.
- Card shadows should remain subtle and should not create floating or glossy effects.
- Hover effects should stay minimal and only improve affordance.

### Actions

- Primary action uses `--iwp-primary` with contrast text.
- Secondary action uses neutral surface with border.
- Ghost action uses muted text and transparent background.
- Focus-visible states must stay explicit and keyboard-readable.

### List Spacing

- Lists within the same semantic tier should use consistent vertical rhythm.
- For structured cards, list items should use explicit spacing (recommended `12px` gap).
- Default browser list spacing should not be relied on for key content blocks.

### Markdown Viewport

- Markdown reader must keep GitHub-like typography rhythm and spacing.
- Heading hierarchy must be visually clear and maintain border separators for major levels.
- Code blocks, inline code, tables, and blockquotes must use explicit tokenized colors.
- Mermaid fences must render in a bordered, scroll-safe container.

## Theming Rules

- Light and dark themes must preserve semantic mapping, not only hue inversion.
- Contrast-critical elements (text, links, borders, code) must remain legible in both themes.
- Theme switching must not alter layout structure or content order.

## Guardrails

- Avoid decorative gradients or ornaments that reduce clarity.
- Avoid per-section bespoke visual systems that break consistency.
- Keep style changes token-first; page-level overrides should be minimal.
- New visual rules should update this file first, then implementation.
