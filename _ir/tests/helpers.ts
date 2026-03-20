import { vi } from "vitest";

export interface MockRouter {
  go: ReturnType<typeof vi.fn>;
}

function escapeCssIdentifier(value: string): string {
  return value.replace(/(^-?\d)|[^a-zA-Z0-9_-]/g, (char, leadingDigit: string) => {
    if (leadingDigit) {
      return `\\3${leadingDigit} `;
    }
    return `\\${char}`;
  });
}

function ensureDomApis(): void {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      matches: false,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  const globalObject = globalThis as any;
  if (!globalObject.CSS) {
    globalObject.CSS = { escape: escapeCssIdentifier };
    return;
  }
  if (typeof globalObject.CSS.escape !== "function") {
    globalObject.CSS.escape = escapeCssIdentifier;
  }
}

export async function createStore(options?: { clearStorage?: boolean }) {
  vi.resetModules();
  if (options?.clearStorage ?? false) {
    window.localStorage.clear();
  }
  document.documentElement.className = "";
  document.documentElement.dataset.themeMode = "";
  ensureDomApis();
  const mod = await import("../src/logic/store/useIwpState");
  return mod.useIwpState();
}

export function createRouter(): MockRouter {
  return {
    go: vi.fn(),
  };
}
