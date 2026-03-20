<script setup lang="ts">
// @iwp.link views/components/lang_switcher.md::n.5d83

import { onBeforeUnmount, onMounted, ref } from "vue";
import { useIwpState } from "../../logic/store/useIwpState";
import type { Locale } from "../../models/content/types";

const { state, setLocale } = useIwpState();
// @iwp.link views/components/lang_switcher.md::n.07ab
// @iwp.link views/components/lang_switcher.md::n.2a65
const options: Locale[] = ["zh-CN", "en-US"];
const menuOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);
const DROPDOWN_OPEN_EVENT = "iwp:dropdown-open";
const DROPDOWN_SOURCE = "locale";

// @iwp.link views/components/lang_switcher.md::n.2fb3
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

function onChange(locale: Locale) {
  // @iwp.link logic/ui/on_switch_language.md::n.838e
  // @iwp.link views/components/lang_switcher.md::n.3b62
  // @iwp.link views/components/lang_switcher.md::n.6e98
  setLocale(locale);
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
  <!-- @iwp.link views/components/lang_switcher.md::n.e980 -->
  <div ref="rootRef" class="iwp-dropdown">
    <!-- @iwp.link views/components/lang_switcher.md::n.09d3 -->
    <!-- @iwp.link views/components/lang_switcher.md::n.4f12 -->
    <!-- @iwp.link views/components/lang_switcher.md::n.6595 -->
    <button
      class="iwp-btn iwp-locale-btn"
      aria-label="Language switcher"
      :aria-expanded="menuOpen"
      @click.stop="toggleMenu"
    >
      <!-- @iwp.link views/components/lang_switcher.md::n.3216 -->
      <!-- @iwp.link views/components/lang_switcher.md::n.ea4a -->
      {{ state.locale === "zh-CN" ? "中文" : "EN" }}
    </button>
    <!-- @iwp.link views/components/lang_switcher.md::n.2fb3 -->
    <div v-if="menuOpen" class="iwp-menu" role="menu">
      <!-- @iwp.link views/components/lang_switcher.md::n.4f12 -->
      <!-- @iwp.link views/components/lang_switcher.md::n.74ad -->
      <!-- @iwp.link views/components/lang_switcher.md::n.db0d -->
      <button
        v-for="locale in options"
        :key="locale"
        class="iwp-menu-item"
        :class="{ active: state.locale === locale }"
        :aria-pressed="state.locale === locale"
        @click="onChange(locale)"
      >
        {{ locale === "zh-CN" ? "中文" : "EN" }}
      </button>
    </div>
  </div>
</template>
