# Logic: Route Fallback Middleware (`route_fallback`)

## Trigger
- Any route transition request.

## Guard Rules
- Allowed routes:
  - `/`
  - `/docs`
  - `/docs/manifesto`
  - `/docs/protocol`
- If requested route is not in allowed set, redirect to `/`.

## Execution Flow
1. Normalize incoming route path and strip unsupported query fragments for guard matching.
2. Check normalized route against the allowed route set.
3. If route is allowed, continue navigation pipeline without mutation.
4. If route is not allowed, issue redirect to `/` and mark the transition as fallback-handled.
5. After redirect resolution, hand off to post-redirect stage for state-preservation rules.

## Post-Redirect Rules
- Preserve `locale` and `theme_mode`.
- Do not reset docs runtime unless target route is a docs reader route transition.
