# Test: Route Guard Fallback

## Scenario 1: Unknown route redirects home
Given current route is `/docs`  
When user requests route `/unknown/path`  
Then middleware MUST redirect to `/`.

## Scenario 2: Allowed route passes through
Given current route is `/`  
When user requests route `/docs/protocol`  
Then middleware MUST allow transition  
And route becomes `/docs/protocol`.
