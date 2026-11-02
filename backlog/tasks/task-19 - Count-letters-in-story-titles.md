---
id: TASK-19
title: Count letters in story titles
status: Done
assignee: []
created_date: '2026-11-02 08:50'
updated_date: '2026-11-02 09:08'
labels:
  - 'tier:S'
  - test-before-merge
milestone: m-0
dependencies: []
references:
  - src/stories.ts
  - test/stories.test.ts
modified_files:
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

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-02 09:08 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 3, failed 0
- Budget used: 55,959 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
