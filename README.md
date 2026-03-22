# InstructWare (spec + protocol repository)

This repository publishes the protocol-facing assets of InstructWare:

- `_ir/`
- `protocol/`
- `schema/`
- `whitepaper/`
- `InstructWare.iw/`

Tooling is maintained in a dedicated repository:

- `iwp-tools`: [https://github.com/InstructWare/iwp-tools](https://github.com/InstructWare/iwp-tools)

## Local validation

```bash
uv sync --group dev
uv run iwp-lint nodes compile --config .iwp-lint.yaml
uv run iwp-lint nodes verify-compiled --config .iwp-lint.yaml
```

## Public Draft Status

- Current publication state: `IWP Public Draft v1.0 (Pre-Launch)`.
- Draft revisions may refine wording or structure before final freeze.

## Feedback Channels

- Protocol and schema feedback: [GitHub Issues](https://github.com/InstructWare/instructware.org/issues/new/choose)
- Tooling and workflow feedback: [iwp-tools Issues](https://github.com/InstructWare/iwp-tools/issues/new/choose)

## License

Top-level repository content is licensed under Apache-2.0. See [`LICENSE`](./LICENSE).

Protocol and schema specifications under `protocol/` and `schema/` follow this repository-level Apache-2.0 license.

The manifesto documents under `whitepaper/` are additionally distributed with their own license file:

- [`whitepaper/LICENSE-CC-BY-ND`](./whitepaper/LICENSE-CC-BY-ND)
