# Test: Theme & Language Preferences

## Scenario 1: Theme persistence across restart
Given the user opens the site on `/`  
And selects theme mode `dark`  
When the application restarts  
Then `state/ui_prefs.theme_mode` MUST equal `dark`  
And the visual tokens MUST render dark palette.

## Scenario 2: Language switch affects navigation labels
Given current locale is `en-US`  
When the user switches language to `zh-CN`  
Then top navigation labels MUST display Chinese text  
And current route MUST remain unchanged.

## Scenario 3: Invalid theme input is ignored
Given current theme mode is `system`  
When event `theme_mode_changed("blue")` is emitted  
Then `state/ui_prefs.theme_mode` MUST remain `system`.
