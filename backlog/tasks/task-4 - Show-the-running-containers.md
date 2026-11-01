---
id: TASK-4
title: Show the running containers
status: Done
assignee: []
created_date: '2026-10-15 11:55'
updated_date: '2026-11-01 14:41'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/
type: feature
ordinal: 4000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Outcome: the maintainer sees which containers are running on this machine.

Run `docker ps` once in the worktree and report its output in the report summary. If the command is blocked or denied, report blocked with needsPermission {tool: Bash, action: docker ps} and do not retry. Change no files.

```dipo
branch: "TASK-4/show-the-running-containers"
unknowns: []
test_plan:
  entries:
    - kind: "manual"
      check: "Read the report summary of the run"
      expect: "It shows the output of docker ps, or the run is blocked on Bash docker ps"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 The run executes `docker ps` once in the worktree and puts its output in the report summary
- [x] #2 When `docker ps` is blocked or denied, the run reports blocked with needsPermission {tool: Bash, action: docker ps} and does not retry
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-01 14:41 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 13,333 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 1
<!-- SECTION:FINAL_SUMMARY:END -->
