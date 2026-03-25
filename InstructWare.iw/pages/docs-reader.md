# InstructWare Docs Reader

This page defines the reader contract for rendering long-form markdown documents, including Manifesto and Protocol. @iwp

Display copy is resolved from locale files.

- `pages/docs-reader/locales/en.md`
- `pages/docs-reader/locales/zh.md`

## Page Purpose

The docs reader presents a selected document with stable reading behavior, clear progress context, and predictable reading feedback. @iwp

The page should prioritize readability, low-interruption navigation, and transparent state transitions. @iwp

## Page Structure

The page must render in this order:

@iwp(kind=views.pages.layout_tree)
- Global top navigation.
- Markdown document viewport section.

## Content Contract by Block

Document viewport block must include:

- markdown body mount region,
- GitHub-like markdown typography and spacing style,
- Mermaid code-fence rendering support (` ```mermaid `),
- loading state key,
- empty-state key for unavailable content.

## Interaction Intent

Mermaid diagrams in markdown code fences should render as visual diagrams after markdown mount and remain readable under active theme colors. @iwp(file=logic,section=output)

## State Expectations

Required state fields:

- `ui_prefs.locale`
- `docs_runtime.active_doc_id`
- `docs_runtime.active_doc_locale`
- `docs_runtime.active_doc_asset_path`
- `docs_runtime.reader_scroll_ratio`

State constraints:

@iwp(file=state,section=constraints)
- `active_doc_id` is restricted to `manifesto | protocol`,
- `active_doc_asset_path` must resolve to an allowlisted markdown asset,
- `reader_scroll_ratio` is normalized to [0.0, 1.0].

State update rules:

@iwp(file=state,section=update_rules)
- `open_doc(doc_id)` resets `reader_scroll_ratio` to `0`,
- `active_doc_locale` follows `ui_prefs.locale`,
- changing locale recomputes `active_doc_asset_path`,
- reader viewport scroll updates `reader_scroll_ratio` continuously.

## Error and Fallback Contract

If markdown asset cannot be loaded, render fallback empty-state and preserve route stability. @iwp(file=logic,section=output)

If incoming `doc_id` is invalid, fallback to `manifesto` and continue reader flow. @iwp(file=logic,section=output)

## Authoring Guardrails

This page should define rendering and state contracts, not duplicate manifesto or protocol body text. @no-iwp

This page should avoid implementation-specific markdown engine details. @no-iwp

## Acceptance Criteria

- Reader progress reset and update behavior is deterministic and traceable.
- Loading failure behavior is explicit and non-blocking.
- The page contract is implementation-agnostic and maintainable.
