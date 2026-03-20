# Component: Language Switcher

## Layout
- Language trigger button in top navigation actions area:
  - [text] Display current locale label (`中文` or `EN`)
- Clicking trigger opens a compact dropdown menu:
  - [text] 中文 (`zh-CN`)
  - [text] EN (`en-US`)

## Display Rules
- Current option reflects `state/ui_prefs.md -> locale`.
- Trigger label MUST remain concise and stable (`中文`, `EN`) across routes.
- Dropdown MUST clearly indicate selected locale.
- The control SHOULD expose accessible semantics (`aria-label`, `aria-expanded`, selected state).

## Interaction Hooks
- Selecting a locale emits `locale_changed(locale)` to `logic/ui/on_switch_language.md`.
