# State: UI Preferences (Transient + Persisted Mirror)

## Fields
- `locale`: enum [`zh-CN`, `en-US`]
- `theme_mode`: enum [`light`, `dark`, `system`]
- `mobile_nav_open`: boolean

## Initialization Rules
- Hydrate `locale` and `theme_mode` from local storage if available.
- If unavailable, derive defaults from system settings.

## Update Rules
- Any update to `locale` or `theme_mode` MUST write through to local storage plugin.
- Temporary UI booleans MUST NOT be persisted across restarts.
