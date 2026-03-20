# Component: Document Card

## Layout
- Card header:
  - Document title (locale-aware)
  - Tag chips
- Card body:
  - [text] Summary text (locale-aware)
- Card footer:
  - [text] Primary action button: "Read"
  - Secondary metadata slot (optional)

## Interaction Hooks
- Clicking "Read" on `manifesto` delegates to `logic/docs/on_open_doc.md` with payload `doc_id=manifesto`.
- Clicking "Read" on `protocol` delegates to `logic/docs/on_open_doc.md` with payload `doc_id=protocol`.
