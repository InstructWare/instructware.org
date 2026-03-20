# Data Model: Document Catalog

## Entity: `DocMeta`
- `id`: Enum, required. Allowed values: [`manifesto`, `protocol`].
- `title_zh`: String, required.
- `title_en`: String, required.
- `summary_zh`: String, required.
- `summary_en`: String, required.
- `order`: Integer, required.
- `tags`: String array, optional.

## Entity: `DocAssetMap`
- `doc_id`: Enum, required. Same domain as `DocMeta.id`.
- `locale`: Enum, required. Allowed values: [`zh-CN`, `en-US`].
- `asset_path`: String, required. Must point to canonical markdown source in repository docs directories.

## Seed Data: `DocMeta`
1. `manifesto`
   - `title_zh`: InstructWare 宣言
   - `title_en`: The InstructWare Manifesto
   - `summary_zh`: 定义从静态软件向自然语言驱动动态计算范式的转移。
   - `summary_en`: Defines the transition from static software to natural language-driven dynamic computing.
   - `order`: 1
   - `tags`: [`concept`, `vision`, `values`]
2. `protocol`
   - `title_zh`: IWP 核心规范 v1.0
   - `title_en`: IWP Core Specification v1.0
   - `summary_zh`: 定义 InstructWare 自然语言源码包的工程化结构与约束。
   - `summary_en`: Defines engineering structure and constraints for InstructWare natural language source bundles.
   - `order`: 2
   - `tags`: [`specification`, `bundle`, `architecture`]

## Seed Data: `DocAssetMap`
- (`manifesto`, `zh-CN`) -> `../whitepaper/manifesto_zh.md`
- (`manifesto`, `en-US`) -> `../whitepaper/manifesto.md`
- (`protocol`, `zh-CN`) -> `../protocol/IWP-v1-zh.md`
- (`protocol`, `en-US`) -> `../protocol/IWP-v1.md`

