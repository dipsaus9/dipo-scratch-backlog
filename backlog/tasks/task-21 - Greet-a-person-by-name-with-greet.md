---
id: TASK-21
title: Greet a person by name with greet
status: Done
assignee: []
created_date: '2026-11-05 11:40'
updated_date: '2026-11-05 11:46'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/greet.ts
  - test/greet.test.ts
modified_files:
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
- [x] #1 greet in src/greet.ts returns Hello, followed by the name and an exclamation mark
- [x] #2 test/greet.test.ts tests greet with one name
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-05 11:46 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 20,451 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
