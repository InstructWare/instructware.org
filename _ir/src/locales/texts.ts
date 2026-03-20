import { HOME_TEXTS } from "../models/content/home_content";
import { COMMON_TEXTS } from "./common";

export const TEXTS = {
  nav: COMMON_TEXTS.nav,
  actions: COMMON_TEXTS.actions,
  docs: COMMON_TEXTS.docs,
  // Home 顶层文案以 locales/common.* 为协议来源，补充页内扩展键来自 home_content。
  home: {
    ...COMMON_TEXTS.home,
    ...HOME_TEXTS,
  },
} as const;
