import { marked } from "marked";
import type { Tokens } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true,
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

marked.use({
  renderer: {
    code(token: Tokens.Code) {
      const language = (token.lang || "").trim().toLowerCase();
      if (language !== "mermaid") {
        return false;
      }
      return `<div class="mermaid">${escapeHtml(token.text)}</div>`;
    },
  },
});

const BLOCKED_TAGS = new Set([
  "script",
  "iframe",
  "object",
  "embed",
  "style",
  "link",
  "meta",
  "base",
  "form",
  "input",
  "button",
  "textarea",
  "select",
]);

const URL_ATTRIBUTES = new Set(["href", "src", "xlink:href"]);

function isSafeUrl(url: string): boolean {
  const normalized = url.trim().toLowerCase();
  if (!normalized) {
    return false;
  }
  if (
    normalized.startsWith("javascript:") ||
    normalized.startsWith("vbscript:") ||
    normalized.startsWith("data:") ||
    normalized.startsWith("file:")
  ) {
    return false;
  }
  if (
    normalized.startsWith("#") ||
    normalized.startsWith("/") ||
    normalized.startsWith("./") ||
    normalized.startsWith("../")
  ) {
    return true;
  }
  return (
    normalized.startsWith("http://") ||
    normalized.startsWith("https://") ||
    normalized.startsWith("mailto:")
  );
}

function sanitizeRenderedHtml(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const allElements = Array.from(doc.body.querySelectorAll("*"));

  for (const element of allElements) {
    const tagName = element.tagName.toLowerCase();
    if (BLOCKED_TAGS.has(tagName)) {
      element.remove();
      continue;
    }
    const attributes = Array.from(element.attributes);
    for (const attribute of attributes) {
      const attrName = attribute.name.toLowerCase();
      const attrValue = attribute.value;
      if (attrName.startsWith("on")) {
        element.removeAttribute(attribute.name);
        continue;
      }
      if (URL_ATTRIBUTES.has(attrName) && !isSafeUrl(attrValue)) {
        element.removeAttribute(attribute.name);
      }
    }
    if (tagName === "a" && element.getAttribute("target") === "_blank") {
      element.setAttribute("rel", "noopener noreferrer");
    }
  }

  return doc.body.innerHTML;
}

export function renderMarkdown(markdown: string): string {
  const rawHtml = marked.parse(markdown) as string;
  return sanitizeRenderedHtml(rawHtml);
}
