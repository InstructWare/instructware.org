# Logic: Toggle Theme (`on_toggle_theme`)

## Trigger
- Event: `theme_mode_changed(mode)` from `views/components/theme_switcher.md`.

## Execution Flow
1. Validate input `mode` in [`light`, `dark`, `system`].
2. If invalid, ignore event and keep current state.
3. Update `state/ui_prefs.md -> theme_mode`.
4. Persist `theme_mode` via `local_storage`.
5. Emit UI refresh signal for global theme token application.
