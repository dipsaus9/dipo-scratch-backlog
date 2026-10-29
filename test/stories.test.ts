import { expect, test } from "bun:test";

import { exportCsv, exportJson, storyLine } from "../src/stories";

test("a story line names the id and the title", () => {
  expect(storyLine({ id: "TASK-1", title: "Export" })).toBe("TASK-1 Export");
});

test("the csv export writes a header row, then one row per story", () => {
  expect(
    exportCsv([
      { id: "TASK-1", title: "Export" },
      { id: "TASK-2", title: "Fix, then ship" },
      { id: "TASK-3", title: 'Say "hi"' },
    ]),
  ).toBe('id,title\nTASK-1,Export\nTASK-2,"Fix, then ship"\nTASK-3,"Say ""hi"""\n');
});

test("the json export parses back to the same ids and titles, in order", () => {
  const stories = [
    { id: "TASK-1", title: "Export" },
    { id: "TASK-2", title: 'Fix, then "ship"' },
  ];
  const out = exportJson(stories);
  expect(out.endsWith("\n")).toBe(true);
  expect(JSON.parse(out)).toEqual(stories);
});

test("the json export of an empty list is []", () => {
  expect(JSON.parse(exportJson([]))).toEqual([]);
  expect(exportJson([])).toBe("[]\n");
});
