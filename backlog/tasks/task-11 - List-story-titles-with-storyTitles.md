---
id: TASK-11
title: List story titles with storyTitles
status: Done
assignee: []
created_date: '2026-11-01 14:39'
updated_date: '2026-11-01 14:45'
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
ordinal: 11000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: a list of stories can be turned into their titles.

Add `storyTitles(stories: Story[]): string[]` to src/stories.ts. It returns the title of each story in order. Add tests to test/stories.test.ts. Run `bun test` with the Bash tool before you report.

```dipo
branch: "TASK-11/story-titles"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) storyTitles returns the titles in order and an empty list for no stories"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 storyTitles in src/stories.ts returns the title of each story in order
- [x] #2 test/stories.test.ts tests two stories and the empty list
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-01 14:45 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 18,554 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
