# InstructWare Home

This page defines the product structure, behavior boundaries, and validation expectations for the public home page. It does not contain locale-specific display copy. @iwp

Display copy is resolved from locale files.

- `pages/home/locales/en.md`
- `pages/home/locales/zh.md`

## Page Purpose

The home page introduces InstructWare as a practical response to a visible shift in software: natural language is starting to participate more directly in how AI-era systems are defined, evolved, and governed. @iwp

The page should make clear that InstructWare is a bounded engineering path rather than a universal claim about all software, and that IWP is the reliability layer used to keep intent, code, and runtime behavior aligned. @iwp

## Page Structure

The page must render in this order:

@iwp(kind=views.pages.layout_tree)
- Global top navigation.
- Hero section.
- Paradigm contrast section.
- Three laws section.
- Start in three steps section.
- Values section.
- Long-term vision section.
- Final CTA section.

## Content Contract by Block

Hero block must include:

- one headline key,
- one subheadline key,
- primary, secondary, and tertiary action keys,
- one tooling-link key.

Paradigm contrast block must include:

- section title key,
- legacy title and three bullet keys,
- InstructWare title and three bullet keys.

Three laws block must include:

- section title key,
- exactly three law statement keys.

Start in three steps block must include:

- section title key,
- exactly three onboarding step keys.

Values block must include:

- section title key,
- exactly four value statement keys.

Vision block must include:

- section title key,
- lead, body, and footnote keys.

Final CTA block must include:

- one tagline key,
- three action keys aligned with the hero action semantics.

## Visual Contract

- This page must follow `styles/visual.md` as the visual source of truth. @iwp
- Hero, contrast cards, laws, values, and final CTA should keep a unified tokenized style language.
- Decorative effects should remain minimal and must not reduce information clarity.

## Interaction Intent

Read Manifesto action triggers `open_doc(manifesto)` and navigates to manifesto reading flow. @iwp(file=logic,section=trigger)

Read Protocol action triggers `open_doc(protocol)` and navigates to protocol reading flow. @iwp(file=logic,section=trigger)

Join Feedback action opens the official issue entry URL in a new tab with secure window policy. @iwp(file=logic,section=output)

Tooling link opens approved external URLs in a new tab without mutating document reader progress. @iwp(file=logic,section=output)

## State Expectations

Required state fields:

- `ui_prefs.locale`
- `docs_runtime.active_doc_id`
- `docs_runtime.active_doc_locale`
- `docs_runtime.active_doc_asset_path`
- `docs_runtime.reader_scroll_ratio`

State constraints:

@iwp(file=state,section=constraints)
- locale is restricted to supported locale set,
- active document id is restricted to supported doc set,
- reader scroll ratio is normalized to [0.0, 1.0].

State update rules:

@iwp(file=state,section=update_rules)
- `open_doc(doc_id)` resets `reader_scroll_ratio` to `0`,
- `active_doc_locale` follows `ui_prefs.locale`,
- `active_doc_asset_path` derives from `(active_doc_id, active_doc_locale)`.

## Authoring Guardrails

This page should define structure and behavior contracts, not implementation-level architecture details. @no-iwp

This page should not embed concrete locale copy directly in body content. @no-iwp

## Acceptance Criteria

- A maintainer can implement the page layout and interactions without additional product clarification.
- A first-time visitor can understand the narrative order: software change first, natural-language bridge second, IWP reliability layer third.
- Locale files can change wording without requiring structural edits in this page.
- Key interactions and state updates are traceable to runtime behavior boundaries.
- The document remains concise, reviewable, and page-first.
