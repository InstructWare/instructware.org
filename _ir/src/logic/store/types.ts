import type { DocId, Locale, ThemeMode } from "../../models/content/types";

export interface IwpStateShape {
  locale: Locale;
  themeMode: ThemeMode;
  mobileNavOpen: boolean;
  activeDocId: DocId;
  activeDocLocale: Locale;
  activeDocAssetPath: string;
  readerScrollRatio: number;
  initialized: boolean;
}
