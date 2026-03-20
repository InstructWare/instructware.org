import type { IwpStateShape } from "../store/types";
import { resolveDocAssetPath } from "../../models/content/doc_catalog";
import { applyTheme, getDefaultLocale, LOCAL_STORAGE_LOCALE, LOCAL_STORAGE_THEME } from "../../state/ui_prefs";

export function initApp(state: IwpStateShape): void {
  // @iwp.link logic/system/on_app_start.md::n.029a
  // @iwp.link logic/system/on_app_start.md::n.0982
  // @iwp.link logic/system/on_app_start.md::n.1139
  // @iwp.link logic/system/on_app_start.md::n.41f7
  // @iwp.link logic/system/on_app_start.md::n.504e
  // @iwp.link logic/system/on_app_start.md::n.628d
  // @iwp.link logic/system/on_app_start.md::n.68ee
  // @iwp.link logic/system/on_app_start.md::n.9893
  // @iwp.link logic/system/on_app_start.md::n.bcbb
  // @iwp.link logic/system/on_app_start.md::n.c058
  // @iwp.link logic/system/on_app_start.md::n.d045
  // @iwp.link logic/system/on_app_start.md::n.d4ea
  if (state.initialized || typeof window === "undefined") {
    return;
  }

  // @iwp.link state/ui_prefs.md::n.73d8
  const savedLocale = window.localStorage.getItem(LOCAL_STORAGE_LOCALE);
  const savedTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME);

  if (savedLocale === "zh-CN" || savedLocale === "en-US") {
    state.locale = savedLocale;
  } else {
    state.locale = getDefaultLocale();
  }

  if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
    state.themeMode = savedTheme;
  } else {
    // @iwp.link state/ui_prefs.md::n.e2f6
    state.themeMode = "system";
  }

  // @iwp.link state/docs_runtime.md::n.3d0c
  state.activeDocLocale = state.locale;
  // @iwp.link state/docs_runtime.md::n.79ba
  state.activeDocAssetPath = resolveDocAssetPath(state.activeDocId, state.activeDocLocale);
  applyTheme(state.themeMode);
  state.initialized = true;
}
