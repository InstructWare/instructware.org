<script setup lang="ts">
import { watch } from "vue";
import AppHeader from "../../../components/layout/AppHeader.vue";
import { usePageCopy } from "../../../shared/composables/usePageCopy";
import { useDocsRuntimeStore } from "../../docs-runtime/store";
import { useDocsCenterActions } from "../composables/useDocsCenterActions";

const { runtime } = useDocsRuntimeStore();
// @iwp.link pages/docs.md::n.d7ca
const { t, setLocale } = usePageCopy("docs", runtime.value.uiPrefsLocale);
const { openManifesto, openProtocol } = useDocsCenterActions();

watch(
  () => runtime.value.uiPrefsLocale,
  (nextLocale) => {
    setLocale(nextLocale);
  },
  { immediate: true },
);
</script>

<template>
  <!-- @iwp.link pages/docs.md::n.dfd9 -->
  <AppHeader />
  <!-- @iwp.link pages/docs.md::n.184a -->
  <!-- @iwp.link pages/docs.md::n.3765 -->
  <!-- @iwp.link pages/docs.md::n.e41c -->
  <main class="container page">
    <!-- @iwp.link pages/docs.md::n.14c0 -->
    <section class="card">
      <h1>{{ t("header.title") }}</h1>
      <p class="lead">{{ t("header.subtitle") }}</p>
      <p class="lead">{{ t("header.helper_note") }}</p>
    </section>
    <!-- @iwp.link pages/docs.md::n.9eb2 -->
    <section class="cards-grid">
      <article class="card">
        <h2>{{ t("manifesto.title") }}</h2>
        <p>{{ t("manifesto.summary") }}</p>
        <span class="tag">{{ t("manifesto.status") }}</span>
        <button class="btn btn-primary" type="button" @click="openManifesto">
          {{ t("manifesto.action_open") }}
        </button>
      </article>
      <article class="card">
        <h2>{{ t("protocol.title") }}</h2>
        <p>{{ t("protocol.summary") }}</p>
        <span class="tag">{{ t("protocol.status") }}</span>
        <button class="btn btn-primary" type="button" @click="openProtocol">
          {{ t("protocol.action_open") }}
        </button>
      </article>
    </section>
    <!-- @iwp.link pages/docs.md::n.29eb -->
    <section class="card">
      <h2>{{ t("notice.title") }}</h2>
      <ul class="ordered-list">
        <li>{{ t("notice.point_1") }}</li>
        <li>{{ t("notice.point_2") }}</li>
      </ul>
    </section>
  </main>
</template>
