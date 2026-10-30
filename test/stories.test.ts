import { expect, test } from "bun:test";

import { countStories, exportCsv, exportJson, sortStories, storyIds, storyLine } from "../src/stories";

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

test("sortStories orders by the id number and leaves the input unchanged", () => {
  const stories = [
    { id: "TASK-10", title: "Ship" },
    { id: "TASK-2", title: "Export" },
  ];
  const sorted = sortStories(stories);
  expect(sorted.map((story) => story.id)).toEqual(["TASK-2", "TASK-10"]);
  expect(stories.map((story) => story.id)).toEqual(["TASK-10", "TASK-2"]);
  expect(sorted).not.toBe(stories);
});

test("sortStories of an empty list is []", () => {
  expect(sortStories([])).toEqual([]);
});

test("storyIds returns [] for an empty list and the ids in order for three stories", () => {
  expect(storyIds([])).toEqual([]);
  expect(
    storyIds([
      { id: "TASK-3", title: "Ship" },
      { id: "TASK-1", title: "Export" },
      { id: "TASK-2", title: "Fix" },
    ]),
  ).toEqual(["TASK-3", "TASK-1", "TASK-2"]);
});

test("countStories returns 0 for an empty list and 3 for three stories", () => {
  expect(countStories([])).toBe(0);
  expect(
    countStories([
      { id: "TASK-1", title: "Export" },
      { id: "TASK-2", title: "Fix" },
      { id: "TASK-3", title: "Ship" },
    ]),
  ).toBe(3);
});
