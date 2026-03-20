# _ir Directory Alignment Map

This file freezes the physical migration map from the legacy `_ir/src/app/**`
layout to an IWP-aligned layered layout.

## Layer Rules

- `views/**`: Vue pages and reusable view components only.
- `logic/**`: event orchestration, route guards, and markdown rendering logic.
- `state/**`: transient runtime state containers and type-safe state snapshots.
- `models/**`: canonical content model data and document catalog assets.
- `locales/**`: i18n dictionaries and locale-facing text packs.
- `styles/**`: shared visual tokens and global theme rules.
- `adapters/vitepress/**`: framework bridge code only.

## Frozen File Mapping

| Legacy path | Target path | Layer |
| --- | --- | --- |
| `src/app/components/HomePage.vue` | `src/views/pages/HomePage.vue` | views/pages |
| `src/app/components/DocsCenterPage.vue` | `src/views/pages/DocsCenterPage.vue` | views/pages |
| `src/app/components/DocReaderPage.vue` | `src/views/pages/DocReaderPage.vue` | views/pages |
| `src/app/components/TopNavbar.vue` | `src/views/components/TopNavbar.vue` | views/components |
| `src/app/components/ThemeSwitcher.vue` | `src/views/components/ThemeSwitcher.vue` | views/components |
| `src/app/components/LangSwitcher.vue` | `src/views/components/LangSwitcher.vue` | views/components |
| `src/app/components/DocCard.vue` | `src/views/components/DocCard.vue` | views/components |
| `src/app/components/DocReader.vue` | `src/views/components/DocReader.vue` | views/components |
| `src/app/content/content.ts` | `src/models/content/doc_catalog.ts`, `src/models/content/home_content.ts`, `src/locales/common.ts` | models + locales |
| `src/app/content/markdown.ts` | `src/logic/docs/markdown_parser.ts` | logic/docs |
| `src/app/state/state.ts` | `src/state/{ui_prefs.ts,docs_runtime.ts}`, `src/logic/{system,middleware,docs,ui}/**`, `src/logic/store/useIwpState.ts` | state + logic |
| `.vitepress/theme/index.ts` | keep path, imports from `src/views/**` and `src/logic/**` only | adapter |
| `.vitepress/theme/Layout.vue` | keep path, lifecycle bridge to `src/logic/store/useIwpState.ts` | adapter |

## Dependency Direction

Mandatory direction after migration:

`views -> logic -> state/models/locales`

Reverse dependency (`state -> views`, `models -> views`, `adapters -> business logic`)
is forbidden.
