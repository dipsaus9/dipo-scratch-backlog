---
id: TASK-12
title: Say what the repository is for in the README
status: Parked
assignee: []
created_date: '2026-11-01 14:39'
updated_date: '2026-11-01 14:47'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - README.md
type: docs
ordinal: 12000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the README tells a reader what the repository is for.

Add one sentence under the heading of README.md that says this repository is a scratch fixture for dipo live tests. Change no other file. Run `bun test` with the Bash tool before you report.

```dipo
branch: "TASK-12/readme-purpose"
unknowns: []
test_plan:
  entries:
    - kind: "manual"
      check: "Read README.md"
      expect: "One sentence under the heading says the repository is a scratch fixture for dipo live tests"
park:
  reason: "by-maintainer"
  from: "In Progress"
  note: "hand test: park during the run"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 README.md has one sentence under its heading that says the repository is a scratch fixture for dipo live tests
- [ ] #2 The maintainer confirms the README sentence reads well
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Parked 2026-11-01 14:47 UTC: by-maintainer
- Detail: hand test: park during the run
- Run: run_01M6BS7RDJXKW9S7Z9M9MYXJ5R
- Criteria met: 0 of 2 (as the worker reported them)
- Loops: 0 of 3; CI attempts: 0 of 2
- Review rounds: 0, failed 0 of 3
- Budget used: 0 of 300,000 tokens; 0 of 90 turns; 0 of 45 minutes
- Last good commit: 456f9066eb5d6f2348aee1705751d0fd366a262b
<!-- SECTION:NOTES:END -->
