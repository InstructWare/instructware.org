# Logic: Open Document (`on_open_doc`)

## Trigger
- CTA actions from home/docs center pages.
- Document switch interactions from docs reader pages.

## Input
- `doc_id`: one of [`manifesto`, `protocol`].

## Execution Flow
1. Validate `doc_id` against catalog domain.
2. If invalid, fallback to `manifesto`.
3. Update `state/docs_runtime.md`:
   - `active_doc_id = doc_id`
   - `active_doc_locale = state/ui_prefs.locale`
   - `active_doc_asset_path = map(doc_id, active_doc_locale)` via `models/content/doc_catalog.md`
   - reset reading runtime:
     - `reader_scroll_ratio = 0`
4. Route transition:
   - `manifesto` -> `/docs/manifesto`
   - `protocol` -> `/docs/protocol`
