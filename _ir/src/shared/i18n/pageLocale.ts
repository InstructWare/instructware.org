import type { SupportedLocale } from "../types/docs";

export const PAGE_COPY_KEYS = {
  home: [
    "hero.eyebrow",
    "hero.headline",
    "hero.subheadline",
    "hero.action.read_manifesto",
    "hero.action.read_protocol",
    "hero.action.join_feedback",
    "hero.link.tooling",
    "contrast.section_title",
    "contrast.legacy.title",
    "contrast.legacy.point_1",
    "contrast.legacy.point_2",
    "contrast.legacy.point_3",
    "contrast.iw.title",
    "contrast.iw.point_1",
    "contrast.iw.point_2",
    "contrast.iw.point_3",
    "laws.section_title",
    "laws.item_1",
    "laws.item_2",
    "laws.item_3",
    "start.section_title",
    "start.step_1",
    "start.step_2",
    "start.step_3",
    "values.section_title",
    "values.item_1",
    "values.item_2",
    "values.item_3",
    "values.item_4",
    "vision.section_title",
    "vision.lead",
    "vision.body",
    "vision.footnote",
    "final_cta.tagline",
    "final_cta.action_manifesto",
    "final_cta.action_protocol",
    "final_cta.action_feedback",
    "footer.copyright_label",
    "footer.content_license_label",
    "footer.protocol_status_label",
    "footer.feedback_label",
    "footer.source_code_label",
  ],
  docs: [
    "header.title",
    "header.subtitle",
    "header.helper_note",
    "manifesto.title",
    "manifesto.summary",
    "manifesto.status",
    "manifesto.action_open",
    "protocol.title",
    "protocol.summary",
    "protocol.status",
    "protocol.action_open",
    "notice.title",
    "notice.point_1",
    "notice.point_2",
    "footer.action_back_home",
    "footer.action_feedback",
  ],
  "docs-reader": [
    "header.current_doc_title",
    "header.current_doc_status",
    "header.current_locale",
    "toolbar.switch_manifesto",
    "toolbar.switch_protocol",
    "toolbar.back_docs_center",
    "viewport.loading",
    "viewport.empty",
    "footer.progress_hint",
    "footer.open_source_markdown",
  ],
} as const;

export type PageId = keyof typeof PAGE_COPY_KEYS;
type PageCopyKeyMap = {
  [TPage in PageId]: (typeof PAGE_COPY_KEYS)[TPage][number];
};
export type PageCopyKey<TPage extends PageId> = PageCopyKeyMap[TPage];
export type PageCopyMap = {
  [TPage in PageId]: Record<PageCopyKey<TPage>, string>;
};

type LocaleCacheKey = `${PageId}:${SupportedLocale}`;
const LOCALE_CACHE: Partial<Record<LocaleCacheKey, Record<string, string>>> = {};
type LocaleLoader = () => Promise<string>;

const LOCALE_LOADERS: Record<LocaleCacheKey, LocaleLoader> = {
  "home:en": async () =>
    (await import("../../../../InstructWare.iw/pages/home/locales/en.md?raw")).default,
  "home:zh": async () =>
    (await import("../../../../InstructWare.iw/pages/home/locales/zh.md?raw")).default,
  "docs:en": async () =>
    (await import("../../../../InstructWare.iw/pages/docs/locales/en.md?raw")).default,
  "docs:zh": async () =>
    (await import("../../../../InstructWare.iw/pages/docs/locales/zh.md?raw")).default,
  "docs-reader:en": async () =>
    (await import("../../../../InstructWare.iw/pages/docs-reader/locales/en.md?raw")).default,
  "docs-reader:zh": async () =>
    (await import("../../../../InstructWare.iw/pages/docs-reader/locales/zh.md?raw")).default,
};

function parseLocaleMarkdown(markdown: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const line of markdown.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.indexOf("- ") !== 0) {
      continue;
    }
    const body = trimmed.slice(2).trim();
    const separatorIndex = body.indexOf(":");
    if (separatorIndex <= 0) {
      continue;
    }
    const key = body.slice(0, separatorIndex).trim();
    const value = body.slice(separatorIndex + 1).trim();
    if (key) {
      map[key] = value;
    }
  }
  return map;
}

function buildPageCopy<TPage extends PageId>(
  pageId: TPage,
  parsed: Record<string, string>,
): PageCopyMap[TPage] {
  const expectedKeys = PAGE_COPY_KEYS[pageId];
  const missingKeys = expectedKeys.filter((key) => !(key in parsed));
  if (missingKeys.length > 0) {
    throw new Error(`Missing locale keys for ${pageId}: ${missingKeys.join(", ")}`);
  }
  return Object.fromEntries(
    expectedKeys.map((key) => [key, parsed[key] ?? ""]),
  ) as PageCopyMap[TPage];
}

export async function loadPageLocale<TPage extends PageId>(
  pageId: TPage,
  locale: SupportedLocale,
): Promise<PageCopyMap[TPage]> {
  const cacheKey = `${pageId}:${locale}` as LocaleCacheKey;
  const cached = LOCALE_CACHE[cacheKey];
  if (cached) {
    return cached as PageCopyMap[TPage];
  }
  const loader = LOCALE_LOADERS[cacheKey];
  if (!loader) {
    throw new Error(`No locale loader registered for ${cacheKey}`);
  }
  const markdown = await loader();
  const parsed = parseLocaleMarkdown(markdown);
  const pageCopy = buildPageCopy(pageId, parsed);
  LOCALE_CACHE[cacheKey] = pageCopy;
  return pageCopy;
}
