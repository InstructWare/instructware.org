import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["tests/**/*.spec.ts"],
    globals: true,
    restoreMocks: true,
    clearMocks: true,
  },
});
