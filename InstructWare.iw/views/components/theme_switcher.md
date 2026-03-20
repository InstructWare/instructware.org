# Component: Theme Switcher

## Layout
- Icon trigger button in top navigation actions area:
  - Use sun icon for light mode
  - Use moon icon for dark mode
  - Use system icon for system mode
- Clicking trigger opens a compact dropdown menu with three options:
  - [text] Light
  - [text] Dark
  - [text] System

## Display Rules
- Highlight selected option based on `state/ui_prefs.md -> theme_mode`.
- Trigger MUST show current mode icon and an accessible label.
- Dropdown options SHOULD use title case (`Light`, `Dark`, `System`) for readability.
- Dropdown MUST clearly indicate selected option.
- The control SHOULD expose accessible semantics (`aria-label`, `aria-expanded`, selected state).

## Interaction Hooks
- Selecting an option emits `theme_mode_changed(mode)` to `logic/ui/on_toggle_theme.md`.
