# System Context: InstructWare.org Official Site

## Product Identity
- Product name: InstructWare.org
- Product type: Official concept and protocol publication website
- Core audience:
  - Developers evaluating the IWP specification
  - Product builders exploring InstructWare paradigm
  - General visitors learning manifesto-level concepts

## Global Rules
1. The website MUST treat repository canonical markdown files as SSOT:
   - `../whitepaper/manifesto.md`
   - `../whitepaper/manifesto_zh.md`
   - `../protocol/IWP-v1.md`
   - `../protocol/IWP-v1-zh.md`
2. All routed pages MUST support bilingual rendering (`zh-CN`, `en-US`).
3. Theme mode MUST support `light`, `dark`, and `system`.
4. Navigation and content rendering MUST remain readable on desktop and mobile widths.
5. View descriptions MUST remain declarative; event handling MUST be delegated to `logic/`.
6. Global navigation MUST have a single source of truth: `views/components/top_navbar.md`.
   Framework default nav/search/appearance UI MUST be disabled to avoid duplicate controls.
7. Theme and language switching MUST only appear in top navigation global actions area.
   Routed pages MUST NOT define additional theme or language switch entries.
8. Top navigation and page content MUST share one container width token to keep horizontal alignment.
9. Routed pages MUST follow one coherent visual language (spacing rhythm, card style, border radius, and accent treatment) so home/docs/reader pages feel like one system.

## Information Architecture
- `/` : Home
- `/docs` : Document center overview
- `/docs/manifesto` : Full manifesto reader
- `/docs/protocol` : Full IWP specification reader

## Runtime Guarantees
- On app start, initialize locale and theme from local persisted preferences.
- If no preference exists, use:
  - locale: `zh-CN` for Chinese system locales, else `en-US`
  - theme: `system`
- Any unknown route MUST redirect to `/`.

## Security Model
- Rendering scope is read-only documentation delivery from canonical markdown sources; no user-authored script content is trusted.
- Markdown-to-HTML rendering MUST sanitize unsafe tags/attributes and MUST block inline script execution vectors.
- Route fallback middleware MUST enforce allow-list navigation and reject unknown routes by redirecting to `/`.
- Locale and theme preference persistence MUST be limited to non-sensitive UI state and MUST NOT store secrets or auth material.
- External network access for documentation rendering SHOULD remain disabled unless explicitly declared in `manifest.yaml` permissions.
