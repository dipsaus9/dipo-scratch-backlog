---
id: TASK-18
title: Count words in story titles and descriptions
status: Done
assignee: []
created_date: '2026-11-01 19:03'
updated_date: '2026-11-01 19:06'
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
ordinal: 18000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: word counts of story titles can be read in one call each.

Add four functions to src/stories.ts, one at a time; after each one add its test to test/stories.test.ts and run `bun test` with the Bash tool before you write the next: `titleWords(story: Story): number`, `totalTitleWords(stories: Story[]): number`, `longestWord(stories: Story[]): string | undefined` and `averageTitleWords(stories: Story[]): number` (0 for an empty list).

```dipo
branch: "TASK-18/story-words"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) titleWords, totalTitleWords, longestWord and averageTitleWords each have a test with an empty list and a list of two"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 titleWords, totalTitleWords, longestWord and averageTitleWords in src/stories.ts return what their names say
- [x] #2 test/stories.test.ts tests each of the four with an empty list and a list of two
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-01 19:06 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 22,564 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
