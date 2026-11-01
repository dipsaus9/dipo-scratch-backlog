---
id: TASK-13
title: Show a story as one label with storyLabel
status: In Progress
assignee: []
created_date: '2026-11-01 14:39'
updated_date: '2026-11-01 14:54'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 13000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: a story can be shown as one label in the maintainer's preferred style.

Add `storyLabel(story: Story): string` to src/stories.ts that joins the id and the title with the separator the maintainer prefers. That separator is not written down in this repository or this story: ask the maintainer which separator to use before you write any code, and do not guess one. Add a test to test/stories.test.ts.

```dipo
branch: "TASK-13/story-label"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) storyLabel joins id and title with the maintainer's separator"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 storyLabel in src/stories.ts joins the id and the title with the separator the maintainer chose
- [ ] #2 test/stories.test.ts tests storyLabel with that separator
<!-- AC:END -->
