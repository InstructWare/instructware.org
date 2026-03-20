import type { Locale, ThemeMode } from "../models/content/types";

export const LOCAL_STORAGE_LOCALE = "iwp.locale";
export const LOCAL_STORAGE_THEME = "iwp.theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getDefaultLocale(): Locale {
  // @iwp.link state/ui_prefs.md::n.c760
  if (typeof navigator === "undefined") {
    return "en-US";
  }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}

export function applyTheme(mode: ThemeMode): void {
  // @iwp.link state/ui_prefs.md::n.6a3c
  if (typeof document === "undefined") {
    return;
  }
  const root = document.documentElement;
  const resolved = mode === "system" ? getSystemTheme() : mode;
  root.classList.toggle("dark", resolved === "dark");
  root.dataset.themeMode = mode;
}
