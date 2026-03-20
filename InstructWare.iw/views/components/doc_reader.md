# Component: Document Reader

## Layout
- Main reader body:
  - Render markdown from `state/docs_runtime.md -> active_doc_asset_path`
  - Preserve heading anchors generated from markdown heading text

## Display Rules
- Reader container SHOULD fill available page height for uninterrupted long-form reading.
- Rendering must preserve semantic heading hierarchy and blockquote/code fence layout.
- `mermaid` code fence SHOULD render as diagrams via Mermaid runtime when available, and fallback to readable code block when rendering fails.
- Paragraph width should optimize long-form readability.

## Interaction Hooks
- Reader scroll event delegates to `logic/docs/on_reader_scroll.md`.
