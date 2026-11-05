---
id: TASK-25
title: Shout a text with shout
status: Done
assignee: []
created_date: '2026-11-05 12:42'
updated_date: '2026-11-05 12:57'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/shout.ts
  - test/shout.test.ts
modified_files:
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
- [x] #1 shout in src/shout.ts returns the text in upper case followed by an exclamation mark
- [x] #2 test/shout.test.ts tests shout with one word
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-05 12:57 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 14,098 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
