---
id: TASK-21
title: Greet a person by name with greet
status: Refined
assignee: []
created_date: '2026-11-05 11:40'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/greet.ts
  - test/greet.test.ts
type: feature
ordinal: 21000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Story: As a maintainer, I want to greet a person by name in one call so that small helpers stay one import away.

Add `greet(name: string): string` to a new file src/greet.ts: it returns `Hello, <name>!`. Add its test to a new file test/greet.test.ts and run `bun test` with the Bash tool. Change no other file.

```dipo
branch: "TASK-21/greet"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) test/greet.test.ts covers greet"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 greet in src/greet.ts returns Hello, followed by the name and an exclamation mark
- [ ] #2 test/greet.test.ts tests greet with one name
<!-- AC:END -->
