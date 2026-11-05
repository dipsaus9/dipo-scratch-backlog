---
id: TASK-23
title: Read the initials of a name with initials
status: Refined
assignee: []
created_date: '2026-11-05 11:40'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/initials.ts
  - test/initials.test.ts
type: feature
ordinal: 23000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Story: As a maintainer, I want to show a short tag for a name in one call so that small helpers stay one import away.

Add `initials(name: string): string` to a new file src/initials.ts: it returns the upper-case first letter of each space-separated word. Add its test to a new file test/initials.test.ts and run `bun test` with the Bash tool. Change no other file.

```dipo
branch: "TASK-23/initials"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) test/initials.test.ts covers initials"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 initials in src/initials.ts returns the upper-case first letter of each word of the name
- [ ] #2 test/initials.test.ts tests initials with a two-word name
<!-- AC:END -->
