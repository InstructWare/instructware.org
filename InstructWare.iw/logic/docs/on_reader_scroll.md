# Logic: Sync Reader Scroll (`on_reader_scroll`)

## Trigger
- Scroll event from `views/components/doc_reader.md`.

## Input
- `scroll_ratio`: number [0.0 ~ 1.0]

## Execution Flow
1. Clamp `scroll_ratio` into [0.0, 1.0].
2. Update `state/docs_runtime.md -> reader_scroll_ratio`.
