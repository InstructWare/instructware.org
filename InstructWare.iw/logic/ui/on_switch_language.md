# Logic: Switch Language (`on_switch_language`)

## Trigger
- Event: `locale_changed(locale)` from `views/components/lang_switcher.md`.

## Execution Flow
1. Validate input `locale` in [`zh-CN`, `en-US`].
2. If invalid, ignore event and keep current locale.
3. Update `state/ui_prefs.md -> locale`.
4. Persist locale via `local_storage`.
5. Update `state/docs_runtime.md -> active_doc_locale` to new locale.
6. Re-resolve `active_doc_asset_path` using (`active_doc_id`, new locale) from `models/content/doc_catalog.md`.
7. Keep current route unchanged and request page-level re-render with translated labels.
