import type { Router } from "vitepress";

const ALLOWED_ROUTES = new Set(["/", "/docs", "/docs/manifesto", "/docs/protocol"]);

export function ensureRouteContract(path: string, router: Router): void {
  // @iwp.link logic/middleware/route_fallback.md::n.113f
  // @iwp.link logic/middleware/route_fallback.md::n.2518
  // @iwp.link logic/middleware/route_fallback.md::n.29bb
  // @iwp.link logic/middleware/route_fallback.md::n.4f4f
  // @iwp.link logic/middleware/route_fallback.md::n.59a1
  // @iwp.link logic/middleware/route_fallback.md::n.5ac7
  // @iwp.link logic/middleware/route_fallback.md::n.87c6
  // @iwp.link logic/middleware/route_fallback.md::n.8c1c
  // @iwp.link logic/middleware/route_fallback.md::n.96ab
  // @iwp.link logic/middleware/route_fallback.md::n.b4eb
  // @iwp.link logic/middleware/route_fallback.md::n.d4ca
  // @iwp.link logic/middleware/route_fallback.md::n.ddc0
  // @iwp.link logic/middleware/route_fallback.md::n.f42c
  // @iwp.link logic/middleware/route_fallback.md::n.feb5
  // @iwp.link system.md::n.f8e1
  const normalized = path
    .replace(/[?#].*$/, "")
    .replace(/\/index\.html$/, "")
    .replace(/\.html$/, "")
    || "/";
  if (!ALLOWED_ROUTES.has(normalized)) {
    router.go("/");
  }
}
