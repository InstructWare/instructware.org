import { beforeEach, describe, expect, it } from "vitest";
import { createRouter, createStore } from "../helpers";

describe("Document Reader Integrity", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("opens manifesto in Chinese locale", async () => {
    // @iwp.link tests/docs/test_docs_reader.md::n.23f9
    // @iwp.link tests/docs/test_docs_reader.md::n.99a9
    const store = await createStore({ clearStorage: true });
    const router = createRouter();

    store.setLocale("zh-CN");
    store.openDoc("manifesto", router as never);

    expect(router.go).toHaveBeenCalledWith("/docs/manifesto");
    expect(store.state.activeDocAssetPath).toBe("../whitepaper/manifesto_zh.md");
    expect(store.currentHtml.value).toMatch(/<h2 id="[^"]+"/);
  });

  it("opens protocol in English locale", async () => {
    // @iwp.link tests/docs/test_docs_reader.md::n.9c19
    const store = await createStore({ clearStorage: true });
    const router = createRouter();

    store.setLocale("en-US");
    store.openDoc("protocol", router as never);

    expect(router.go).toHaveBeenCalledWith("/docs/protocol");
    expect(store.state.activeDocAssetPath).toBe("../protocol/IWP-v1.md");
    expect(store.currentHtml.value).toContain("Core Specification v1.0");
  });

  it("falls back to manifesto when doc id is unknown", async () => {
    // @iwp.link tests/docs/test_docs_reader.md::n.4d2b
    const store = await createStore({ clearStorage: true });
    const router = createRouter();

    store.setLocale("zh-CN");
    store.openDoc("unknown" as never, router as never);

    expect(store.state.activeDocId).toBe("manifesto");
    expect(router.go).toHaveBeenCalledWith("/docs/manifesto");
  });

  it("renders markdown strong/list/line-break for Chinese docs", async () => {
    // @iwp.link logic/docs/markdown_parser.md::n.3f9f
    // @iwp.link logic/docs/markdown_parser.md::n.42cc
    const store = await createStore({ clearStorage: true });
    const router = createRouter();

    store.setLocale("zh-CN");
    store.openDoc("manifesto", router as never);
    expect(store.currentHtml.value).toContain("<ul>");
    expect(store.currentHtml.value).toContain("<strong>硬件</strong>定义了物理边界。");
    expect(store.currentHtml.value).toContain("少一点与界面的对抗。<br>");

    store.openDoc("protocol", router as never);
    expect(store.currentHtml.value).toContain("状态（Status）");
    expect(store.currentHtml.value).toContain("编译上下文伴生产物");
    expect(store.currentHtml.value).toContain('class="iwp-mermaid-block"');
  });
});
