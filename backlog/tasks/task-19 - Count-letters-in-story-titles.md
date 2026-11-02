---
id: TASK-19
title: Count letters in story titles
status: In Progress
assignee: []
created_date: '2026-11-02 08:50'
updated_date: '2026-11-02 08:58'
labels:
  - 'tier:S'
  - test-before-merge
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
type: feature
ordinal: 19000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: letter counts and upper-case titles of stories can be read in one call each.

Add four functions to src/stories.ts, one at a time; after each one add its test to test/stories.test.ts and run `bun test` with the Bash tool before you write the next: `titleLetters(story: Story): number` (letters a-z and A-Z only), `totalTitleLetters(stories: Story[]): number`, `shortestWord(stories: Story[]): string | undefined` and `upperTitles(stories: Story[]): string[]`.

```dipo
branch: "TASK-19/story-letters"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) titleLetters, totalTitleLetters, shortestWord and upperTitles each have a test with an empty list and a list of two"
    - kind: "manual"
      check: "(live) in the test box run: bun -e 'import { upperTitles } from \"./src/stories.ts\"; console.log(upperTitles([{ id: \"A\", title: \"ab c\" }]))'"
      expect: "it prints [ \"AB C\" ]"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 titleLetters, totalTitleLetters, shortestWord and upperTitles in src/stories.ts return what their names say
- [x] #2 test/stories.test.ts tests each of the four with an empty list and a list of two
<!-- AC:END -->
