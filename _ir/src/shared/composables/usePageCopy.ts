import { onMounted, ref, watch } from "vue";
import { loadPageLocale } from "../i18n/pageLocale";
import type { PageCopyKey, PageCopyMap, PageId } from "../i18n/pageLocale";
import type { SupportedLocale } from "../types/docs";

export function usePageCopy<TPage extends PageId>(pageId: TPage, locale: SupportedLocale = "en") {
  const copy = ref<PageCopyMap[TPage]>({} as PageCopyMap[TPage]);
  const currentLocale = ref<SupportedLocale>(locale);
  const loading = ref(false);
  const hasLoaded = ref(false);

  async function reload() {
    loading.value = true;
    try {
      copy.value = await loadPageLocale(pageId, currentLocale.value);
      hasLoaded.value = true;
    } catch {
      copy.value = {} as PageCopyMap[TPage];
    } finally {
      loading.value = false;
    }
  }

  function t(key: PageCopyKey<TPage>, fallback = "") {
    return copy.value[key] ?? fallback;
  }

  function setLocale(nextLocale: SupportedLocale) {
    currentLocale.value = nextLocale;
  }

  watch(currentLocale, () => {
    reload();
  });

  onMounted(() => {
    reload();
  });

  return {
    copy,
    hasLoaded,
    loading,
    locale: currentLocale,
    setLocale,
    t,
    reload,
  };
}
