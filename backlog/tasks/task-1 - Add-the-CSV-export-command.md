---
id: TASK-1
title: Add the CSV export command
status: In Progress
assignee: []
created_date: '2026-10-12 11:28'
updated_date: '2026-10-29 08:04'
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
unknowns: []
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
- [ ] #1 The export command writes one CSV row per story
- [ ] #2 A header row names every column
<!-- AC:END -->
