import type { DocId, Locale } from "../models/content/types";
import { resolveDocAssetPath } from "../models/content/doc_catalog";

export function getDefaultDocsRuntime() {
  const activeDocId: DocId = "manifesto";
  // @iwp.link state/docs_runtime.md::n.6ae3
  const activeDocLocale: Locale = "en-US";
  return {
    // @iwp.link state/docs_runtime.md::n.acf0
    activeDocId,
    // @iwp.link state/docs_runtime.md::n.98e2
    activeDocLocale,
    // @iwp.link state/docs_runtime.md::n.79ba
    // @iwp.link state/docs_runtime.md::n.ccb0
    // @iwp.link state/docs_runtime.md::n.e15e
    activeDocAssetPath: resolveDocAssetPath(activeDocId, activeDocLocale),
    // @iwp.link state/docs_runtime.md::n.17b8
    readerScrollRatio: 0,
  };
}
