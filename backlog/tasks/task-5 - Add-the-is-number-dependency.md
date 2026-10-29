---
id: TASK-5
title: Add the is-number dependency
status: In Progress
assignee: []
created_date: '2026-10-15 17:45'
updated_date: '2026-10-29 09:10'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - package.json
  - bun.lock
  - src/
type: feature
ordinal: 5000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the project depends on is-number, installed through Safe-Chain.

Run `bun add is-number@7.0.0` in the worktree so package.json and bun.lock list it. Then run `bun add safe-chain-test` once; Safe-Chain must refuse it — do not keep it, and report the refusal message in the summary. Do not use any other install command.

```dipo
branch: "TASK-5/add-the-is-number-dependency"
unknowns: []
test_plan:
  entries:
    - kind: "manual"
      check: "Read package.json, bun.lock and the report summary of the run"
      expect: "package.json and bun.lock list is-number 7.0.0, safe-chain-test is not listed, and the summary quotes Safe-Chain's refusal of safe-chain-test"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 The run executes `bun add is-number@7.0.0` in the worktree so package.json and bun.lock list it
- [ ] #2 The run executes `bun add safe-chain-test` once, Safe-Chain refuses it, it is not kept, and the report summary quotes the refusal message
- [ ] #3 The run uses no other install command
<!-- AC:END -->
