# Data Model: Home Content Snapshot

## Purpose
- Provide a structured homepage narrative extracted from canonical docs.
- Keep homepage copy concise while preserving links to full source documents.

## Entity: `HomeSection`
- `id`: Enum, required. Allowed values:
  - `hero`
  - `paradigm_shift`
  - `three_laws`
  - `iwp_essence`
  - `values`
  - `cta`
- `title_zh`: String, required.
- `title_en`: String, required.
- `body_zh`: Markdown string, required.
- `body_en`: Markdown string, required.
- `display_order`: Integer, required.

## Canonical Extraction Rules
1. `hero`, `paradigm_shift`, `three_laws`, `values`, `cta` are derived from manifesto content.
2. `iwp_essence` is derived from protocol abstract and design philosophy.
3. Homepage snippets MUST NOT alter the meaning of canonical docs.
4. If conflict exists, canonical docs in `assets/docs/` override homepage snapshots.
5. Homepage section labels and short copy MUST be locale-aware.
6. Any additional summary chips/facts on home SHOULD be traceable to canonical docs (`manifesto` or `protocol`) and MUST avoid synthetic claims.