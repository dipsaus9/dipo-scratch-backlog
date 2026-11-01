---
id: TASK-17
title: Find the shortest and longest story title
status: Done
assignee: []
created_date: '2026-11-01 19:01'
updated_date: '2026-11-01 19:02'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
modified_files:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 17000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the shortest and the longest story title of a list can be read in one call.

Add two functions to src/stories.ts, one at a time, and run `bun test` with the Bash tool after each one: `shortestTitle(stories: Story[]): string | undefined` and `longestTitle(stories: Story[]): string | undefined`. Add a test for each to test/stories.test.ts.

```dipo
branch: "TASK-17/story-lengths"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) shortestTitle and longestTitle each have a test with an empty list and a list of two"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 shortestTitle and longestTitle in src/stories.ts return the shortest and the longest title, or undefined for an empty list
- [x] #2 test/stories.test.ts tests each of the two with an empty list and a list of two
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-01 19:02 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 22,224 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
