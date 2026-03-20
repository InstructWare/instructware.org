<script setup lang="ts">
// @iwp.link views/components/doc_reader.md::n.0ce2
// @iwp.link views/components/doc_reader.md::n.5733
// @iwp.link views/components/doc_reader.md::n.c371

import { nextTick, onMounted, ref, watch } from "vue";
import { useIwpState } from "../../logic/store/useIwpState";

const { currentHtml } = useIwpState();

const readerRef = ref<HTMLElement | null>(null);

let mermaidBootstrapped = false;

async function renderMermaidBlocks() {
  // @iwp.link views/components/doc_reader.md::n.eb8a
  const root = readerRef.value;
  if (!root) {
    return;
  }
  const blocks = Array.from(
    root.querySelectorAll<HTMLElement>(".iwp-mermaid-block[data-mermaid-source]"),
  );
  if (!blocks.length) {
    return;
  }
  const mermaidModule = await import("mermaid");
  const mermaid = mermaidModule.default;
  if (!mermaidBootstrapped) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      flowchart: {
        htmlLabels: false,
      },
    });
    mermaidBootstrapped = true;
  }

  for (const [index, block] of blocks.entries()) {
    const encoded = block.dataset.mermaidSource ?? "";
    const source = decodeURIComponent(encoded);
    const rawCode = block.querySelector("pre");
    if (!source || !rawCode) {
      continue;
    }
    try {
      const chartId = `iwp-mermaid-${Date.now()}-${index}`;
      const { svg } = await mermaid.render(chartId, source);
      block.innerHTML = svg;
      block.dataset.renderState = "done";
    } catch {
      // Keep safe plaintext fallback when Mermaid cannot render.
      block.dataset.renderState = "error";
      rawCode.removeAttribute("hidden");
    }
  }
}

watch(
  () => currentHtml.value,
  () => {
    void nextTick(() => renderMermaidBlocks());
  },
);

onMounted(() => {
  void renderMermaidBlocks();
});
</script>

<template>
  <!-- @iwp.link views/components/doc_reader.md::n.10d9 -->
  <!-- @iwp.link views/components/doc_reader.md::n.22b2 -->
  <!-- @iwp.link views/components/doc_reader.md::n.8ed2 -->
  <!-- @iwp.link views/components/doc_reader.md::n.cf63 -->
  <section class="iwp-doc-reader-shell">
    <!-- @iwp.link views/components/doc_reader.md::n.041e -->
    <!-- @iwp.link views/components/doc_reader.md::n.6dcf -->
    <!-- @iwp.link views/components/doc_reader.md::n.c32b -->
    <!-- @iwp.link views/components/doc_reader.md::n.dbd6 -->
    <article
      ref="readerRef"
      class="iwp-doc-reader"
      v-html="currentHtml"
    />
  </section>
</template>
