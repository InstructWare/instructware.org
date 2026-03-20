import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";

const configDir = dirname(fileURLToPath(import.meta.url));
const siteRootDir = resolve(configDir, "..");
const repoRootDir = resolve(siteRootDir, "..");

export default defineConfig({
  title: "InstructWare.org",
  description: "Official website for InstructWare and IWP",
  appearance: false,
  lastUpdated: false,
  cleanUrls: true,
  srcExclude: ["**/node_modules/**"],
  vite: {
    server: {
      fs: {
        // Allow loading markdown assets from the repository parent directories.
        allow: [repoRootDir],
      },
    },
  },
  themeConfig: {
    nav: [],
    outline: false,
  },
});
