---
id: TASK-22
title: Keep a number in a range with clamp
status: Refined
assignee: []
created_date: '2026-11-05 11:40'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/clamp.ts
  - test/clamp.test.ts
type: feature
ordinal: 22000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Story: As a maintainer, I want to keep a number inside a range in one call so that small helpers stay one import away.

Add `clamp(value: number, min: number, max: number): number` to a new file src/clamp.ts: it returns the value limited to the range min to max. Add its test to a new file test/clamp.test.ts and run `bun test` with the Bash tool. Change no other file.

```dipo
branch: "TASK-22/clamp"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) test/clamp.test.ts covers clamp"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 clamp in src/clamp.ts returns min below the range, max above it and the value inside it
- [ ] #2 test/clamp.test.ts tests clamp below, inside and above the range
<!-- AC:END -->
