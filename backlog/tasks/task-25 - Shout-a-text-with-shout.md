---
id: TASK-25
title: Shout a text with shout
status: Refined
assignee: []
created_date: '2026-11-05 12:42'
updated_date: '2026-11-05 12:43'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/shout.ts
  - test/shout.test.ts
type: feature
ordinal: 25000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Story: As a maintainer, I want to shout a text in one call so that small helpers stay one import away.

Add `shout(text: string): string` to a new file src/shout.ts: it returns the text in upper case followed by an exclamation mark. Add its test to a new file test/shout.test.ts and run `bun test` with the Bash tool. Change no other file.

```dipo
branch: "TASK-25/shout"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) test/shout.test.ts covers shout"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 shout in src/shout.ts returns the text in upper case followed by an exclamation mark
- [ ] #2 test/shout.test.ts tests shout with one word
<!-- AC:END -->
