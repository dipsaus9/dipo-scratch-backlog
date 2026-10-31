---
id: TASK-10
title: Find a story by id with findStory
status: Ready
assignee: []
created_date: '2026-10-31 08:18'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 10000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: a story can be found by its id.

Add `findStory(stories: Story[], id: string): Story | undefined` to src/stories.ts. It returns the first story with that id. Add tests to test/stories.test.ts.

```dipo
branch: "TASK-10/find-story"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) findStory finds an existing id and returns undefined for a missing one"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 findStory in src/stories.ts returns the story with the id, or undefined
- [ ] #2 test/stories.test.ts tests a found id, a missing id and the empty list
<!-- AC:END -->
