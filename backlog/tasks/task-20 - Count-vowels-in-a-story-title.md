---
id: TASK-20
title: Count vowels in a story title
status: In Progress
assignee: []
created_date: '2026-11-03 14:28'
updated_date: '2026-11-03 14:35'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
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
- [ ] #1 titleVowels in src/stories.ts counts the vowels a, e, i, o and u in a story title, in either case
- [ ] #2 test/stories.test.ts tests titleVowels with an empty title and a title of mixed case
<!-- AC:END -->
