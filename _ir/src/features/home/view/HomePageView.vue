<script setup lang="ts">
import { computed, watch } from "vue";
import AppHeader from "../../../components/layout/AppHeader.vue";
import { usePageCopy } from "../../../shared/composables/usePageCopy";
import { useDocsRuntimeStore } from "../../docs-runtime/store";
import { useHomeActions } from "../composables/useHomeActions";

type ContrastPart = {
  text: string;
  isContrastToken: boolean;
};

const { runtime } = useDocsRuntimeStore();
// @iwp.link pages/home.md::n.5242
// @iwp.link pages/home.md::n.b460
// @iwp.link pages/home.md::n.d898
const { t, setLocale } = usePageCopy("home", runtime.value.uiPrefsLocale);
const {
  openManifesto,
  openProtocol,
  openFeedback,
  openTooling,
} = useHomeActions();

watch(
  () => runtime.value.uiPrefsLocale,
  (nextLocale) => {
    setLocale(nextLocale);
  },
  { immediate: true },
);

function splitContrast(text: string): ContrastPart[] {
  const splitRegex = /(\sover\s|而非|而不是|替代)/g;
  const contrastTokens = new Set([" over ", "而非", "而不是", "替代"]);

  return text
    .split(splitRegex)
    .filter((segment) => segment.length > 0)
    .map((segment) => ({
      text: segment,
      isContrastToken: contrastTokens.has(segment),
    }));
}

const laws = computed(() => [t("laws.item_1"), t("laws.item_2"), t("laws.item_3")].filter(Boolean));
const startSteps = computed(() =>
  [t("start.step_1"), t("start.step_2"), t("start.step_3")].filter(Boolean),
);
const values = computed(() =>
  [t("values.item_1"), t("values.item_2"), t("values.item_3"), t("values.item_4")].filter(Boolean),
);
const vision = computed(() => [t("vision.lead"), t("vision.body"), t("vision.footnote")].filter(Boolean));
</script>

