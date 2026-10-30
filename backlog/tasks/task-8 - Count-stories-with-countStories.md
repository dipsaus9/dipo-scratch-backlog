---
id: TASK-8
title: Count stories with countStories
status: In Review
assignee: []
created_date: '2026-10-30 16:42'
updated_date: '2026-10-30 16:44'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
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
