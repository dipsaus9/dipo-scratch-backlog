---
id: TASK-15
title: Say what src/stories.ts holds in a header comment
status: In Review
assignee: []
created_date: '2026-11-01 14:55'
updated_date: '2026-11-01 14:57'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
type: docs
ordinal: 15000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: a reader of src/stories.ts sees at once what the file holds.

Add one comment line at the top of src/stories.ts that says the file holds the story helpers of this fixture. Change no other line. Run `bun test` with the Bash tool before you report.

```dipo
branch: "TASK-15/stories-header"
unknowns: []
test_plan:
  entries:
    - kind: "manual"
      check: "Read the first line of src/stories.ts"
      expect: "A comment says the file holds the story helpers of this fixture"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 src/stories.ts starts with one comment line that says the file holds the story helpers of this fixture
- [ ] #2 The maintainer confirms the header comment reads well
<!-- AC:END -->
