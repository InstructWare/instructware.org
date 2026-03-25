import { computed, ref } from "vue";

type ThemeMode = "light" | "dark";

const mode = ref<ThemeMode>("light");

function applyTheme(next: ThemeMode) {
  mode.value = next;
  document.documentElement.classList.toggle("dark", next === "dark");
}

export function useTheme() {
  const isDark = computed(() => mode.value === "dark");

  function toggleTheme() {
    applyTheme(mode.value === "dark" ? "light" : "dark");
  }

  return {
    isDark,
    toggleTheme,
  };
}
