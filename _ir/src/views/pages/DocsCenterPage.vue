<script setup lang="ts">
// @iwp.link views/pages/docs/index.md::n.ab02

import { useRouter } from "vitepress";
import { useIwpState } from "../../logic/store/useIwpState";
import type { DocId } from "../../models/content/types";

const router = useRouter();
const { docs, state, openDoc, t } = useIwpState();

// @iwp.link views/pages/docs/index.md::n.b12d
function onRead(docId: DocId) {
  // @iwp.link views/pages/docs/index.md::n.0762
  openDoc(docId, router);
}
</script>

<template>
  <!-- @iwp.link views/pages/docs/index.md::n.239c -->
  <!-- @iwp.link views/pages/docs/index.md::n.41c5 -->
  <!-- @iwp.link views/pages/docs/index.md::n.cb04 -->
  <TopNavbar />
  <!-- @iwp.link views/pages/docs/index.md::n.604e -->
  <!-- @iwp.link views/pages/docs/index.md::n.6503 -->
  <main class="iwp-page iwp-docs-center">
    <!-- @iwp.link views/pages/docs/index.md::n.99f1 -->
    <section class="iwp-hero-pro iwp-docs-hero">
      <p class="iwp-kicker">InstructWare Docs</p>
      <!-- @iwp.link views/pages/docs/index.md::n.c7a9 -->
      <!-- @iwp.link views/pages/docs/index.md::n.f2f8 -->
      <!-- @iwp.link views/pages/docs/index.md::n.f67a -->
      <h1 class="iwp-section-title">{{ t("docs", "title") }}</h1>
      <!-- @iwp.link views/pages/docs/index.md::n.0f9c -->
      <!-- @iwp.link views/pages/docs/index.md::n.3623 -->
      <!-- @iwp.link views/pages/docs/index.md::n.6344 -->
      <p class="iwp-home-subtitle iwp-docs-subtitle">{{ t("docs", "subtitle") }}</p>
    </section>
    <!-- @iwp.link views/pages/docs/index.md::n.69b9 -->
    <section class="iwp-grid-2 iwp-docs-grid">
      <!-- @iwp.link views/pages/docs/index.md::n.89ae -->
      <!-- @iwp.link views/pages/docs/index.md::n.e2cf -->
      <DocCard
        v-for="doc in docs"
        :key="doc.id"
        :doc="doc"
        :locale="state.locale"
        :cta-label="t('actions', 'read')"
        @read="onRead(doc.id)"
      />
    </section>
  </main>
</template>
