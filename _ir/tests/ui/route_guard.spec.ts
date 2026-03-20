import { beforeEach, describe, expect, it } from "vitest";
import { createRouter, createStore } from "../helpers";

describe("Route Guard Fallback", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("redirects unknown routes to home", async () => {
    // @iwp.link tests/ui/test_route_guard.md::n.2a26
    // @iwp.link tests/ui/test_route_guard.md::n.3227
    const store = await createStore({ clearStorage: true });
    const router = createRouter();

    store.ensureRouteContract("/unknown/path", router as never);

    expect(router.go).toHaveBeenCalledWith("/");
  });

  it("allows known documentation route", async () => {
    // @iwp.link tests/ui/test_route_guard.md::n.bef2
    const store = await createStore({ clearStorage: true });
    const router = createRouter();

    store.ensureRouteContract("/docs/protocol", router as never);

    expect(router.go).not.toHaveBeenCalled();
  });
});
