---
id: TASK-14
title: Read the last story with lastStory
status: Ready
assignee: []
created_date: '2026-11-01 14:39'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 14000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the last story of a list can be read without indexing.

Add `lastStory(stories: Story[]): Story | undefined` to src/stories.ts. It returns the last story, or undefined for an empty list. Add tests to test/stories.test.ts.

```dipo
branch: "TASK-14/last-story"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) lastStory returns the last story and undefined for an empty list"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 lastStory in src/stories.ts returns the last story or undefined
- [ ] #2 test/stories.test.ts tests a list of two and the empty list
<!-- AC:END -->
