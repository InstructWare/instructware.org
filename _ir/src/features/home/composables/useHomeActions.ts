import { useRouter } from "vue-router";
import { useDocsRuntimeStore } from "../../docs-runtime/store";
import type { DocId } from "../../../shared/types/docs";
import { openExternalUrl } from "../../../shared/utils/external";

export function useHomeActions() {
  const router = useRouter();
  const { openDoc } = useDocsRuntimeStore();

  function openReader(docId: DocId) {
    // @iwp.link pages/home.md::n.45fe
    // @iwp.link pages/home.md::n.57b3
    // @iwp.link pages/home.md::n.da21
    openDoc(docId);
    return router.push({ name: "docs-reader" });
  }

  return {
    openManifesto: () => openReader("manifesto"),
    openProtocol: () => openReader("protocol"),
    // @iwp.link pages/home.md::n.d711
    openFeedback: () =>
      openExternalUrl("https://github.com/InstructWare/instructware.org/issues/new/choose"),
    // @iwp.link pages/home.md::n.a333
    openTooling: () => openExternalUrl("https://github.com/InstructWare/iwp-tools"),
  };
}
