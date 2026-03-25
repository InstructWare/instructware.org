import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useDocsRuntimeStore } from "../../docs-runtime/store";
import { loadDocMarkdown } from "../../../shared/content/docsAssets";
import { renderMarkdown } from "../../../shared/utils/markdown";

export function useDocsReader() {
  // @iwp.link pages/docs-reader.md::n.3d8d
  // @iwp.link pages/docs-reader.md::n.6c19
  // @iwp.link pages/docs-reader.md::n.7bbd
  const { runtime, setScrollRatio } = useDocsRuntimeStore();
  const markdownSource = ref("");
  const loading = ref(false);
  const loadError = ref(false);

  async function loadMarkdown(path: string) {
    // @iwp.link pages/docs-reader.md::n.3ea3
    loading.value = true;
    loadError.value = false;
    try {
      const bundled = await loadDocMarkdown(path);
      if (bundled !== null) {
        markdownSource.value = bundled;
        return;
      }
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load markdown: ${response.status}`);
      }
      markdownSource.value = await response.text();
    } catch {
      // @iwp.link pages/docs-reader.md::n.28d7
      // @iwp.link pages/docs-reader.md::n.429a
      markdownSource.value = "";
      loadError.value = true;
    } finally {
      loading.value = false;
    }
  }

  function updateScrollRatioFromWindow() {
    // @iwp.link pages/docs-reader.md::n.38f4
    // @iwp.link pages/docs-reader.md::n.96e2
    const doc = document.documentElement;
    const totalScrollable = doc.scrollHeight - window.innerHeight;
    if (totalScrollable <= 0) {
      setScrollRatio(0);
      return;
    }
    setScrollRatio(window.scrollY / totalScrollable);
  }

  function attachScrollListeners() {
    window.addEventListener("scroll", updateScrollRatioFromWindow, { passive: true });
    window.addEventListener("resize", updateScrollRatioFromWindow);
  }

  function detachScrollListeners() {
    window.removeEventListener("scroll", updateScrollRatioFromWindow);
    window.removeEventListener("resize", updateScrollRatioFromWindow);
  }

  const htmlContent = computed(() => renderMarkdown(markdownSource.value));

  watch(
    // @iwp.link pages/docs-reader.md::n.747b
    () => runtime.value.activeDocAssetPath,
    (nextPath) => {
      loadMarkdown(nextPath);
    },
    { immediate: true },
  );

  onMounted(() => {
    attachScrollListeners();
    updateScrollRatioFromWindow();
  });

  onBeforeUnmount(() => {
    detachScrollListeners();
  });

  return {
    runtime,
    loading,
    loadError,
    htmlContent,
  };
}
