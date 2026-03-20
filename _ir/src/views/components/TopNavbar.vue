<script setup lang="ts">
// @iwp.link views/components/top_navbar.md::n.5374
// @iwp.link views/components/top_navbar.md::n.5d0e

import { ref } from "vue";
import { useRouter } from "vitepress";
import { useIwpState } from "../../logic/store/useIwpState";

const router = useRouter();
const { t } = useIwpState();
const mobileOpen = ref(false);

// @iwp.link views/components/top_navbar.md::n.53a0
function goHome() {
  // @iwp.link views/components/top_navbar.md::n.1e15
  // @iwp.link views/components/top_navbar.md::n.b9e1
  mobileOpen.value = false;
  router.go("/");
}

function goDocs() {
  // @iwp.link views/components/top_navbar.md::n.1f13
  mobileOpen.value = false;
  router.go("/docs");
}

function toggleMobileMenu() {
  // @iwp.link views/components/top_navbar.md::n.f2fb
  mobileOpen.value = !mobileOpen.value;
}
</script>

<template>
  <!-- @iwp.link views/components/top_navbar.md::n.1b5f -->
  <!-- @iwp.link views/components/top_navbar.md::n.267d -->
  <!-- @iwp.link views/components/top_navbar.md::n.f210 -->
  <header class="iwp-nav">
    <!-- @iwp.link views/components/top_navbar.md::n.02cd -->
    <!-- @iwp.link views/components/top_navbar.md::n.38cc -->
    <div class="iwp-nav-inner">
      <!-- @iwp.link views/components/top_navbar.md::n.a439 -->
      <div class="iwp-nav-primary">
        <div class="iwp-brand-wrap">
          <!-- @iwp.link views/components/top_navbar.md::n.3fdb -->
          <a class="iwp-brand" @click.prevent="goHome">InstructWare</a>
          <!-- @iwp.link views/components/top_navbar.md::n.bf64 -->
          <div class="iwp-sub">Natural Language is Source Code</div>
        </div>
        <!-- @iwp.link views/components/top_navbar.md::n.0c2d -->
        <nav class="iwp-nav-links iwp-nav-links-desktop">
          <!-- @iwp.link views/components/top_navbar.md::n.8527 -->
          <button class="iwp-btn" @click="goHome">{{ t("nav", "home") }}</button>
          <!-- @iwp.link views/components/top_navbar.md::n.f185 -->
          <button class="iwp-btn" @click="goDocs">{{ t("nav", "docs") }}</button>
        </nav>
      </div>
      <!-- @iwp.link views/components/top_navbar.md::n.340c -->
      <!-- @iwp.link views/components/top_navbar.md::n.ca71 -->
      <button class="iwp-btn iwp-mobile-menu-btn" @click="toggleMobileMenu">
        {{ t("nav", "menu") }}
      </button>
      <!-- @iwp.link views/components/top_navbar.md::n.6c7d -->
      <div class="iwp-actions iwp-actions-desktop">
        <!-- @iwp.link views/components/top_navbar.md::n.7309 -->
        <!-- @iwp.link views/components/top_navbar.md::n.c06d -->
        <ThemeSwitcher />
        <!-- @iwp.link views/components/top_navbar.md::n.29ab -->
        <!-- @iwp.link views/components/top_navbar.md::n.81a4 -->
        <LangSwitcher />
      </div>
    </div>
    <!-- @iwp.link views/components/top_navbar.md::n.13fd -->
    <!-- @iwp.link views/components/top_navbar.md::n.20af -->
    <!-- @iwp.link views/components/top_navbar.md::n.758a -->
    <div v-if="mobileOpen" class="iwp-mobile-panel">
      <div class="iwp-mobile-panel-inner">
        <nav class="iwp-nav-links iwp-nav-links-mobile">
          <button class="iwp-btn" @click="goHome">{{ t("nav", "home") }}</button>
          <button class="iwp-btn" @click="goDocs">{{ t("nav", "docs") }}</button>
        </nav>
        <div class="iwp-actions iwp-actions-mobile">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>
