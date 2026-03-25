import { useRouter } from "vue-router";
import { useDocsRuntimeStore } from "../../docs-runtime/store";
import type { DocId } from "../../../shared/types/docs";

export function useDocsCenterActions() {
  const router = useRouter();
  const { openDoc } = useDocsRuntimeStore();

  function openReader(docId: DocId) {
    openDoc(docId);
    return router.push({ name: "docs-reader" });
  }

  return {
    // @iwp.link pages/docs.md::n.214f
    openManifesto: () => openReader("manifesto"),
    openProtocol: () => openReader("protocol"),
  };
}
