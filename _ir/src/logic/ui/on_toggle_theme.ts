import type { ThemeMode } from "../../models/content/types";
import type { IwpStateShape } from "../store/types";
import { applyTheme, LOCAL_STORAGE_THEME } from "../../state/ui_prefs";

export function setThemeMode(state: IwpStateShape, mode: ThemeMode): void {
  // @iwp.link logic/ui/on_toggle_theme.md::n.8be5
  // @iwp.link logic/ui/on_toggle_theme.md::n.c674
  // @iwp.link logic/ui/on_toggle_theme.md::n.d81b
  // @iwp.link logic/ui/on_toggle_theme.md::n.ef18
  if (mode !== "light" && mode !== "dark" && mode !== "system") {
    return;
  }
  state.themeMode = mode;
  applyTheme(mode);
  // @iwp.link state/ui_prefs.md::n.6a3c
  // @iwp.link system.md::n.feae
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_STORAGE_THEME, mode);
  }
}
