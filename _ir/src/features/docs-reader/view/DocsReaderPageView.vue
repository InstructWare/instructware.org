<script setup lang="ts">
import mermaid from "mermaid";
import { nextTick, watch } from "vue";
import AppHeader from "../../../components/layout/AppHeader.vue";
import { usePageCopy } from "../../../shared/composables/usePageCopy";
import { useDocsReader } from "../composables/useDocsReader";

const {
  runtime,
  loading,
  loadError,
  htmlContent,
} = useDocsReader();
// @iwp.link pages/docs-reader.md::n.0fee
// @iwp.link pages/docs-reader.md::n.7cfb
// @iwp.link pages/docs-reader.md::n.c7e5
// @iwp.link pages/docs-reader.md::n.d9c4
const { t, setLocale } = usePageCopy("docs-reader", runtime.value.uiPrefsLocale);

async function renderMermaidDiagrams() {
  // @iwp.link pages/docs-reader.md::n.aff1
  if (loading.value || loadError.value) {
    return;
  }
  await nextTick();
  const useDarkTheme = document.documentElement.classList.contains("dark");
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: useDarkTheme ? "dark" : "default",
  });
  const nodes = Array.from(document.querySelectorAll<HTMLElement>(".markdown-body .mermaid"));
  if (nodes.length === 0) {
    return;
  }
  for (const node of nodes) {
    node.removeAttribute("data-processed");
  }
  await mermaid.run({ nodes });
}

watch(
  () => runtime.value.uiPrefsLocale,
  (nextLocale) => {
    setLocale(nextLocale);
  },
  { immediate: true },
);

watch([htmlContent, loading, loadError], () => {
  renderMermaidDiagrams();
});
</script>

<template>
  <!-- @iwp.link pages/docs-reader.md::n.8052 -->
  <AppHeader />
  <main class="container page">
    <section class="card markdown-view">
      <p v-if="loading" class="state-message">{{ t("viewport.loading") }}</p>
      <!-- @iwp.link pages/docs-reader.md::n.28d7 -->
      <!-- @iwp.link pages/docs-reader.md::n.429a -->
      <p v-else-if="loadError" class="state-message">{{ t("viewport.empty") }}</p>
      <article v-else class="markdown-body markdown-body--docs" v-html="htmlContent"></article>
    </section>
  </main>
</template>
