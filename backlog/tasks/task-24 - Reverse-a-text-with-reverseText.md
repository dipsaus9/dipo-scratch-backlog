---
id: TASK-24
title: Reverse a text with reverseText
status: Done
assignee: []
created_date: '2026-11-05 11:40'
updated_date: '2026-11-05 11:46'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/reverse.ts
  - test/reverse.test.ts
modified_files:
  - src/reverse.ts
  - test/reverse.test.ts
type: feature
ordinal: 24000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Story: As a maintainer, I want to read a word backwards in one call so that small helpers stay one import away.

Add `reverseText(text: string): string` to a new file src/reverse.ts: it returns the text with its characters in reverse order. Add its test to a new file test/reverse.test.ts and run `bun test` with the Bash tool. Change no other file.

```dipo
branch: "TASK-24/reverse"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) test/reverse.test.ts covers reverseText"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 reverseText in src/reverse.ts returns the characters of the text in reverse order
- [x] #2 test/reverse.test.ts tests reverseText with an empty text and one word
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-05 11:46 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 4,954 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
