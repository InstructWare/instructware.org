# Dependency Governance (ADVANCED, OPTIONAL)

## Purpose
- This file is optional and intended for advanced teams that need explicit implementation governance.
- Business authors can ignore this file and continue writing only intent-level IWP documents.

## Core Rules
- Prefer mature, well-maintained OSS libraries over custom reimplementation when capabilities are standard and broadly solved.
- Keep dependencies replaceable: avoid deep lock-in to one library's private APIs.
- Security and license compliance are mandatory for all selected dependencies.

## Boundary with `manifest.yaml`
- `manifest.yaml` declares capability-level runtime/plugin requirements only.
- Concrete library names and version policies belong to implementation (`_ir`) and this optional governance file, not to manifest.

## Current Constraints for InstructWare.org
- Markdown rendering should use a CommonMark-compatible library implementation.
- Code fence rendering should support language tagging and syntax token styling.
- Inline code should support semantic emphasis for `.iw` literals.
