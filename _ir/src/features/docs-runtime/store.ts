import { computed, reactive } from "vue";
import type { DocId, RuntimeDocState, SupportedLocale } from "../../shared/types/docs";

const DEFAULT_DOC_ID: DocId = "manifesto";

const DOC_ASSET_MAP: Record<DocId, Record<SupportedLocale, string>> = {
  manifesto: {
    en: "/whitepaper/manifesto.md",
    zh: "/whitepaper/manifesto_zh.md",
  },
  protocol: {
    en: "/protocol/IWP-v1.md",
    zh: "/protocol/IWP-v1-zh.md",
  },
};

const initialLocale = resolveInitialLocale();

const state = reactive<RuntimeDocState>({
  uiPrefsLocale: initialLocale,
  activeDocId: DEFAULT_DOC_ID,
  activeDocLocale: initialLocale,
  activeDocAssetPath: DOC_ASSET_MAP[DEFAULT_DOC_ID][initialLocale],
  // @iwp.link pages/docs.md::n.1bcd
  readerScrollRatio: 0,
});

function resolveInitialLocale(): SupportedLocale {
  if (typeof navigator === "undefined") {
    return "en";
  }
  const normalized = navigator.language.toLowerCase();
  return normalized.indexOf("zh") === 0 ? "zh" : "en";
}

function clampRatio(value: number): number {
  // @iwp.link pages/docs-reader.md::n.6c19
  // @iwp.link pages/home.md::n.28b6
  if (!isFinite(value)) {
    return 0;
  }
  return Math.min(1, Math.max(0, value));
}

function resolveAssetPath(docId: DocId, locale: SupportedLocale): string {
  // @iwp.link pages/docs.md::n.0bd1
  // @iwp.link pages/home.md::n.e72e
  return DOC_ASSET_MAP[docId][locale];
}

export function useDocsRuntimeStore() {
  const runtime = computed(() => state);

  function setLocale(locale: SupportedLocale) {
    // @iwp.link pages/docs-reader.md::n.38f4
    // @iwp.link pages/docs-reader.md::n.747b
    // @iwp.link pages/docs.md::n.598f
    // @iwp.link pages/home.md::n.0244
    // @iwp.link pages/home.md::n.fa3a
    state.uiPrefsLocale = locale;
    state.activeDocLocale = locale;
    state.activeDocAssetPath = resolveAssetPath(state.activeDocId, locale);
  }

  function openDoc(docId: DocId) {
    // @iwp.link pages/docs-reader.md::n.3ea3
    // @iwp.link pages/docs-reader.md::n.96e2
    // @iwp.link pages/docs.md::n.0995
    // @iwp.link pages/docs.md::n.2250
    // @iwp.link pages/home.md::n.57b3
    // @iwp.link pages/home.md::n.9299
    state.activeDocId = docId;
    state.activeDocLocale = state.uiPrefsLocale;
    state.activeDocAssetPath = resolveAssetPath(docId, state.activeDocLocale);
    state.readerScrollRatio = 0;
  }

  function setScrollRatio(ratio: number) {
    // @iwp.link pages/docs-reader.md::n.38f4
    // @iwp.link pages/docs-reader.md::n.96e2
    // @iwp.link pages/home.md::n.28b6
    state.readerScrollRatio = clampRatio(ratio);
  }

  return {
    runtime,
    setLocale,
    openDoc,
    setScrollRatio,
  };
}
