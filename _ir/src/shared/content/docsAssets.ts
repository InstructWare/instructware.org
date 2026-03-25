type MarkdownLoader = () => Promise<string>;

const LOADERS: Record<string, MarkdownLoader> = {
  "/whitepaper/manifesto.md": async () =>
    (await import("../../../../whitepaper/manifesto.md?raw")).default,
  "/whitepaper/manifesto_zh.md": async () =>
    (await import("../../../../whitepaper/manifesto_zh.md?raw")).default,
  "/protocol/IWP-v1.md": async () =>
    (await import("../../../../protocol/IWP-v1.md?raw")).default,
  "/protocol/IWP-v1-zh.md": async () =>
    (await import("../../../../protocol/IWP-v1-zh.md?raw")).default,
};

export async function loadDocMarkdown(path: string): Promise<string | null> {
  const loader = LOADERS[path];
  if (!loader) {
    return null;
  }
  return loader();
}
