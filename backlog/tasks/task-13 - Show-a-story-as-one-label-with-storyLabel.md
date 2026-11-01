---
id: TASK-13
title: Show a story as one label with storyLabel
status: Done
assignee: []
created_date: '2026-11-01 14:39'
updated_date: '2026-11-01 14:55'
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
ordinal: 13000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: a story can be shown as one label in the maintainer's preferred style.

Add `storyLabel(story: Story): string` to src/stories.ts that joins the id and the title with the separator the maintainer prefers. That separator is not written down in this repository or this story: ask the maintainer which separator to use before you write any code, and do not guess one. Add a test to test/stories.test.ts.

```dipo
branch: "TASK-13/story-label"
unknowns:
  - q: "Which separator should storyLabel put between the story id and the title (for example \" - \", \": \", \" | \", or a tab)?"
    status: "resolved"
    answer: "Use a colon and a space, so the label reads TASK-1: Export."
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) storyLabel joins id and title with the maintainer's separator"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 storyLabel in src/stories.ts joins the id and the title with the separator the maintainer chose
- [x] #2 test/stories.test.ts tests storyLabel with that separator
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Parked 2026-11-01 14:54 UTC: ambiguous-spec
- Detail: Which separator should storyLabel put between the story id and the title (for example " - ", ": ", " | ", or a tab)?
- Run: run_01M6BSMZC9CVHV8GC1ZSGWPGDF
- Criteria met: 0 of 2 (as the worker reported them)
- Loops: 0 of 3; CI attempts: 0 of 2
- Review rounds: 0, failed 0 of 3
- Budget used: 14,533 of 300,000 tokens; 2 of 90 turns; 0 of 45 minutes
- Last good commit: e75bfb18044b2ab9c1a799cc039be4e0cece5dfb

Resumed 2026-11-01 14:54 UTC; grants: none; note: Use a colon and a space, so the label reads TASK-1: Export.
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-01 14:55 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 22,277 of 300,000 tokens
- Runs: 1; resumes: 1
- Parks: 1
  - 2026-11-01 14:54 UTC ambiguous-spec: Which separator should storyLabel put between the story id and the title (for example " - ", ": ", " | ", or a tab)?
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
