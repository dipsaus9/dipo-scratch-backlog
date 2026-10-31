---
id: TASK-10
title: Find a story by id with findStory
status: Done
assignee: []
created_date: '2026-10-31 08:18'
updated_date: '2026-10-31 08:21'
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
- [x] #1 findStory in src/stories.ts returns the story with the id, or undefined
- [x] #2 test/stories.test.ts tests a found id, a missing id and the empty list
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-10-31 08:21 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 16,288 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
