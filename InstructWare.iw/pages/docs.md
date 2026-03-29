# InstructWare Docs Center

This page defines the product contract for the documentation center where users choose what to read before entering the reader page. @iwp

Display copy is resolved from locale files.

- `pages/docs/locales/en.md`
- `pages/docs/locales/zh.md`

## Page Purpose

The docs center is the navigation hub for long-form documents and should help users quickly choose between Manifesto and Protocol. @iwp

The page should emphasize clarity, reading continuity, and explicit document status signals. @iwp

## Page Structure

The page must render in this order:

@iwp(kind=views.pages.layout_tree)
- Global top navigation.
- Header with page title and short guidance.
- Document cards section.
- Reading policy and governance notice section.

## Content Contract by Block

Header block must include:

- page title key,
- one short description key,
- one helper note key.

Document cards block must include:

- manifesto card title and summary keys,
- protocol card title and summary keys,
- status tags for each card,
- one action key per card for opening reader.

Governance notice block must include:

- one heading key,
- two concise policy bullet keys.

## Visual Contract

- This page must follow `styles/visual.md` as the visual source of truth. @iwp
- Document cards should use consistent tokenized spacing, borders, and typography hierarchy.
- Governance notice should preserve readability and avoid decorative noise.

## Interaction Intent

Selecting Manifesto card action triggers `open_doc(manifesto)` and routes to docs reader page. @iwp(file=logic,section=trigger)

Selecting Protocol card action triggers `open_doc(protocol)` and routes to docs reader page. @iwp(file=logic,section=trigger)

## State Expectations

Required state fields:

- `ui_prefs.locale`
- `docs_runtime.active_doc_id`
- `docs_runtime.active_doc_locale`
- `docs_runtime.active_doc_asset_path`

State constraints:

@iwp(file=state,section=constraints)
- `active_doc_id` is restricted to `manifesto | protocol`,
- `active_doc_locale` follows supported locale set.

State update rules:

@iwp(file=state,section=update_rules)
- selecting a doc card updates active doc id,
- selecting a doc card updates active doc locale from `ui_prefs.locale`,
- selecting a doc card derives asset path from `(active_doc_id, active_doc_locale)`.

## Authoring Guardrails

This page should define navigation and selection contracts, not markdown rendering internals. @no-iwp

This page should not duplicate full document body content. @no-iwp

## Acceptance Criteria

- A first-time visitor can choose a document within one interaction.
- Document entry behavior remains deterministic and traceable.
- Locale text changes do not require structure changes in this page.
- The page remains concise and easy to maintain.
