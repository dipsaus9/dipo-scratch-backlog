---
id: TASK-20
title: Count vowels in a story title
status: Done
assignee: []
created_date: '2026-11-03 14:28'
updated_date: '2026-11-03 14:36'
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
ordinal: 20000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Story: As a maintainer, I want to read how many vowels a story title holds so that I can compare titles by their sound in one call.

Add `titleVowels(story: Story): number` to src/stories.ts: it counts the vowels a, e, i, o and u (upper or lower case) in the story's title. Add its test to test/stories.test.ts and run `bun test` with the Bash tool.

```dipo
branch: "TASK-20/title-vowels"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) titleVowels has a test with an empty title and a title of mixed case"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 titleVowels in src/stories.ts counts the vowels a, e, i, o and u in a story title, in either case
- [x] #2 test/stories.test.ts tests titleVowels with an empty title and a title of mixed case
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-03 14:36 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 18,980 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
