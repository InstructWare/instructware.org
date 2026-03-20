import type { DocId, DocMeta, Locale } from "./types";

import manifestoZhRaw from "../../../../whitepaper/manifesto_zh.md?raw";
import manifestoEnRaw from "../../../../whitepaper/manifesto.md?raw";
import protocolZhRaw from "../../../../protocol/IWP-v1-zh.md?raw";
import protocolEnRaw from "../../../../protocol/IWP-v1.md?raw";

// @iwp.link models/content/doc_catalog.md::n.54a1
// @iwp.link models/content/doc_catalog.md::n.db7f
// @iwp.link models/content/doc_catalog.md::n.f9f7
const DOC_META: DocMeta[] = [
  {
    // @iwp.link models/content/doc_catalog.md::n.4b66
    id: "manifesto",
    title: {
      // @iwp.link models/content/doc_catalog.md::n.bbe8
      "zh-CN": "InstructWare 宣言",
      // @iwp.link models/content/doc_catalog.md::n.54a3
      "en-US": "The InstructWare Manifesto",
    },
    summary: {
      // @iwp.link models/content/doc_catalog.md::n.1de3
      "zh-CN": "定义从静态软件向自然语言驱动动态计算范式的转移。",
      // @iwp.link models/content/doc_catalog.md::n.6aaa
      "en-US":
        "Defines the transition from static software to natural language-driven dynamic computing.",
    },
    // @iwp.link models/content/doc_catalog.md::n.291c
    tags: ["concept", "vision", "values"],
    // @iwp.link models/content/doc_catalog.md::n.d795
    order: 1,
  },
  {
    // @iwp.link models/content/doc_catalog.md::n.4b66
    id: "protocol",
    title: {
      // @iwp.link models/content/doc_catalog.md::n.d18b
      "zh-CN": "IWP 核心规范 v1.0",
      // @iwp.link models/content/doc_catalog.md::n.55e7
      "en-US": "IWP Core Specification v1.0",
    },
    summary: {
      // @iwp.link models/content/doc_catalog.md::n.1485
      "zh-CN": "定义 InstructWare 自然语言源码包的工程化结构与约束。",
      // @iwp.link models/content/doc_catalog.md::n.526c
      "en-US":
        "Defines engineering structure and constraints for InstructWare natural language source bundles.",
    },
    // @iwp.link models/content/doc_catalog.md::n.d438
    tags: ["specification", "bundle", "architecture"],
    // @iwp.link models/content/doc_catalog.md::n.b2ec
    order: 2,
  },
];

// @iwp.link models/content/doc_catalog.md::n.26ae
// @iwp.link models/content/doc_catalog.md::n.80d8
const DOC_ASSET_PATHS: Record<DocId, Record<Locale, string>> = {
  manifesto: {
    // @iwp.link models/content/doc_catalog.md::n.05e8
    // @iwp.link models/content/doc_catalog.md::n.64ff
    // @iwp.link models/content/doc_catalog.md::n.888b
    "zh-CN": "../whitepaper/manifesto_zh.md",
    // @iwp.link models/content/doc_catalog.md::n.05e8
    // @iwp.link models/content/doc_catalog.md::n.5fa1
    // @iwp.link models/content/doc_catalog.md::n.64ff
    "en-US": "../whitepaper/manifesto.md",
  },
  protocol: {
    // @iwp.link models/content/doc_catalog.md::n.05e8
    // @iwp.link models/content/doc_catalog.md::n.64ff
    // @iwp.link models/content/doc_catalog.md::n.760f
    "zh-CN": "../protocol/IWP-v1-zh.md",
    // @iwp.link models/content/doc_catalog.md::n.05e8
    // @iwp.link models/content/doc_catalog.md::n.64ff
    // @iwp.link models/content/doc_catalog.md::n.edc7
    "en-US": "../protocol/IWP-v1.md",
  },
};

const DOC_RAW: Record<DocId, Record<Locale, string>> = {
  manifesto: {
    // @iwp.link system.md::n.528e
    "zh-CN": manifestoZhRaw,
    "en-US": manifestoEnRaw,
  },
  protocol: {
    "zh-CN": protocolZhRaw,
    "en-US": protocolEnRaw,
  },
};

export function listDocs(): DocMeta[] {
  return [...DOC_META].sort((a, b) => a.order - b.order);
}

export function resolveDocAssetPath(docId: DocId, locale: Locale): string {
  return DOC_ASSET_PATHS[docId][locale];
}

export function getDocRaw(docId: DocId, locale: Locale): string {
  return DOC_RAW[docId][locale];
}
