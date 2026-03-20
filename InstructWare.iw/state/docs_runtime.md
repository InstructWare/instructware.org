# State: Docs Runtime

## Fields
- `active_doc_id`: enum [`manifesto`, `protocol`]
- `active_doc_locale`: enum [`zh-CN`, `en-US`]
- `active_doc_asset_path`: string
- `reader_scroll_ratio`: number [0.0 ~ 1.0]

## Derivation Rules
- `active_doc_locale` follows global `ui_prefs.locale`.
- `active_doc_asset_path` is resolved by (`active_doc_id`, `active_doc_locale`) through `models/content/doc_catalog.md`.

## Runtime Guarantees
- On document switch, reset `reader_scroll_ratio` to 0.
