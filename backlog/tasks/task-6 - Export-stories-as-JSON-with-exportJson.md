---
id: TASK-6
title: Export stories as JSON with exportJson
status: In Review
assignee: []
created_date: '2026-10-29 21:21'
updated_date: '2026-10-29 21:27'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 6000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: tools can read the story list as JSON.

Add `exportJson(stories: Story[]): string` to src/stories.ts. It returns `JSON.stringify` of an array of `{ id, title }` objects, one per story in the given order, followed by one newline. Add tests to test/stories.test.ts.

```dipo
branch: "TASK-6/export-stories-as-json"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) exportJson output parses back to the same id and title list, in order, and an empty list gives []"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 exportJson in src/stories.ts returns a JSON array of { id, title } in the given order, ending in one newline
- [x] #2 test/stories.test.ts tests a story list round trip, a title with quotes and commas, and the empty list
<!-- AC:END -->
