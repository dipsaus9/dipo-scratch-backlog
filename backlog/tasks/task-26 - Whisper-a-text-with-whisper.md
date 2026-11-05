---
id: TASK-26
title: Whisper a text with whisper
status: In Review
assignee: []
created_date: '2026-11-05 13:17'
updated_date: '2026-11-05 13:20'
labels:
  - 'tier:S'
milestone: m-0
dependencies: []
references:
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
