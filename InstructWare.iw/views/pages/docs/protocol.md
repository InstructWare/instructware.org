# Page: Protocol Reader (`/docs/protocol`)

## Layout Tree
- Top navigation:
  - Include `views/components/top_navbar.md`
- Main content shell:
  - Single reader panel:
    - Include `views/components/doc_reader.md`

## Display Rules
- Active document MUST be `protocol`.
- Content source MUST resolve through `models/content/doc_catalog.md` and current locale.
- Preserve exact canonical structure from `assets/docs/iwp-v1.[locale].md`.
- Reader panel MUST be primary and use full available page height for long-form reading.
- Theme and language controls MUST NOT appear in main content shell; they are global top navigation controls only.

## Interaction Hooks
- Reader interactions delegate to corresponding docs logic flows.
