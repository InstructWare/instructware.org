import type { IwpStateShape } from "../store/types";
import type { Locale } from "../../models/content/types";
import { resolveDocAssetPath } from "../../models/content/doc_catalog";
import { LOCAL_STORAGE_LOCALE } from "../../state/ui_prefs";

export function setLocale(state: IwpStateShape, locale: Locale): void {
  // @iwp.link logic/ui/on_switch_language.md::n.32fd
  // @iwp.link logic/ui/on_switch_language.md::n.3f5d
  // @iwp.link logic/ui/on_switch_language.md::n.47d5
  // @iwp.link logic/ui/on_switch_language.md::n.838e
  if (locale !== "zh-CN" && locale !== "en-US") {
    return;
  }
  state.locale = locale;
  // @iwp.link state/docs_runtime.md::n.3d0c
  state.activeDocLocale = locale;
  // @iwp.link state/docs_runtime.md::n.79ba
  state.activeDocAssetPath = resolveDocAssetPath(state.activeDocId, locale);
  // @iwp.link state/ui_prefs.md::n.6a3c
  // @iwp.link system.md::n.b397
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_STORAGE_LOCALE, locale);
  }
}
