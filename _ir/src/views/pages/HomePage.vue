<script setup lang="ts">
// @iwp.link views/pages/home.md::n.4a7e
// @iwp.link views/pages/home.md::n.f7ab

import { useRouter } from "vitepress";
import { useIwpState } from "../../logic/store/useIwpState";

const router = useRouter();
// @iwp.link views/pages/home.md::n.8639
// @iwp.link views/pages/home.md::n.b94b
const { openDoc, t } = useIwpState();

// @iwp.link views/pages/home.md::n.2dbb
function onReadManifesto() {
  openDoc("manifesto", router);
}

// @iwp.link views/pages/home.md::n.9618
function onReadProtocol() {
  openDoc("protocol", router);
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// @iwp.link views/pages/home.md::n.3385
function onOpenGithubMain() {
  openExternal("https://github.com/InstructWare/instructware.org");
}

// @iwp.link views/pages/home.md::n.74f4
function onOpenGithubTooling() {
  openExternal("https://github.com/InstructWare/iwp-tools");
}

// @iwp.link views/pages/home.md::n.3ff0
function onJoinFeedbackProgram() {
  openExternal("https://github.com/InstructWare/instructware.org/issues/new/choose");
}

// @iwp.link views/pages/home.md::n.42af
function onOpenProtocolFeedback() {
  openExternal("https://github.com/InstructWare/instructware.org/issues/new/choose");
}

// @iwp.link views/pages/home.md::n.e0d2
function onOpenContentLicense() {
  openExternal(
    "https://github.com/InstructWare/instructware.org/blob/main/whitepaper/LICENSE-CC-BY-ND",
  );
}

type ContrastPart = {
  text: string;
  isContrastToken: boolean;
};

type ContrastStyle = "bold" | "pill";
const valuesContrastStyle: ContrastStyle = "bold";

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
</script>

<template>
  <!-- @iwp.link views/pages/home.md::n.732d -->
  <!-- @iwp.link views/pages/home.md::n.8e24 -->
  <!-- @iwp.link views/pages/home.md::n.a216 -->
  <!-- @iwp.link views/pages/home.md::n.af92 -->
  <!-- @iwp.link views/pages/home.md::n.fcdd -->
  <TopNavbar />
  <!-- @iwp.link views/pages/home.md::n.78a8 -->
  <!-- @iwp.link views/pages/home.md::n.93f4 -->
  <!-- @iwp.link views/pages/home.md::n.d1d8 -->
  <!-- @iwp.link views/pages/home.md::n.eed5 -->
  <main class="iwp-page iwp-home">
    <!-- @iwp.link views/pages/home.md::n.b30d -->
    <section class="iwp-hero iwp-hero-pro iwp-hover-card">
      <p class="iwp-kicker">{{ t("home", "kicker") }}</p>
      <!-- @iwp.link views/pages/home.md::n.cdb1 -->
      <!-- @iwp.link views/pages/home.md::n.ed3e -->
      <h1 class="iwp-home-title">{{ t("home", "heroTitle") }}</h1>
      <!-- @iwp.link views/pages/home.md::n.ba24 -->
      <p class="iwp-home-subtitle">{{ t("home", "heroSubtitle") }}</p>
      <div class="iwp-actions">
        <button class="iwp-btn brand iwp-btn-lg" @click="onReadManifesto">
          {{ t("actions", "readManifesto") }}
        </button>
        <button class="iwp-btn iwp-btn-lg" @click="onReadProtocol">
          {{ t("actions", "readProtocol") }}
        </button>
        <!-- @iwp.link views/pages/home.md::n.6106 -->
        <!-- @iwp.link views/pages/home.md::n.c985 -->
        <button class="iwp-btn iwp-btn-lg iwp-btn-github" @click="onJoinFeedbackProgram">
          {{ t("actions", "joinFeedback") }}
        </button>
      </div>
      <button class="iwp-hero-meta-link" @click="onOpenGithubTooling">
        {{ t("home", "heroToolingLink") }}
      </button>
    </section>

    <!-- @iwp.link views/pages/home.md::n.6106 -->
    <section class="iwp-home-section">
      <h2 class="iwp-section-title">{{ t("home", "sectionParadigm") }}</h2>
      <!-- @iwp.link views/pages/home.md::n.05b0 -->
      <div class="iwp-grid-2">
        <article class="iwp-card iwp-card-contrast iwp-hover-card">
          <h3>{{ t("home", "legacyTitle") }}</h3>
          <!-- @iwp.link views/pages/home.md::n.e207 -->
          <ul class="iwp-list-clean">
            <li>{{ t("home", "legacyStatic") }}</li>
            <li>{{ t("home", "legacyPrecompiled") }}</li>
            <li>{{ t("home", "legacyRigid") }}</li>
          </ul>
        </article>
        <article class="iwp-card iwp-card-contrast iwp-card-accent iwp-hover-card">
          <h3>{{ t("home", "iwTitle") }}</h3>
          <!-- @iwp.link views/pages/home.md::n.5d20 -->
          <ul class="iwp-list-clean">
            <li>{{ t("home", "iwDynamic") }}</li>
            <li>{{ t("home", "iwGenerative") }}</li>
            <li>{{ t("home", "iwSelfEvolving") }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- @iwp.link views/pages/home.md::n.29d4 -->
    <!-- @iwp.link views/pages/home.md::n.5e65 -->
    <section class="iwp-home-section">
      <h2 class="iwp-section-title">{{ t("home", "sectionLaws") }}</h2>
      <div class="iwp-grid-3">
        <article class="iwp-card iwp-law-card iwp-hover-card">
          <p class="iwp-law-index">Law I</p>
          <p>{{ t("home", "law1") }}</p>
        </article>
        <article class="iwp-card iwp-law-card iwp-hover-card">
          <p class="iwp-law-index">Law II</p>
          <p>{{ t("home", "law2") }}</p>
        </article>
        <article class="iwp-card iwp-law-card iwp-hover-card">
          <p class="iwp-law-index">Law III</p>
          <p>{{ t("home", "law3") }}</p>
        </article>
      </div>
    </section>

    <!-- @iwp.link views/pages/home.md::n.47af -->
    <section class="iwp-home-section">
      <article class="iwp-card iwp-hover-card">
        <h2 class="iwp-section-title-sm">{{ t("home", "sectionEssence") }}</h2>
        <ul class="iwp-list-clean">
          <!-- @iwp.link views/pages/home.md::n.06b6 -->
          <li>{{ t("home", "essence1") }}</li>
          <!-- @iwp.link views/pages/home.md::n.3091 -->
          <li>{{ t("home", "essence2") }}</li>
          <!-- @iwp.link views/pages/home.md::n.21e8 -->
          <li>{{ t("home", "essence3") }}</li>
        </ul>
      </article>
    </section>

    <!-- @iwp.link views/pages/home.md::n.5e65 -->
    <!-- @iwp.link views/pages/home.md::n.b66d -->
    <section :class="['iwp-home-section', 'iwp-values-focus', `iwp-values-style-${valuesContrastStyle}`]">
      <article class="iwp-card iwp-values-card iwp-hover-card">
        <h2 class="iwp-section-title">{{ t("home", "sectionValues") }}</h2>
        <ul class="iwp-list-clean">
          <li>
            <template v-for="(part, index) in splitContrast(t('home', 'value1'))" :key="`v1-${index}`">
              <span :class="{ 'iwp-contrast-token': part.isContrastToken }">{{ part.text }}</span>
            </template>
          </li>
          <li>
            <template v-for="(part, index) in splitContrast(t('home', 'value2'))" :key="`v2-${index}`">
              <span :class="{ 'iwp-contrast-token': part.isContrastToken }">{{ part.text }}</span>
            </template>
          </li>
          <li>
            <template v-for="(part, index) in splitContrast(t('home', 'value3'))" :key="`v3-${index}`">
              <span :class="{ 'iwp-contrast-token': part.isContrastToken }">{{ part.text }}</span>
            </template>
          </li>
          <li>
            <template v-for="(part, index) in splitContrast(t('home', 'value4'))" :key="`v4-${index}`">
              <span :class="{ 'iwp-contrast-token': part.isContrastToken }">{{ part.text }}</span>
            </template>
          </li>
        </ul>
      </article>
    </section>

    <!-- @iwp.link views/pages/home.md::n.fddd -->
    <!-- @iwp.link views/pages/home.md::n.84b5 -->
    <!-- @iwp.link views/pages/home.md::n.6401 -->
    <!-- @iwp.link views/pages/home.md::n.29c8 -->
    <!-- @iwp.link views/pages/home.md::n.7c4a -->
    <section class="iwp-home-section">
      <article class="iwp-card iwp-hover-card">
        <h2 class="iwp-section-title">{{ t("home", "sectionVision") }}</h2>
        <ul class="iwp-list-clean">
          <li>{{ t("home", "visionLead") }}</li>
          <li>{{ t("home", "visionBody") }}</li>
          <li>{{ t("home", "visionFootnote") }}</li>
        </ul>
      </article>
    </section>

    <!-- @iwp.link views/pages/home.md::n.11b4 -->
    <!-- @iwp.link views/pages/home.md::n.a327 -->
    <section class="iwp-card iwp-final-cta iwp-hover-card">
      <!-- @iwp.link views/pages/home.md::n.9204 -->
      <h2>{{ t("home", "tagline") }}</h2>
      <!-- @iwp.link views/pages/home.md::n.c580 -->
      <div class="iwp-actions">
        <button class="iwp-btn" @click="onReadManifesto">
          {{ t("actions", "readManifesto") }}
        </button>
        <button class="iwp-btn" @click="onReadProtocol">
          {{ t("actions", "readProtocol") }}
        </button>
        <!-- @iwp.link views/pages/home.md::n.6a9e -->
        <button class="iwp-btn" @click="onJoinFeedbackProgram">
          {{ t("actions", "joinFeedback") }}
        </button>
      </div>
    </section>

    <!-- @iwp.link views/pages/home.md::n.0d96 -->
    <section class="iwp-home-footer">
      <div class="iwp-home-footer-grid">
        <p class="iwp-home-footer-item">
          <span class="iwp-home-footer-label">{{ t("home", "footerCopyrightLabel") }}</span>
          <span>{{ t("home", "footerCopyrightValue") }}</span>
        </p>
        <p class="iwp-home-footer-item">
          <span class="iwp-home-footer-label">{{ t("home", "footerContentLicenseLabel") }}</span>
          <button class="iwp-home-footer-link" @click="onOpenContentLicense">
            {{ t("home", "footerContentLicenseValue") }}
          </button>
        </p>
        <p class="iwp-home-footer-item">
          <span class="iwp-home-footer-label">{{ t("home", "footerProtocolStatusLabel") }}</span>
          <!-- @iwp.link views/pages/home.md::n.90c6 -->
          <span>{{ t("home", "footerProtocolStatusValue") }}</span>
        </p>
        <p class="iwp-home-footer-item">
          <span class="iwp-home-footer-label">{{ t("home", "footerFeedbackLabel") }}</span>
          <!-- @iwp.link views/pages/home.md::n.d4f2 -->
          <button class="iwp-home-footer-link" @click="onOpenProtocolFeedback">
            {{ t("home", "footerFeedbackValue") }}
          </button>
        </p>
        <p class="iwp-home-footer-item">
          <span class="iwp-home-footer-label">{{ t("home", "footerGithubLabel") }}</span>
          <button class="iwp-home-footer-link" @click="onOpenGithubMain">
            {{ t("home", "footerGithubValue") }}
          </button>
        </p>
      </div>
    </section>
  </main>
</template>
