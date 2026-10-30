---
id: TASK-8
title: Count stories with countStories
status: Done
assignee: []
created_date: '2026-10-30 16:42'
updated_date: '2026-10-30 16:45'
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
ordinal: 8000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the story list can be counted.

Add `countStories(stories: Story[]): number` to src/stories.ts. It returns how many stories the list holds. Add tests to test/stories.test.ts.

```dipo
branch: "TASK-8/count-stories"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) countStories returns 0 for [] and 3 for three stories"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 countStories in src/stories.ts returns the number of stories in the list
- [x] #2 test/stories.test.ts tests the empty list and a list of three
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-10-30 16:45 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 15,581 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
