import { beforeEach, describe, expect, it } from "vitest";
import { createStore } from "../helpers";

describe("Theme & Language Preferences", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("persists dark theme after app restart", async () => {
    // @iwp.link tests/ui/test_theme_and_language.md::n.1376
    // @iwp.link tests/ui/test_theme_and_language.md::n.f748
    const store = await createStore({ clearStorage: true });
    store.setThemeMode("dark");

    const restartedStore = await createStore();
    restartedStore.initApp();

    expect(restartedStore.state.themeMode).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("updates nav labels when locale switches and keeps current route unchanged", async () => {
    // @iwp.link tests/ui/test_theme_and_language.md::n.1117
    const store = await createStore({ clearStorage: true });
    const currentRoute = "/docs/protocol";

    store.setLocale("zh-CN");

    expect(store.t("nav", "home")).toBe("首页");
    expect(store.t("nav", "docs")).toBe("文档");
    expect(currentRoute).toBe("/docs/protocol");
  });

  it("ignores invalid theme input", async () => {
    // @iwp.link tests/ui/test_theme_and_language.md::n.5f85
    const store = await createStore({ clearStorage: true });
    store.setThemeMode("system");

    store.setThemeMode("blue" as never);

    expect(store.state.themeMode).toBe("system");
  });
});
