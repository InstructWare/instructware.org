export type SupportedLocale = "en" | "zh";

export type DocId = "manifesto" | "protocol";

export interface RuntimeDocState {
  uiPrefsLocale: SupportedLocale;
  activeDocId: DocId;
  activeDocLocale: SupportedLocale;
  activeDocAssetPath: string;
  readerScrollRatio: number;
}
