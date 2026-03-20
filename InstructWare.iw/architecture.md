# Architecture Blueprint: InstructWare.org Official Site

## Architecture Scope
- This bundle MUST follow a Layered Architecture with Unidirectional Data Flow (UDF).
- Architectural layers are: Presentation (`views/`), Application (`logic/`), Domain State (`state/`), and Content Model (`models/`).
- The architecture targets deterministic rendering, explicit event orchestration, and low-coupling evolution under agent-driven code generation.
- This blueprint is normative for all routed pages, reusable components, and runtime behavior related to docs reading, theme, and locale.

## State Management
- Runtime state MUST be modeled as explicit state machines at the application layer, then projected into `state/` documents.
- `state/ui_prefs.md` is the authoritative state for locale and theme; `state/docs_runtime.md` is the authoritative state for reader session state.
- State transitions MUST be event-driven and processed by logic handlers; direct state mutation from Presentation is forbidden.
- State updates SHOULD be atomic per interaction event; partial updates across independent handlers MUST NOT leave observable inconsistent UI state.
- Persistent content metadata (`models/`) and transient runtime state (`state/`) MUST remain physically and semantically isolated.

## Rendering Strategy
- Rendering MUST be declarative in Presentation and deterministic for the same `(route, locale, theme, state snapshot)`.
- Route composition MUST be owned by `views/pages/`; reusable rendering fragments MUST be owned by `views/components/`.
- Presentation components SHOULD follow a Container/Presenter split: page-level containers coordinate data flow, components remain presentation-centric.
- Long-form docs rendering MUST consume canonical repository SSOT content declared by `system.md`; no ad-hoc alternate source is allowed.
- SSR/SSG/CSR implementation choice MAY vary by target runtime, but output semantics and interaction contracts MUST remain equivalent.

## Event Orchestration
- Event orchestration MUST follow Application Service pattern in `logic/`: UI events -> use-case handler -> state transition -> render refresh.
- Cross-component coordination MUST use state + logic mediation; direct component-to-component command coupling is prohibited.
- Route guard and fallback behavior MUST be centralized in middleware logic (`logic/middleware/route_fallback.md`), not duplicated per page.
- Reader lifecycle events (open doc, scroll progress sync) MUST be idempotent and order-safe under rapid user interaction.
- Bootstrap orchestration MUST be centralized in `logic/system/on_app_start.md`, including locale/theme initialization and default fallback.

## Boundary Rules
- Dependency direction MUST be inward: `views -> logic -> state/models`; reverse dependencies are forbidden.
- Side effects (routing, persistence writes, environment/plugin interaction) MUST be isolated in `logic/`; Presentation MUST remain side-effect free.
- Domain rules SHOULD be encoded as explicit invariants in logic flow definitions (preconditions, postconditions, and guard clauses).
- Any architecture change that alters event contracts or state ownership MUST be accompanied by NL-BDD regression updates under `tests/`.
- To avoid architectural drift, new features MUST declare their layer placement and dependency path before adding new logic or view nodes.
- Dependency governance is an ADVANCED and OPTIONAL concern; core IWP authoring remains intent-first and does not require library knowledge.
- `manifest.yaml` MUST declare only capability-level plugins (e.g., `markdown_renderer`, `local_storage`) and MUST NOT bind concrete OSS library names.
- If `dependency.md` exists, it MAY define implementation selection constraints such as "prefer mature OSS over custom parser", security baseline, license policy, and replaceability requirements.
- If `dependency.md` is absent, the Agentic Engine MUST autonomously choose best-practice implementations that satisfy architecture and manifest constraints.
