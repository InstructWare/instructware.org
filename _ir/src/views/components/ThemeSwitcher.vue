<script setup lang="ts">
// @iwp.link views/components/theme_switcher.md::n.dfa0

import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useIwpState } from "../../logic/store/useIwpState";
import type { ThemeMode } from "../../models/content/types";

const { state, setThemeMode } = useIwpState();

const options: ThemeMode[] = ["light", "dark", "system"];
// @iwp.link views/components/theme_switcher.md::n.10d1
// @iwp.link views/components/theme_switcher.md::n.d662
// @iwp.link views/components/theme_switcher.md::n.df9e
// @iwp.link views/components/theme_switcher.md::n.e6f9
const labels: Record<ThemeMode, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};
const menuOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);
const DROPDOWN_OPEN_EVENT = "iwp:dropdown-open";
const DROPDOWN_SOURCE = "theme";

// @iwp.link views/components/theme_switcher.md::n.2c69
const currentIcon = computed(() => {
  // @iwp.link views/components/theme_switcher.md::n.7532
  if (state.themeMode === "light") {
    return "☀";
  }
  // @iwp.link views/components/theme_switcher.md::n.f12a
  if (state.themeMode === "dark") {
    return "☾";
  }
  // @iwp.link views/components/theme_switcher.md::n.1138
  return "◐";
});

// @iwp.link views/components/theme_switcher.md::n.1889
function toggleMenu() {
  const next = !menuOpen.value;
  menuOpen.value = next;
  if (next) {
    window.dispatchEvent(
      new CustomEvent(DROPDOWN_OPEN_EVENT, {
        detail: { source: DROPDOWN_SOURCE },
      }),
    );
  }
}

function onChange(mode: ThemeMode) {
  // @iwp.link logic/ui/on_toggle_theme.md::n.ef18
  // @iwp.link views/components/theme_switcher.md::n.2b77
  // @iwp.link views/components/theme_switcher.md::n.7af7
  setThemeMode(mode);
  menuOpen.value = false;
}

function onDocumentClick(event: MouseEvent) {
  if (!rootRef.value) {
    return;
  }
  const target = event.target as Node | null;
  if (target && !rootRef.value.contains(target)) {
    menuOpen.value = false;
  }
}

function onDropdownOpen(event: Event) {
  const custom = event as CustomEvent<{ source?: string }>;
  if (custom.detail?.source !== DROPDOWN_SOURCE) {
    menuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", onDocumentClick);
  window.addEventListener(DROPDOWN_OPEN_EVENT, onDropdownOpen as EventListener);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", onDocumentClick);
  window.removeEventListener(DROPDOWN_OPEN_EVENT, onDropdownOpen as EventListener);
});
</script>

<template>
  <!-- @iwp.link views/components/theme_switcher.md::n.75a4 -->
  <div ref="rootRef" class="iwp-dropdown">
    <!-- @iwp.link views/components/theme_switcher.md::n.2c69 -->
    <!-- @iwp.link views/components/theme_switcher.md::n.c019 -->
    <!-- @iwp.link views/components/theme_switcher.md::n.f231 -->
    <button
      class="iwp-btn iwp-icon-btn"
      aria-label="Theme switcher"
      :aria-expanded="menuOpen"
      @click.stop="toggleMenu"
    >
      {{ currentIcon }}
    </button>
    <!-- @iwp.link views/components/theme_switcher.md::n.1889 -->
    <div v-if="menuOpen" class="iwp-menu" role="menu">
      <!-- @iwp.link views/components/theme_switcher.md::n.8ba3 -->
      <!-- @iwp.link views/components/theme_switcher.md::n.a74d -->
      <!-- @iwp.link views/components/theme_switcher.md::n.c019 -->
      <!-- @iwp.link views/components/theme_switcher.md::n.cf14 -->
      <button
        v-for="mode in options"
        :key="mode"
        class="iwp-menu-item"
        :class="{ active: state.themeMode === mode }"
        :aria-pressed="state.themeMode === mode"
        @click="onChange(mode)"
      >
        {{ labels[mode] }}
      </button>
    </div>
  </div>
</template>
