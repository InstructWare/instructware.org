import { describe, expect, it } from "vitest";
import { buildDocArtifacts } from "../../src/logic/docs/markdown_parser";

describe("Markdown Parser Workflow", () => {
  it("keeps raw html inert and escapes fenced code content", () => {
    // @iwp.link logic/docs/markdown_parser.md::n.a750
    // @iwp.link tests/docs/test_markdown_parser_workflow.md::n.0751
    // @iwp.link tests/docs/test_markdown_parser_workflow.md::n.8f03
    const raw = [
      "<script>alert('xss')</script>",
      "",
      "```yml",
      "name: <unsafe>",
      "```",
    ].join("\n");
    const html = buildDocArtifacts(raw).html;

    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;alert('xss')&lt;/script&gt;");
    expect(html).toContain('data-lang="yaml"');
    expect(html).toContain("&lt;unsafe&gt;");
    expect(html).not.toContain('"tok-key"&gt;');
  });

  it("normalizes fence aliases to canonical classes", () => {
    // @iwp.link tests/docs/test_markdown_parser_workflow.md::n.a95c
    const raw = ["```plain", "hello", "```"].join("\n");
    const html = buildDocArtifacts(raw).html;

    expect(html).toContain('data-lang="text"');
    expect(html).toContain('class="iwp-code language-text"');
  });

  it("uses fallback anchor and handles loose strong markers", () => {
    // @iwp.link tests/docs/test_markdown_parser_workflow.md::n.3c8c
    const raw = ["### !!!", "", "前缀**强强调（Bold）**后缀"].join("\n");
    const html = buildDocArtifacts(raw).html;

    expect(html).toContain('<h3 id="section-1"');
    expect(html).toContain("前缀<strong>强强调（Bold）</strong>后缀");
    expect(html).not.toContain("**强强调（Bold）**");
  });

  it("keeps mermaid source in safe placeholder blocks", () => {
    const raw = ["```mermaid", "graph TD", "A-->B", "```"].join("\n");
    const html = buildDocArtifacts(raw).html;

    expect(html).toContain('class="iwp-mermaid-block"');
    expect(html).toContain('data-mermaid-source="');
    expect(html).toContain('data-lang="mermaid"');
    expect(html).toContain("graph TD");
  });
});
