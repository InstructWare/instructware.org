import { computed, reactive } from "vue";
import type { Router } from "vitepress";
import { TEXTS } from "../../locales/texts";
import { getDocRaw, listDocs, resolveDocAssetPath } from "../../models/content/doc_catalog";
import type { DocId, Locale, ThemeMode } from "../../models/content/types";
import { buildDocArtifacts } from "../docs/markdown_parser";
import { getDefaultDocsRuntime } from "../../state/docs_runtime";
import { ensureRouteContract as ensureRouteContractImpl } from "../middleware/route_fallback";
import { initApp as initAppImpl } from "../system/on_app_start";
import { setThemeMode as setThemeModeImpl } from "../ui/on_toggle_theme";
import { setLocale as setLocaleImpl } from "../ui/on_switch_language";
import { onReaderScroll as onReaderScrollImpl } from "../docs/on_reader_scroll";
import { openDoc as openDocImpl, syncDocForRoute as syncDocForRouteImpl } from "../docs/on_open_doc";

const artifactsCache = new Map<string, ReturnType<typeof buildDocArtifacts>>();

function getCachedArtifacts(docId: DocId, locale: Locale) {
  // @iwp.link logic/docs/markdown_parser.md::n.0242
  // @iwp.link logic/docs/markdown_parser.md::n.415b
  const cacheKey = `${docId}:${locale}`;
  const cached = artifactsCache.get(cacheKey);
  if (cached) {
    return cached;
  }
  // @iwp.link logic/docs/markdown_parser.md::n.42cc
  const parsed = buildDocArtifacts(getDocRaw(docId, locale));
  artifactsCache.set(cacheKey, parsed);
  return parsed;
}

const docsRuntime = getDefaultDocsRuntime();
const state = reactive({
  // @iwp.link state/docs_runtime.md::n.70cf
  // @iwp.link state/docs_runtime.md::n.acf0
  // @iwp.link state/ui_prefs.md::n.8f98
  // @iwp.link state/ui_prefs.md::n.c09d
  // @iwp.link state/ui_prefs.md::n.e7bc
  locale: "en-US" as Locale,
  // @iwp.link state/ui_prefs.md::n.7761
  themeMode: "system" as ThemeMode,
  // @iwp.link state/ui_prefs.md::n.77fd
  // @iwp.link state/ui_prefs.md::n.9a32
  // @iwp.link state/ui_prefs.md::n.dc12
  mobileNavOpen: false,
  // @iwp.link state/ui_prefs.md::n.9a32
  // @iwp.link state/ui_prefs.md::n.dc12
  ...docsRuntime,
  initialized: false,
});

export function useIwpState() {
  const docs = listDocs();
  const activeDocMeta = computed(() => docs.find((d) => d.id === state.activeDocId) ?? docs[0]);
  const currentArtifacts = computed(() =>
    getCachedArtifacts(state.activeDocId, state.activeDocLocale),
  );
  const currentHtml = computed(() => currentArtifacts.value.html);

  function initApp() {
    initAppImpl(state);
  }

  function ensureRouteContract(path: string, router: Router) {
    ensureRouteContractImpl(path, router);
  }

  function setThemeMode(mode: ThemeMode) {
    setThemeModeImpl(state, mode);
  }

  function setLocale(locale: Locale) {
    setLocaleImpl(state, locale);
  }

  function syncDocForRoute(docId: DocId) {
    syncDocForRouteImpl(state, docId);
  }

  function openDoc(docId: DocId, router: Router) {
    openDocImpl(state, docId, router);
  }

  function onReaderScroll(scrollRatio: number) {
    onReaderScrollImpl(state, scrollRatio);
  }

  function t(scope: keyof typeof TEXTS, key: string): string {
    const scoped = TEXTS[scope] as Record<string, Record<Locale, string>>;
    return scoped[String(key)][state.locale];
  }

  return {
    state,
    docs,
    activeDocMeta,
    currentHtml,
    initApp,
    ensureRouteContract,
    setThemeMode,
    setLocale,
    syncDocForRoute,
    openDoc,
    onReaderScroll,
    t,
  };
}

export function resolveActiveDocAssetPath(docId: DocId, locale: Locale): string {
  return resolveDocAssetPath(docId, locale);
}
