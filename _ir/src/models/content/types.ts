export type Locale = "zh-CN" | "en-US";
export type ThemeMode = "light" | "dark" | "system";
export type DocId = "manifesto" | "protocol";

export interface DocMeta {
  // @iwp.link models/content/doc_catalog.md::n.69cf
  id: DocId;
  // @iwp.link models/content/doc_catalog.md::n.c6b7
  // @iwp.link models/content/doc_catalog.md::n.d364
  title: Record<Locale, string>;
  // @iwp.link models/content/doc_catalog.md::n.2de1
  // @iwp.link models/content/doc_catalog.md::n.4fe0
  summary: Record<Locale, string>;
  // @iwp.link models/content/doc_catalog.md::n.ce15
  tags: string[];
  // @iwp.link models/content/doc_catalog.md::n.173c
  order: number;
}

export interface DocArtifacts {
  html: string;
}
