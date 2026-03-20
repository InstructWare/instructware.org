# Test: Document Reader Integrity

## Scenario 1: Open manifesto in Chinese
Given current locale is `zh-CN`  
When the user opens document `manifesto`  
Then route MUST be `/docs/manifesto`  
And `state/docs_runtime.active_doc_asset_path` MUST equal `../whitepaper/manifesto_zh.md`  
And rendered HTML MUST contain stable heading anchor id attributes.

## Scenario 2: Open protocol in English
Given current locale is `en-US`  
When the user opens document `protocol`  
Then route MUST be `/docs/protocol`  
And `state/docs_runtime.active_doc_asset_path` MUST equal `../protocol/IWP-v1.md`  
And the rendered content MUST include section heading "Compilation & Runtime Architecture".

## Scenario 3: Unknown document id fallback
Given current locale is `zh-CN`  
When `on_open_doc` receives `doc_id=unknown`  
Then active document MUST fallback to `manifesto`  
And route MUST be `/docs/manifesto`.
