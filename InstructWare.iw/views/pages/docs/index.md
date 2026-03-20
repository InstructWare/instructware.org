# Page: Docs Center (`/docs`)

## Layout Tree
- Top navigation:
  - Include `views/components/top_navbar.md`
- Page header:
  - Title (locale-aware):
    - [text] zh: 文档中心
    - [text] en: Documentation Center
  - Description:
    - [text] zh: 阅读 InstructWare 宣言与 IWP 核心规范的完整内容。
    - [text] en: Read the full InstructWare Manifesto and IWP Core Specification.
- Document card grid:
  - `manifesto` card via `views/components/doc_card.md`
  - `protocol` card via `views/components/doc_card.md`

## Interaction Hooks
- Card action delegates to `logic/docs/on_open_doc.md` with selected `doc_id`.

## Display Rules
- Visual hierarchy, spacing rhythm, and card language SHOULD stay consistent with home page design style.
