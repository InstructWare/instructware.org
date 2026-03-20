# Logic: Build Document Artifacts (`markdown_parser`)

## Trigger
- Called when docs runtime renders or switches manifesto/protocol markdown.

## Input
- `raw_markdown`: UTF-8 markdown source text from `models/content/doc_catalog.md`.

## Execution Flow
1. Parse markdown with secure defaults (`html=false`) and reader-friendly behavior (`breaks=true`, `linkify=true`), then normalize rendering for inline code and fenced code blocks.
2. Apply compatibility normalization for loose strong markers (`**...**`) adjacent to CJK/plain text, preserving unmatched delimiters as plain text.
3. Generate stable heading anchors (slug + dedupe), mark intro level-3 subtitles, and render deterministic HTML for `views/components/doc_reader.md`.
4. Keep parser guarantees minimal and stable:
   - Always HTML-escape code block content before token highlighting output.
   - Canonicalize fence language aliases (`yml -> yaml`, `plain/plaintext -> text`) to keep renderer classes deterministic.
   - Render `yaml` fence as safe plain text block (no fragile inline token injection).
   - Preserve `mermaid` fence source in structured DOM placeholders so view layer can render via Mermaid runtime.
   - Keep heading anchor fallback stable as `section-<index>` when slug text is empty.