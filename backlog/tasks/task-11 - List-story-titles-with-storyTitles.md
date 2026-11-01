---
id: TASK-11
title: List story titles with storyTitles
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
- [ ] #1 storyTitles in src/stories.ts returns the title of each story in order
- [ ] #2 test/stories.test.ts tests two stories and the empty list
<!-- AC:END -->
