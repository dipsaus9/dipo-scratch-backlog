---
id: TASK-26
title: Whisper a text with whisper
status: Done
assignee: []
created_date: '2026-11-05 13:17'
updated_date: '2026-11-05 13:21'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
  - src/whisper.ts
  - test/whisper.test.ts
modified_files:
  - src/whisper.ts
  - test/whisper.test.ts
type: feature
ordinal: 26000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Story: As a maintainer, I want to whisper a text in one call so that small helpers stay one import away.

Add `whisper(text: string): string` to a new file src/whisper.ts: it returns the text in lower case followed by three dots. Add its test to a new file test/whisper.test.ts and run `bun test` with the Bash tool. Change no other file.

```dipo
branch: "TASK-26/whisper"
unknowns: []
test_plan:
  entries:
    - kind: "automated"
      check: "(unit) test/whisper.test.ts covers whisper"
```
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 whisper in src/whisper.ts returns the text in lower case followed by three dots
- [x] #2 test/whisper.test.ts tests whisper with one word
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Closed 2026-11-05 13:21 UTC
- Criteria met: 2 of 2 (as the worker reported them)
- Loops: 0; CI attempts: 0 (red heads, reviewed or closed out, before this close-out)
- Review rounds: 1, failed 0
- Budget used: 14,138 of 300,000 tokens
- Runs: 1; resumes: 0
- Parks: none
- Grants: none
- Web calls: 0 searches, 0 fetches
- Proposals filed: 0
<!-- SECTION:FINAL_SUMMARY:END -->
