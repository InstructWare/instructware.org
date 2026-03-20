# Logic: On App Start (`on_app_start`)

## Trigger
- Application bootstrap lifecycle.

## Execution Flow
1. Read persisted preferences from `local_storage` plugin:
   - `locale`
   - `theme_mode`
2. If persisted values are valid, hydrate `state/ui_prefs.md`.
3. If missing or invalid:
   - infer `locale` from system locale (`zh-CN` fallback for Chinese locales, otherwise `en-US`)
   - set `theme_mode` to `system`
4. Initialize docs runtime defaults in `state/docs_runtime.md`:
   - `active_doc_id = manifesto`
   - `active_doc_locale = state/ui_prefs.locale`
   - resolve `active_doc_asset_path` via `models/content/doc_catalog.md`
   - set progress and active anchor to defaults
5. Register route fallback middleware in `logic/middleware/route_fallback.md`.
