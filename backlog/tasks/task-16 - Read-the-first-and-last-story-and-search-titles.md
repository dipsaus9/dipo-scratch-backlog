---
id: TASK-16
title: Read the first and last story and search titles
status: In Review
assignee: []
created_date: '2026-11-01 15:00'
updated_date: '2026-11-01 15:03'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 16000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the first and the last story of a list, and a title search, can be read without indexing.

Add three functions to src/stories.ts, one at a time, and run `bun test` with the Bash tool after each one: `firstStory(stories: Story[]): Story | undefined` returns the first story, `lastStory(stories: Story[]): Story | undefined` returns the last one, and `storiesWithTitle(stories: Story[], word: string): Story[]` returns the stories whose title contains the word. Add a test for each to test/stories.test.ts.

```dipo
branch: "TASK-16/first-last-search"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) firstStory, lastStory and storiesWithTitle each have a test with an empty list and a list of two"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 firstStory and lastStory in src/stories.ts return the first and the last story, or undefined
- [x] #2 storiesWithTitle in src/stories.ts returns the stories whose title contains the word
- [x] #3 test/stories.test.ts tests each of the three with an empty list and a list of two
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Parked 2026-11-01 15:02 UTC: by-maintainer
- Detail: hand test: park mid-run
- Run: run_01M6BT39NS17VV1ZWRFNFS24JJ
- Criteria met: 0 of 3 (as the worker reported them)
- Loops: 0 of 3; CI attempts: 0 of 2
- Review rounds: 0, failed 0 of 3
- Budget used: 7,315 of 300,000 tokens; 4 of 90 turns; 0 of 45 minutes
- Last good commit: 2218a1aebe3e7c7bb78bf5112274b72958cf683f

Resumed 2026-11-01 15:02 UTC; grants: none; note: hand test: carry on with the story
<!-- SECTION:NOTES:END -->
