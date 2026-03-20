# InstructWare.iw

Official IWP bundle for the InstructWare.org website.

## Scope
- Present the InstructWare concept and IWP protocol as the official source website.
- Provide bilingual reading for full-length documents from canonical sources:
  - `../whitepaper/manifesto.md`
  - `../whitepaper/manifesto_zh.md`
  - `../protocol/IWP-v1.md`
  - `../protocol/IWP-v1-zh.md`
- Provide theme switching and language switching.

## Architecture (Intent-Layered)
- `architecture.md`: advanced architecture blueprint constraints for runtime transpilation and orchestration.
- `views/`: pure UI declarations (no state mutation, no side effects).
- `logic/`: event flows, state transitions, side effects.
- `state/`: transient runtime UI state.
- `models/`: persistent content metadata and document catalog.
- `tests/`: NL-BDD regression guardrails.

## Non-goals
- No embedded traditional programming language code blocks for runtime behavior.
- No direct network fetching for docs; all docs are read from local repository canonical files.
