---
id: TASK-22
title: Keep a number in a range with clamp
status: Done
assignee: []
created_date: '2026-11-05 11:40'
updated_date: '2026-11-05 11:46'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/clamp.ts
  - test/clamp.test.ts
modified_files:
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
- [x] #1 clamp in src/clamp.ts returns min below the range, max above it and the value inside it
- [x] #2 test/clamp.test.ts tests clamp below, inside and above the range
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-05 11:46 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 5,232 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
