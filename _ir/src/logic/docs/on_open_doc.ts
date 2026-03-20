import type { Router } from "vitepress";
import type { DocId } from "../../models/content/types";
import type { IwpStateShape } from "../store/types";
import { resolveDocAssetPath } from "../../models/content/doc_catalog";

function getDocRoute(docId: DocId): string {
  return docId === "manifesto" ? "/docs/manifesto" : "/docs/protocol";
}

function resetReaderRuntime(state: IwpStateShape): void {
  // @iwp.link state/docs_runtime.md::n.3a9a
  // @iwp.link state/docs_runtime.md::n.ffb2
  state.readerScrollRatio = 0;
}

export function syncDocForRoute(state: IwpStateShape, docId: DocId): void {
  state.activeDocId = docId;
  state.activeDocLocale = state.locale;
  state.activeDocAssetPath = resolveDocAssetPath(docId, state.activeDocLocale);
  resetReaderRuntime(state);
}

export function openDoc(state: IwpStateShape, docId: DocId, router: Router): void {
  // @iwp.link logic/docs/on_open_doc.md::n.0db8
  // @iwp.link logic/docs/on_open_doc.md::n.126f
  // @iwp.link logic/docs/on_open_doc.md::n.162a
  // @iwp.link logic/docs/on_open_doc.md::n.828b
  // @iwp.link logic/docs/on_open_doc.md::n.a388
  // @iwp.link logic/docs/on_open_doc.md::n.a691
  // @iwp.link logic/docs/on_open_doc.md::n.b6ef
  // @iwp.link logic/docs/on_open_doc.md::n.c0d5
  // @iwp.link logic/docs/on_open_doc.md::n.d334
  // @iwp.link logic/docs/on_open_doc.md::n.e575
  // @iwp.link logic/docs/on_open_doc.md::n.e7d1
  // @iwp.link logic/docs/on_open_doc.md::n.edf0
  // @iwp.link logic/docs/on_open_doc.md::n.f12f
  // @iwp.link logic/docs/on_open_doc.md::n.f8c9
  const next: DocId = docId === "manifesto" || docId === "protocol" ? docId : "manifesto";
  syncDocForRoute(state, next);
  router.go(getDocRoute(next));
}
