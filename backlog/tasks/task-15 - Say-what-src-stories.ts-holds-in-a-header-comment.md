---
id: TASK-15
title: Say what src/stories.ts holds in a header comment
status: Done
assignee: []
created_date: '2026-11-01 14:55'
updated_date: '2026-11-01 15:00'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
modified_files:
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

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-01 15:00 UTC
- Criteria met: 1 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 2, failed 0
- Budget used: 9,097 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