<template>
  <!-- @iwp.link pages/home.md::n.7c56 -->
  <AppHeader />
  <main class="container page home-page">
    <!-- @iwp.link pages/home.md::n.9877 -->
    <section class="card hero home-surface">
      <button class="hero-tooling-link" type="button" @click="openTooling">
        {{ t("hero.link.tooling") }}
      </button>
      <p class="eyebrow">{{ t("hero.eyebrow") }}</p>
      <h1>{{ t("hero.headline") }}</h1>
      <p class="lead hero-subheadline">{{ t("hero.subheadline") }}</p>
      <div class="actions hero-actions">
        <button class="btn btn-primary" type="button" @click="openManifesto">
          {{ t("hero.action.read_manifesto") }}
        </button>
        <button class="btn" type="button" @click="openProtocol">
          {{ t("hero.action.read_protocol") }}
        </button>
        <button class="btn btn-ghost" type="button" @click="openFeedback">
          {{ t("hero.action.join_feedback") }}
        </button>
      </div>
    </section>

    <!-- @iwp.link pages/home.md::n.ac24 -->
    <section class="home-section">
      <h2>{{ t("contrast.section_title") }}</h2>
      <div class="two-column">
        <article class="card home-surface contrast-card">
          <h3>{{ t("contrast.legacy.title") }}</h3>
          <ul>
            <li>{{ t("contrast.legacy.point_1") }}</li>
            <li>{{ t("contrast.legacy.point_2") }}</li>
            <li>{{ t("contrast.legacy.point_3") }}</li>
          </ul>
        </article>
        <article class="card home-surface contrast-card">
          <h3>{{ t("contrast.iw.title") }}</h3>
          <ul>
            <li>{{ t("contrast.iw.point_1") }}</li>
            <li>{{ t("contrast.iw.point_2") }}</li>
            <li>{{ t("contrast.iw.point_3") }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- @iwp.link pages/home.md::n.003d -->
    <section class="home-section">
      <h2>{{ t("laws.section_title") }}</h2>
      <div class="laws-grid">
        <article v-for="(law, index) in laws" :key="`law-${index}`" class="card home-surface law-card">
          <p class="law-index">Law {{ index + 1 }}</p>
          <p>{{ law }}</p>
        </article>
      </div>
    </section>

    <!-- @iwp.link pages/home.md::n.c7e3 -->
    <section class="card home-surface">
      <h2>{{ t("start.section_title") }}</h2>
      <ol class="ordered-list">
        <li v-for="(step, index) in startSteps" :key="`step-${index}`">
          {{ step }}
        </li>
      </ol>
    </section>

    <!-- @iwp.link pages/home.md::n.1294 -->
    <section class="card home-surface values-card">
      <h2>{{ t("values.section_title") }}</h2>
      <ul class="values-list">
        <li v-for="(value, index) in values" :key="`value-${index}`">
          <template v-for="(part, segmentIndex) in splitContrast(value)" :key="`value-${index}-${segmentIndex}`">
            <span :class="{ 'contrast-token': part.isContrastToken }">{{ part.text }}</span>
          </template>
        </li>
      </ul>
    </section>

    <!-- @iwp.link pages/home.md::n.9f0a -->
    <section class="card home-surface">
      <h2>{{ t("vision.section_title") }}</h2>
      <ul>
        <li v-for="(item, index) in vision" :key="`vision-${index}`">
          {{ item }}
        </li>
      </ul>
    </section>

    <!-- @iwp.link pages/home.md::n.dc58 -->
    <section class="card home-surface final-cta">
      <h2>{{ t("final_cta.tagline") }}</h2>
      <div class="actions">
        <button class="btn btn-primary" type="button" @click="openManifesto">
          {{ t("final_cta.action_manifesto") }}
        </button>
        <button class="btn" type="button" @click="openProtocol">
          {{ t("final_cta.action_protocol") }}
        </button>
        <button class="btn btn-ghost" type="button" @click="openFeedback">
          {{ t("final_cta.action_feedback") }}
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* @iwp.link pages/home.md::n.82b9 */
.home-page {
  gap: var(--iwp-space-4);
}

.home-surface {
  background:
    radial-gradient(120% 140% at 100% 0%, color-mix(in srgb, var(--iwp-primary) 3%, transparent), transparent 68%),
    var(--iwp-surface);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.home-surface:hover {
  border-color: color-mix(in srgb, var(--iwp-primary) 25%, var(--iwp-border));
  box-shadow: 0 6px 18px var(--iwp-shadow-soft);
}

.hero {
  position: relative;
  padding: clamp(28px, 5vw, 52px);
}

.hero h1 {
  font-size: clamp(2rem, 4vw, 2.9rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  margin: 0 0 var(--iwp-space-2);
}

.hero-subheadline {
  max-width: 760px;
  margin-bottom: var(--iwp-space-3);
  color: var(--iwp-text-muted);
  font-size: 1.02rem;
}

.hero-actions {
  margin-bottom: var(--iwp-space-2);
}

.hero-tooling-link {
  position: absolute;
  top: 20px;
  right: 22px;
  border: 1px solid var(--iwp-border);
  border-radius: 999px;
  padding: 6px 12px;
  background: var(--iwp-surface-elevated);
  color: var(--iwp-text-muted);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
}

.hero-tooling-link:hover {
  text-decoration: none;
  color: var(--iwp-primary);
  border-color: color-mix(in srgb, var(--iwp-primary) 28%, var(--iwp-border));
  background: var(--iwp-surface-muted);
}

.contrast-card {
  padding: var(--iwp-space-2);
}

.contrast-card ul {
  display: grid;
  gap: 12px;
  margin: 0;
  padding-left: 1.3rem;
}

.home-section h2 {
  margin: 0 0 var(--iwp-space-2);
  font-size: 1.5rem;
}

.laws-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--iwp-space-2);
}

.law-card {
  padding: var(--iwp-space-2);
}

.law-index {
  color: var(--iwp-primary);
  font-family: var(--iwp-mono);
  font-size: 0.82rem;
  font-weight: 600;
  margin-top: 0;
}

.ordered-list {
  display: grid;
  gap: 12px;
  padding-left: 1.3rem;
}

.values-card {
  border-color: var(--iwp-border);
}

.values-list {
  display: grid;
  gap: 12px;
}

.contrast-token {
  color: var(--iwp-primary);
  font-weight: 600;
}

.final-cta {
  text-align: center;
}

.final-cta .actions {
  justify-content: center;
}

@media (max-width: 900px) {
  .hero-tooling-link {
    position: static;
    margin-bottom: var(--iwp-space-2);
  }
}

:global(.dark) .home-surface {
  background:
    radial-gradient(120% 140% at 100% 0%, color-mix(in srgb, var(--iwp-primary) 12%, transparent), transparent 72%),
    var(--iwp-surface);
}

</style>
