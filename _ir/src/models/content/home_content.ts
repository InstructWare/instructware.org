import type { Locale } from "./types";

// @iwp.link models/content/home_content.md::n.11f6
// @iwp.link models/content/home_content.md::n.400b
// @iwp.link models/content/home_content.md::n.50f4
// @iwp.link models/content/home_content.md::n.5734
// @iwp.link models/content/home_content.md::n.6c11
// @iwp.link models/content/home_content.md::n.c7d0
export const HOME_TEXTS: Record<string, Record<Locale, string>> = {
  // @iwp.link models/content/home_content.md::n.8305
  kicker: {
    "zh-CN": "IWP v1 草案 / 自然语言优先协议",
    "en-US": "IWP v1 Draft / Natural-Language-First Protocol",
  },
  // @iwp.link models/content/home_content.md::n.95ed
  // @iwp.link models/content/home_content.md::n.cdd3
  heroTitle: {
    "zh-CN": "超越静态软件",
    "en-US": "Beyond Static Software",
  },
  // @iwp.link models/content/home_content.md::n.0f02
  // @iwp.link models/content/home_content.md::n.b565
  heroSubtitle: {
    "zh-CN":
      "InstructWare 将人类指令编译为可治理、可验证、可追溯的运行时行为。",
    "en-US":
      "InstructWare compiles human instruction into governed, verifiable, source-traceable runtime behavior.",
  },
  // @iwp.link models/content/home_content.md::n.a925
  tagline: {
    "zh-CN": "以文档定义意图，在运行时验证并持续演进。",
    "en-US": "Define intent in docs, verify it at runtime, and evolve continuously.",
  },
  // @iwp.link models/content/home_content.md::n.1f1f
  // @iwp.link models/content/home_content.md::n.fdc3
  sectionParadigm: {
    "zh-CN": "静态软件 vs InstructWare",
    "en-US": "Software vs InstructWare",
  },
  // @iwp.link models/content/home_content.md::n.036e
  sectionLaws: {
    "zh-CN": "InstructWare 三定律",
    "en-US": "The Three Laws of InstructWare",
  },
  // @iwp.link models/content/home_content.md::n.43e2
  sectionEssence: {
    "zh-CN": "IWP v1 最小闭环",
    "en-US": "IWP v1 Minimal Loop",
  },
  // @iwp.link models/content/home_content.md::n.7b87
  sectionValues: {
    "zh-CN": "价值主张",
    "en-US": "Values",
  },
  legacyTitle: {
    "zh-CN": "静态软件",
    "en-US": "Software",
  },
  legacyStatic: {
    "zh-CN": "版本发布驱动变更",
    "en-US": "Release-bound change cycles",
  },
  legacyPrecompiled: {
    "zh-CN": "界面与流程预先固化",
    "en-US": "Pre-fixed interfaces and workflows",
  },
  legacyRigid: {
    "zh-CN": "代码是主要表达与变更入口",
    "en-US": "Code is the primary expression and change entry",
  },
  iwTitle: {
    "zh-CN": "InstructWare",
    "en-US": "InstructWare",
  },
  iwDynamic: {
    "zh-CN": "人类指令驱动持续迭代",
    "en-US": "Human instruction drives continuous iteration",
  },
  iwGenerative: {
    "zh-CN": "界面在运行时生成与适配",
    "en-US": "Interfaces are generated and adapted at runtime",
  },
  iwSelfEvolving: {
    "zh-CN": "系统在治理边界内持续演进",
    "en-US": "Systems evolve continuously within governance boundaries",
  },
  law1: {
    "zh-CN": "自然语言优先于代码（首要意图源）",
    "en-US": "Natural Language as the Primary Intent Source",
  },
  law2: {
    "zh-CN": "界面可生成、可适配、可约束",
    "en-US": "Dynamic and Generative Interface",
  },
  law3: {
    "zh-CN": "运行时持续演进且可治理",
    "en-US": "Continuously Evolvable Runtime",
  },
  essence1: {
    "zh-CN": "Instruction -> Intent -> Execution",
    "en-US": "Instruction -> Intent -> Execution",
  },
  essence2: {
    "zh-CN": "`.iw` 是意图层 SSOT",
    "en-US": "`.iw` as the intent-layer SSOT",
  },
  essence3: {
    "zh-CN": "`.iwc` 与诊断保障源级追溯",
    "en-US": "`.iwc` and diagnostics ensure source traceability",
  },
  value1: {
    "zh-CN": "以“人类指令”为契约，而非以代码为瓶颈",
    "en-US": "Human Instruction as the contract over code as the bottleneck.",
  },
  value2: {
    "zh-CN": "以“指令到执行”的流水线，而非受版本发布绑定的功能队列",
    "en-US": "Instruction-to-Execution pipelines over release-bound feature queues.",
  },
  value3: {
    "zh-CN": "以可追溯的运行时演进，而非不透明的一次性交付",
    "en-US": "Source-traceable runtime evolution over opaque one-shot deployments.",
  },
  value4: {
    "zh-CN": "让机器适配人类目标，而非让人类适配机器",
    "en-US": "Machines adapting to human goals over humans adapting to machine constraints."
  },
  trust1: {
    "zh-CN": "Instruction 与 Intent 明确分层",
    "en-US": "Instruction and intent are explicitly separated",
  },
  trust2: {
    "zh-CN": "`.iw` 是规范化事实来源",
    "en-US": "`.iw` remains the canonical source of truth",
  },
  trust3: {
    "zh-CN": "治理平面约束全部层级",
    "en-US": "Governance plane constrains all layers",
  },
  footerCopyrightLabel: {
    "zh-CN": "版权与归属",
    "en-US": "Copyright",
  },
  footerCopyrightValue: {
    "zh-CN": "© 2026 InstructWare",
    "en-US": "© 2026 InstructWare",
  },
  footerContentLicenseLabel: {
    "zh-CN": "文档许可",
    "en-US": "Content License",
  },
  footerContentLicenseValue: {
    "zh-CN": "CC BY-ND 4.0",
    "en-US": "CC BY-ND 4.0",
  },
  footerProtocolStatusLabel: {
    "zh-CN": "协议状态",
    "en-US": "Protocol Status",
  },
  footerProtocolStatusValue: {
    "zh-CN": "v1.0 Draft",
    "en-US": "v1.0 Draft",
  },
  footerGithubLabel: {
    "zh-CN": "源代码",
    "en-US": "Source Code",
  },
  footerGithubValue: {
    "zh-CN": "GitHub",
    "en-US": "GitHub",
  },
  // @iwp.link models/content/home_content.md::n.8038
};
