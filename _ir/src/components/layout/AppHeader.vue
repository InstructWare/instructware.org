<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useDocsRuntimeStore } from "../../features/docs-runtime/store";
import { useTheme } from "../../shared/theme/useTheme";

const route = useRoute();
const { runtime, setLocale } = useDocsRuntimeStore();
const { isDark, toggleTheme } = useTheme();
const isZh = computed(() => runtime.value.uiPrefsLocale === "zh");
const homeLabel = computed(() => (isZh.value ? "首页" : "Home"));
const docsLabel = computed(() => (isZh.value ? "文档" : "Docs"));
const localeGroupLabel = computed(() => (isZh.value ? "选择语言" : "Select locale"));
const themeToggleLabel = computed(() => (isZh.value ? "切换主题" : "Toggle theme"));
const themeToggleText = computed(() => {
  if (isZh.value) {
    return isDark.value ? "浅色" : "深色";
  }
  return isDark.value ? "Light" : "Dark";
});
</script>

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <RouterLink class="brand" to="/">InstructWare</RouterLink>
      <nav class="nav">
        <RouterLink
          class="nav-link"
          :class="{ active: route.path === '/' }"
          :aria-current="route.path === '/' ? 'page' : undefined"
          to="/"
        >
          {{ homeLabel }}
        </RouterLink>
        <RouterLink
          class="nav-link"
          :class="{ active: route.path.startsWith('/docs') }"
          :aria-current="route.path.startsWith('/docs') ? 'page' : undefined"
          to="/docs"
        >
          {{ docsLabel }}
        </RouterLink>
      </nav>
      <div class="app-header__controls">
        <div class="locale-toggle" role="group" :aria-label="localeGroupLabel">
          <button
            class="locale-toggle__button"
            :class="{ active: runtime.uiPrefsLocale === 'zh' }"
            :aria-pressed="runtime.uiPrefsLocale === 'zh'"
            type="button"
            @click="setLocale('zh')"
          >
            中文
          </button>
          <button
            class="locale-toggle__button"
            :class="{ active: runtime.uiPrefsLocale === 'en' }"
            :aria-pressed="runtime.uiPrefsLocale === 'en'"
            type="button"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>
        <button
          class="theme-toggle"
          :aria-label="themeToggleLabel"
          :aria-pressed="isDark"
          type="button"
          @click="toggleTheme"
        >
          {{ themeToggleText }}
        </button>
      </div>
    </div>
  </header>
</template>
