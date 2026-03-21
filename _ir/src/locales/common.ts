import type { Locale } from "../models/content/types";

export const COMMON_TEXTS: Record<string, Record<string, Record<Locale, string>>> = {
  // @iwp.link locales/common.en-US.md::n.c486
  // @iwp.link locales/common.zh-CN.md::n.60cd
  nav: {
    // @iwp.link locales/common.en-US.md::n.2fa6
    // @iwp.link locales/common.en-US.md::n.b8a6
    // @iwp.link locales/common.zh-CN.md::n.d8d4
    // @iwp.link locales/common.zh-CN.md::n.dcfe
    home: { "zh-CN": "首页", "en-US": "Home" },
    // @iwp.link locales/common.en-US.md::n.cf82
    // @iwp.link locales/common.zh-CN.md::n.c3cb
    docs: { "zh-CN": "文档", "en-US": "Docs" },
    menu: { "zh-CN": "菜单", "en-US": "Menu" },
    // @iwp.link locales/common.en-US.md::n.9e31
    // @iwp.link locales/common.zh-CN.md::n.8493
    theme: { "zh-CN": "主题", "en-US": "Theme" },
    // @iwp.link locales/common.en-US.md::n.773a
    // @iwp.link locales/common.zh-CN.md::n.7aa3
    language: { "zh-CN": "语言", "en-US": "Language" },
  },
  // @iwp.link locales/common.en-US.md::n.40a5
  // @iwp.link locales/common.zh-CN.md::n.1030
  actions: {
    // @iwp.link locales/common.en-US.md::n.dbec
    // @iwp.link locales/common.zh-CN.md::n.4c36
    read: { "zh-CN": "阅读", "en-US": "Read" },
    // @iwp.link locales/common.en-US.md::n.1029
    // @iwp.link locales/common.zh-CN.md::n.6ebb
    openDocsCenter: { "zh-CN": "打开文档中心", "en-US": "Open Docs Hub" },
    // @iwp.link locales/common.en-US.md::n.ab50
    // @iwp.link locales/common.zh-CN.md::n.6b0e
    readManifesto: { "zh-CN": "阅读宣言", "en-US": "Read Manifesto" },
    // @iwp.link locales/common.en-US.md::n.1dd1
    // @iwp.link locales/common.zh-CN.md::n.c2a9
    readProtocol: { "zh-CN": "阅读 IWP 协议", "en-US": "Read IWP Protocol" },
    // @iwp.link locales/common.en-US.md::n.ac61
    // @iwp.link locales/common.zh-CN.md::n.639e
    viewOnGitHub: { "zh-CN": "GitHub 仓库", "en-US": "View on GitHub" },
    readTerminology: { "zh-CN": "术语说明", "en-US": "Terminology" },
  },
  // @iwp.link locales/common.en-US.md::n.5b83
  // @iwp.link locales/common.zh-CN.md::n.06fc
  docs: {
    // @iwp.link locales/common.en-US.md::n.4d04
    // @iwp.link locales/common.zh-CN.md::n.e5c6
    title: { "zh-CN": "文档中心", "en-US": "Documentation Center" },
    subtitle: {
      "zh-CN": "阅读 InstructWare 宣言与 IWP 核心规范的完整内容。",
      "en-US":
        "Read the full InstructWare Manifesto and IWP Core Specification.",
    },
    // @iwp.link locales/common.en-US.md::n.4d3c
    // @iwp.link locales/common.zh-CN.md::n.e463
    progress: { "zh-CN": "阅读进度", "en-US": "Reading Progress" },
  },
  // @iwp.link locales/common.en-US.md::n.1141
  // @iwp.link locales/common.zh-CN.md::n.eb0c
  home: {
    // @iwp.link locales/common.en-US.md::n.19f8
    // @iwp.link locales/common.zh-CN.md::n.b2fb
    heroTitle: {
      "zh-CN": "超越静态软件",
      "en-US": "Beyond Static Software",
    },
    // @iwp.link locales/common.en-US.md::n.e1f7
    // @iwp.link locales/common.zh-CN.md::n.2f79
    heroSubtitle: {
      "zh-CN":
        "InstructWare 将人类指令转化为可治理、可验证的运行时行为。",
      "en-US":
        "InstructWare turns human instruction into governed, verifiable runtime behavior.",
    },
    // @iwp.link locales/common.en-US.md::n.aa34
    // @iwp.link locales/common.zh-CN.md::n.8d73
    heroToolingLink: {
      "zh-CN": "工具链：iwp-tools",
      "en-US": "Tooling: iwp-tools",
    },
    // @iwp.link locales/common.en-US.md::n.1c96
    // @iwp.link locales/common.zh-CN.md::n.2975
    sectionVision: {
      "zh-CN": "长期愿景",
      "en-US": "Long-Term Vision",
    },
    // @iwp.link locales/common.en-US.md::n.0b51
    // @iwp.link locales/common.zh-CN.md::n.0ec1
    visionLead: {
      "zh-CN": "在 AI 时代，自然语言正走向主流的编程接口。",
      "en-US":
        "In the AI era, natural language is becoming a mainstream programming interface.",
    },
    // @iwp.link locales/common.en-US.md::n.f679
    // @iwp.link locales/common.zh-CN.md::n.b37e
    visionBody: {
      "zh-CN":
        "InstructWare 的长期目标，是把以自然语言为核心的编程方式沉淀为可治理、可验证、可持续演进的工程现实。",
      "en-US":
        "InstructWare's long-term goal is to turn natural-language-first programming into an engineering reality that is governable, verifiable, and continuously evolvable.",
    },
    // @iwp.link locales/common.en-US.md::n.2598
    // @iwp.link locales/common.zh-CN.md::n.d13b
    visionFootnote: {
      "zh-CN": "传统语言仍将长期存在，并在执行层持续发挥关键作用。",
      "en-US":
        "Traditional languages will remain essential and continue to play a key role at the execution layer.",
    },
    // @iwp.link locales/common.en-US.md::n.0995
    // @iwp.link locales/common.zh-CN.md::n.3da6
    tagline: {
      "zh-CN": "减少样板代码，聚焦可验证意图。",
      "en-US": "Reduce implementation ceremony. Focus on verifiable intent.",
    },
  },
};
