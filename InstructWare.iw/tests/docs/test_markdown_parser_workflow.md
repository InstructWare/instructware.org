# Test: Markdown Parser Workflow

## Scenario 1: Security baseline for raw HTML and code escaping
Given markdown contains raw HTML tags and fenced code block content with angle brackets  
When `logic/docs/markdown_parser.md` builds doc artifacts  
Then raw HTML MUST NOT be executed as HTML nodes  
And fenced code output MUST preserve escaped text representation.

## Scenario 2: Fence language alias normalization
Given fenced code language is `yml` or `plain`  
When markdown is rendered  
Then renderer metadata MUST normalize to canonical language classes (`yaml`, `text`).

## Scenario 3: Anchor fallback and loose strong compatibility
Given heading text slug becomes empty after normalization  
And inline strong markers are adjacent to CJK/plain text  
When markdown is rendered  
Then heading id MUST fallback to `section-<index>`  
And strong markers MUST render as `<strong>` without exposing raw `**`.
