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
  <!-- @iwp.link pages/home.md::n.4a7f -->
  <AppHeader />
  <main class="container page home-page">
    <!-- @iwp.link pages/home.md::n.3a74 -->
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

    <!-- @iwp.link pages/home.md::n.9373 -->
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

    <!-- @iwp.link pages/home.md::n.7a6e -->
    <section class="home-section">
      <h2>{{ t("laws.section_title") }}</h2>
      <div class="laws-grid">
        <article v-for="(law, index) in laws" :key="`law-${index}`" class="card home-surface law-card">
          <p class="law-index">Law {{ index + 1 }}</p>
          <p>{{ law }}</p>
        </article>
      </div>
    </section>

    <!-- @iwp.link pages/home.md::n.2543 -->
    <section class="card home-surface">
      <h2>{{ t("start.section_title") }}</h2>
      <ol class="ordered-list">
        <li v-for="(step, index) in startSteps" :key="`step-${index}`">
          {{ step }}
        </li>
      </ol>
    </section>

    <!-- @iwp.link pages/home.md::n.da38 -->
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

    <!-- @iwp.link pages/home.md::n.b630 -->
    <section class="card home-surface">
      <h2>{{ t("vision.section_title") }}</h2>
      <ul>
        <li v-for="(item, index) in vision" :key="`vision-${index}`">
          {{ item }}
        </li>
      </ul>
    </section>

    <!-- @iwp.link pages/home.md::n.672a -->
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
.home-page {
  gap: var(--iwp-space-4);
}

.home-surface {
  background:
    radial-gradient(140% 140% at 100% 0%, color-mix(in srgb, var(--iwp-primary) 4%, transparent), transparent 72%),
    var(--iwp-surface);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.home-surface:hover {
  border-color: color-mix(in srgb, var(--iwp-primary) 35%, var(--iwp-border));
  transform: translateY(-1px);
  box-shadow: 0 10px 30px var(--iwp-shadow-soft);
}

.hero {
  position: relative;
  padding: clamp(24px, 5vw, 48px);
}

.hero h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  margin: 0 0 var(--iwp-space-2);
}

.hero-subheadline {
  max-width: 760px;
  margin-bottom: var(--iwp-space-3);
}

.hero-actions {
  margin-bottom: var(--iwp-space-2);
}

.hero-tooling-link {
  position: absolute;
  top: 18px;
  right: 20px;
  border: 1px solid color-mix(in srgb, var(--iwp-primary) 28%, var(--iwp-border));
  border-radius: 999px;
  padding: 6px 12px;
  background: color-mix(in srgb, var(--iwp-primary) 6%, var(--iwp-surface));
  color: var(--iwp-primary);
  cursor: pointer;
  font-size: 0.88rem;
}

.hero-tooling-link:hover {
  text-decoration: underline;
}

.contrast-card {
  padding: var(--iwp-space-2);
}

.home-section h2 {
  margin: 0 0 var(--iwp-space-2);
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
    radial-gradient(140% 140% at 100% 0%, color-mix(in srgb, var(--iwp-primary) 9%, transparent), transparent 74%),
    var(--iwp-surface);
}

</style>
