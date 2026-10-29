---
id: TASK-1
title: Add the CSV export command
status: In Progress
assignee: []
created_date: '2026-10-12 11:28'
updated_date: '2026-10-29 08:08'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/
  - test/
type: feature
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: maintainers can export the story list as CSV for a spreadsheet.

Add a function `exportCsv(stories: Story[]): string` in `src/stories.ts` that returns CSV text: a header row `id,title` first, then one row per story. Quote a field that contains a comma or a double quote. No CLI entry point or script: the function is the export. Tests go in `test/stories.test.ts`.

```dipo
branch: "TASK-1/add-the-csv-export-command"
unknowns:
  - q: "The pr-title check rejects scope `TASK-1` and only accepts DIPO-<n>[.<m>], deps, main or backlog. Should the PR title use a DIPO-<n> scope for this story, or should the story id for TASK-1 be changed to fit decision 0016?"
    status: "resolved"
    answer: "Keep the title feat(TASK-1) and the story id. The pr-title check in this repository was wrong: it was copied from another project and only knew DIPO-<n>. It now accepts TASK-<n> on main (PR #13). Nothing in the story changes; carry on with the work."
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) one CSV row per story, header first"
    - kind: "manual"
      check: "Paste the output of exportCsv into a spreadsheet"
      expect: "Every story shows on its own row"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 The export command writes one CSV row per story
- [x] #2 A header row names every column
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Parked 2026-10-29 08:05 UTC: ambiguous-spec
- Detail: The pr-title check rejects scope `TASK-1` and only accepts DIPO-<n>[.<m>], deps, main or backlog. Should the PR title use a DIPO-<n> scope for this story, or should the story id for TASK-1 be changed…
- Run: run_01M63AWTV8SSW92B74Z9XX0ECJ
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0 of 3; CI attempts: 1 of 2
- Review rounds: 1, failed 0 of 3
- Budget used: 23,831 of 300,000 tokens; 12 of 90 turns; 1 of 45 minutes
- Last good commit: 68aa35be317e9843c573a6bd72ca0e254ee48fff

Resumed 2026-10-29 08:08 UTC; grants: none; note: Keep the title feat(TASK-1) and the story id. The pr-title check in this repository was wrong: it was copied from another project and only knew DIPO-<n>. It now accepts TASK-<n> on main (PR #13). Not…
<!-- SECTION:NOTES:END -->
