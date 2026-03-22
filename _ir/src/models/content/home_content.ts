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
    "zh-CN": "软件 vs InstructWare",
    "en-US": "Software vs InstructWare",
  },
  // @iwp.link models/content/home_content.md::n.036e
  sectionLaws: {
    "zh-CN": "InstructWare 三定律",
    "en-US": "The Three Laws of InstructWare",
  },
  // @iwp.link models/content/home_content.md::n.43e2
  sectionEssence: {
    "zh-CN": "3 步开始参与",
    "en-US": "Start in 3 Steps",
  },
  // @iwp.link models/content/home_content.md::n.7b87
  sectionValues: {
    "zh-CN": "价值主张",
    "en-US": "Values",
  },
  legacyTitle: {
    "zh-CN": "传统软件（无 IWP）",
    "en-US": "Traditional Software (No IWP)",
  },
  legacyStatic: {
    "zh-CN": "意图分散、事实来源不稳定",
    "en-US": "Intent is scattered and source of truth is unstable",
  },
  legacyPrecompiled: {
    "zh-CN": "可交付，但更依赖人工评审、跨团队协调与反复同步",
    "en-US":
      "Deliverable, but relies more on manual review, cross-team coordination, and repeated sync",
  },
  legacyRigid: {
    "zh-CN": "运行时演进多依赖版本发布，响应更慢",
    "en-US": "Runtime evolution is mostly release-driven and slower",
  },
  iwTitle: {
    "zh-CN": "InstructWare Runtime（基于 IWP）",
    "en-US": "InstructWare Runtime (With IWP)",
  },
  iwDynamic: {
    "zh-CN": "以共享意图文档作为稳定事实来源",
    "en-US": "Intent is shared and source of truth is stable",
  },
  iwGenerative: {
    "zh-CN": "自动化校验与追溯，持续保持实现与意图对齐",
    "en-US":
      "Automated checks and traceability keep implementation aligned with intent",
  },
  iwSelfEvolving: {
    "zh-CN": "在治理边界内持续演进，并降低规模化协同开销",
    "en-US":
      "Governed runtime iteration supports continuous evolution with lower coordination overhead at scale",
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
    "zh-CN": "第 1 步：阅读 Manifesto，对齐问题与原则",
    "en-US": "Step 1: Read Manifesto to align on problems and principles",
  },
  essence2: {
    "zh-CN": "第 2 步：阅读 IWP Protocol，理解约束与闭环",
    "en-US": "Step 2: Read IWP Protocol for constraints and loop",
  },
  essence3: {
    "zh-CN": "第 3 步：加入反馈计划，提交真实场景",
    "en-US": "Step 3: Join feedback program with real-world cases",
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
    "zh-CN": "Public Draft v1.0",
    "en-US": "Public Draft v1.0",
  },
  footerFeedbackLabel: {
    "zh-CN": "草案反馈",
    "en-US": "Draft Feedback",
  },
  footerFeedbackValue: {
    "zh-CN": "提交 Issue",
    "en-US": "Open Issue",
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
