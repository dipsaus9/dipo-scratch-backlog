---
id: TASK-9
title: List story ids with storyIds
status: In Review
assignee: []
created_date: '2026-10-30 21:53'
updated_date: '2026-10-30 21:54'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 9000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the ids of a story list can be listed.

Add `storyIds(stories: Story[]): string[]` to src/stories.ts. It returns the ids in the given order. Add tests to test/stories.test.ts.

```dipo
branch: "TASK-9/story-ids"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) storyIds returns [] for [] and the ids in order for three stories"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 storyIds in src/stories.ts returns the ids in the given order
- [x] #2 test/stories.test.ts tests the empty list and a list of three in order
<!-- AC:END -->
