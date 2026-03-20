import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./style.css";

// IWP links migrated from _ir/src/iwp_links.ts
// @iwp.link system.md::n.0052
// @iwp.link system.md::n.01fa
// @iwp.link system.md::n.0e3b
// @iwp.link system.md::n.1981
// @iwp.link system.md::n.2d12
// @iwp.link system.md::n.2fd3
// @iwp.link system.md::n.351a
// @iwp.link system.md::n.3dba
// @iwp.link system.md::n.415b
// @iwp.link system.md::n.5c60
// @iwp.link system.md::n.6066
// @iwp.link system.md::n.6f49
// @iwp.link system.md::n.6fd3
// @iwp.link system.md::n.7138
// @iwp.link system.md::n.7e07
// @iwp.link system.md::n.7e51
// @iwp.link system.md::n.8675
// @iwp.link system.md::n.8912
// @iwp.link system.md::n.9e5f
// @iwp.link system.md::n.aa20
// @iwp.link system.md::n.aed4
// @iwp.link system.md::n.d1f6
// @iwp.link system.md::n.d2df
// @iwp.link system.md::n.dd75

import TopNavbar from "../../src/views/components/TopNavbar.vue";
import ThemeSwitcher from "../../src/views/components/ThemeSwitcher.vue";
import LangSwitcher from "../../src/views/components/LangSwitcher.vue";
import DocCard from "../../src/views/components/DocCard.vue";
import DocReader from "../../src/views/components/DocReader.vue";
import HomePage from "../../src/views/pages/HomePage.vue";
import DocsCenterPage from "../../src/views/pages/DocsCenterPage.vue";
import DocReaderPage from "../../src/views/pages/DocReaderPage.vue";

const theme: Theme = {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("TopNavbar", TopNavbar);
    app.component("ThemeSwitcher", ThemeSwitcher);
    app.component("LangSwitcher", LangSwitcher);
    app.component("DocCard", DocCard);
    app.component("DocReader", DocReader);
    app.component("HomePage", HomePage);
    app.component("DocsCenterPage", DocsCenterPage);
    app.component("DocReaderPage", DocReaderPage);
  },
};

export default theme;
