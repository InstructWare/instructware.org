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

## License

Top-level repository content is licensed under Apache-2.0. See [`LICENSE`](./LICENSE).

The manifesto documents under `whitepaper/` are additionally distributed with their own license file:

- [`whitepaper/LICENSE-CC-BY-ND`](./whitepaper/LICENSE-CC-BY-ND)