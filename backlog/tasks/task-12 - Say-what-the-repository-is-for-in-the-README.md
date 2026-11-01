---
id: TASK-12
title: Say what the repository is for in the README
status: In Progress
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
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 README.md has one sentence under its heading that says the repository is a scratch fixture for dipo live tests
- [ ] #2 The maintainer confirms the README sentence reads well
<!-- AC:END -->
