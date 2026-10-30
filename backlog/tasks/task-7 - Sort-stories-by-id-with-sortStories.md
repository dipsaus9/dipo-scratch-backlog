---
id: TASK-7
title: Sort stories by id with sortStories
status: In Progress
assignee: []
created_date: '2026-10-30 09:26'
updated_date: '2026-10-30 09:26'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 7000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the story list can be sorted by id.

Add `sortStories(stories: Story[]): Story[]` to src/stories.ts. It returns a new array sorted by the number after the last hyphen of each id (TASK-2 before TASK-10), and leaves the input unchanged. Add tests to test/stories.test.ts.

```dipo
branch: "TASK-7/sort-stories-by-id"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) sortStories orders TASK-2 before TASK-10, keeps the input unchanged, and returns [] for []"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 sortStories in src/stories.ts returns a new array sorted by the id number, leaving the input unchanged
- [ ] #2 test/stories.test.ts tests TASK-2 before TASK-10, an unchanged input, and the empty list
<!-- AC:END -->
