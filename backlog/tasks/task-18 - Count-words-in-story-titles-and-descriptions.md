---
id: TASK-18
title: Count words in story titles and descriptions
status: In Review
assignee: []
created_date: '2026-11-01 19:03'
updated_date: '2026-11-01 19:04'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
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
