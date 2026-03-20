import MarkdownIt from "markdown-it";
import type Token from "markdown-it/lib/token.mjs";
import type { DocArtifacts } from "../../models/content/types";

function slugify(text: string, fallbackIndex: number): string {
  const normalized = text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");
  // @iwp.link logic/docs/markdown_parser.md::n.7c61
  return normalized || `section-${fallbackIndex}`;
}

function escapeHtml(input: string): string {
  // @iwp.link system.md::n.31ee
  // @iwp.link system.md::n.c656
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function encodeDataAttribute(input: string): string {
  return encodeURIComponent(input);
}

function normalizeFenceLang(raw: string): string {
  // @iwp.link logic/docs/markdown_parser.md::n.9aa2
  const normalized = raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (!normalized) {
    return "text";
  }
  if (normalized === "yml") {
    return "yaml";
  }
  if (normalized === "plaintext" || normalized === "plain") {
    return "text";
  }
  return normalized;
}

function highlightCodeBlock(content: string, lang: string): string {
  // @iwp.link logic/docs/markdown_parser.md::n.a750
  // @iwp.link logic/docs/markdown_parser.md::n.acfe
  const lines = content.split("\n");
  const highlighted = lines.map((line) => {
    if (lang === "text" || lang === "txt") {
      return `<span class="tok-comment">${escapeHtml(line)}</span>`;
    }
    if (lang === "yaml") {
      // Keep YAML rendering stable and safe as plain text.
      return escapeHtml(line);
    }
    return escapeHtml(line);
  });
  return highlighted.join("\n");
}

const markdown = new MarkdownIt({
  // @iwp.link logic/docs/markdown_parser.md::n.42cc
  // @iwp.link system.md::n.31ee
  // @iwp.link system.md::n.c656
  html: false,
  linkify: true,
  breaks: true,
  typographer: false,
});

function createTokenFrom(source: Token, type: string, tag: string, nesting: number, content = ""): Token {
  const TokenCtor = source.constructor as new (
    tokenType: string,
    tokenTag: string,
    tokenNesting: number,
  ) => Token;
  const token = new TokenCtor(type, tag, nesting);
  token.content = content;
  token.level = source.level;
  token.block = source.block;
  token.hidden = source.hidden;
  return token;
}

function findStrongDelimiter(content: string, start: number): number {
  for (let index = start; index < content.length - 1; index += 1) {
    const current = content[index];
    const next = content[index + 1];
    if (current !== "*" || next !== "*") {
      continue;
    }
    if (index > 0 && content[index - 1] === "\\") {
      continue;
    }
    return index;
  }
  return -1;
}

function expandLooseStrongTextToken(token: Token): Token[] | null {
  const raw = token.content;
  if (!raw.includes("**")) {
    return null;
  }

  const output: Token[] = [];
  let cursor = 0;
  while (cursor < raw.length) {
    const strongOpen = findStrongDelimiter(raw, cursor);
    if (strongOpen < 0) {
      break;
    }
    const strongClose = findStrongDelimiter(raw, strongOpen + 2);
    if (strongClose < 0) {
      break;
    }
    if (strongOpen > cursor) {
      output.push(createTokenFrom(token, "text", "", 0, raw.slice(cursor, strongOpen)));
    }
    const strongText = raw.slice(strongOpen + 2, strongClose);
    if (!strongText) {
      output.push(createTokenFrom(token, "text", "", 0, "**"));
      cursor = strongOpen + 2;
      continue;
    }
    output.push(createTokenFrom(token, "strong_open", "strong", 1));
    output.push(createTokenFrom(token, "text", "", 0, strongText));
    output.push(createTokenFrom(token, "strong_close", "strong", -1));
    cursor = strongClose + 2;
  }

  if (!output.length) {
    return null;
  }
  if (cursor < raw.length) {
    output.push(createTokenFrom(token, "text", "", 0, raw.slice(cursor)));
  }
  return output;
}

function normalizeLooseStrong(tokens: Token[]): void {
  for (const token of tokens) {
    if (token.type !== "inline" || !token.children?.length) {
      continue;
    }
    const normalizedChildren: Token[] = [];
    for (const child of token.children) {
      if (child.type !== "text") {
        normalizedChildren.push(child);
        continue;
      }
      const expanded = expandLooseStrongTextToken(child);
      if (!expanded) {
        normalizedChildren.push(child);
        continue;
      }
      normalizedChildren.push(...expanded);
    }
    token.children = normalizedChildren;
  }
}

const defaultCodeInline =
  markdown.renderer.rules.code_inline ??
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options));

markdown.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  token.attrJoin("class", "iwp-inline-code");
  if (token.content.includes(".iw")) {
    token.attrJoin("class", "iwp-inline-code-iw");
  }
  return defaultCodeInline(tokens, idx, options, env, self);
};

markdown.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx];
  const info = token.info.trim().split(/\s+/)[0] ?? "";
  const lang = normalizeFenceLang(info);
  if (lang === "mermaid") {
    // @iwp.link logic/docs/markdown_parser.md::n.9443
    const encodedSource = encodeDataAttribute(token.content);
    const escapedSource = escapeHtml(token.content);
    return `<div class="iwp-mermaid-block" data-mermaid-source="${encodedSource}" data-render-state="pending"><pre class="iwp-code-block" data-lang="mermaid"><code class="iwp-code language-mermaid">${escapedSource}</code></pre></div>\n`;
  }
  const highlighted = highlightCodeBlock(token.content, lang);
  return `<pre class="iwp-code-block" data-lang="${lang}"><code class="iwp-code language-${lang}">${highlighted}</code></pre>\n`;
};

function getHeadingText(tokens: Token[], index: number): string {
  const inline = tokens[index + 1];
  if (!inline || inline.type !== "inline") {
    return "";
  }
  return inline.content.trim();
}

export function buildDocArtifacts(rawMarkdown: string): DocArtifacts {
  // @iwp.link logic/docs/markdown_parser.md::n.3f9f
  // @iwp.link logic/docs/markdown_parser.md::n.6cac
  // @iwp.link logic/docs/markdown_parser.md::n.aa76
  const tokens = markdown.parse(rawMarkdown, {});
  normalizeLooseStrong(tokens);
  const slugCounter = new Map<string, number>();
  let headingIndex = 0;
  let seenPrimarySection = false;

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type !== "heading_open") {
      continue;
    }
    const level = Number(token.tag.slice(1)) as 1 | 2 | 3 | 4 | 5 | 6;
    const text = getHeadingText(tokens, i);
    headingIndex += 1;
    const base = slugify(text, headingIndex);
    const seq = slugCounter.get(base) ?? 0;
    slugCounter.set(base, seq + 1);
    const anchor = seq > 0 ? `${base}-${seq}` : base;
    token.attrSet("id", anchor);

    if (level === 2) {
      seenPrimarySection = true;
    }
    if (level === 3 && !seenPrimarySection) {
      token.attrJoin("class", "iwp-doc-subtitle");
    }
  }

  return {
    html: markdown.renderer.render(tokens, markdown.options, {}),
  };
}
