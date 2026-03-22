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
      // @iwp.link models/content/doc_catalog.md::n.d7c1
      "zh-CN": "阐述 InstructWare 的问题定义、核心原则与 Draft 发布背景。",
      // @iwp.link models/content/doc_catalog.md::n.9ef6
      "en-US":
        "Explains InstructWare problem framing, core principles, and Public Draft context.",
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
      // @iwp.link models/content/doc_catalog.md::n.dbcf
      "zh-CN": "定义 IWP Public Draft v1.0 的结构、约束与一致性要求。",
      // @iwp.link models/content/doc_catalog.md::n.4391
      "en-US":
        "Defines structure, constraints, and conformance requirements for IWP Public Draft v1.0.",
    },
    // @iwp.link models/content/doc_catalog.md::n.14b2
    tags: ["specification", "draft", "conformance"],
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
