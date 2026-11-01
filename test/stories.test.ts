import { expect, test } from "bun:test";

import { countStories, exportCsv, exportJson, findStory, firstStory, lastStory, longestTitle, shortestTitle, sortStories, storyIds, storyLabel, storyLine, storyTitles, storiesWithTitle, titleWords, totalTitleWords, longestWord, averageTitleWords, titleCount } from "../src/stories";

test("a story line names the id and the title", () => {
  expect(storyLine({ id: "TASK-1", title: "Export" })).toBe("TASK-1 Export");
});

test("a story label joins the id and the title with a colon and a space", () => {
  expect(storyLabel({ id: "TASK-1", title: "Export" })).toBe("TASK-1: Export");
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

test("storyTitles returns the titles in order and [] for no stories", () => {
  expect(storyTitles([])).toEqual([]);
  expect(
    storyTitles([
      { id: "TASK-2", title: "Fix" },
      { id: "TASK-1", title: "Export" },
    ]),
  ).toEqual(["Fix", "Export"]);
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

test("findStory returns the story with the id, undefined for a missing id, and undefined for an empty list", () => {
  const stories = [
    { id: "TASK-1", title: "Export" },
    { id: "TASK-2", title: "Fix" },
  ];
  expect(findStory(stories, "TASK-2")).toEqual({ id: "TASK-2", title: "Fix" });
  expect(findStory(stories, "TASK-9")).toBeUndefined();
  expect(findStory([], "TASK-1")).toBeUndefined();
});

test("firstStory and lastStory return undefined for an empty list", () => {
  expect(firstStory([])).toBeUndefined();
  expect(lastStory([])).toBeUndefined();
});

test("firstStory and lastStory return the first and the last of two stories", () => {
  const stories = [
    { id: "TASK-1", title: "Export" },
    { id: "TASK-2", title: "Fix" },
  ];
  expect(firstStory(stories)).toEqual({ id: "TASK-1", title: "Export" });
  expect(lastStory(stories)).toEqual({ id: "TASK-2", title: "Fix" });
});

test("storiesWithTitle returns [] for an empty list and the stories whose title contains the word", () => {
  expect(storiesWithTitle([], "Export")).toEqual([]);
  const stories = [
    { id: "TASK-1", title: "Export" },
    { id: "TASK-2", title: "Fix" },
  ];
  expect(storiesWithTitle(stories, "Export")).toEqual([{ id: "TASK-1", title: "Export" }]);
  expect(storiesWithTitle(stories, "Nothing")).toEqual([]);
});

test("shortestTitle returns undefined for an empty list and the shorter title of two", () => {
  expect(shortestTitle([])).toBeUndefined();
  expect(
    shortestTitle([
      { id: "TASK-1", title: "Export" },
      { id: "TASK-2", title: "Fix" },
    ]),
  ).toBe("Fix");
});

test("longestTitle returns undefined for an empty list and the longer title of two", () => {
  expect(longestTitle([])).toBeUndefined();
  expect(
    longestTitle([
      { id: "TASK-1", title: "Export" },
      { id: "TASK-2", title: "Fix" },
    ]),
  ).toBe("Export");
});

test("titleWords of an empty title is 0 and counts the words of a title of two", () => {
  expect(titleWords({ id: "TASK-1", title: "" })).toBe(0);
  expect(titleWords({ id: "TASK-2", title: "Fix, then ship" })).toBe(3);
  expect(titleWords({ id: "TASK-3", title: "Export  data" })).toBe(2);
});

test("totalTitleWords is 0 for an empty list and sums the words of two stories", () => {
  expect(totalTitleWords([])).toBe(0);
  expect(
    totalTitleWords([
      { id: "TASK-1", title: "Fix, then ship" },
      { id: "TASK-2", title: "Export" },
    ]),
  ).toBe(4);
});

test("longestWord is undefined for an empty list and the longest word of two stories", () => {
  expect(longestWord([])).toBeUndefined();
  expect(
    longestWord([
      { id: "TASK-1", title: "Fix, then ship" },
      { id: "TASK-2", title: "Export" },
    ]),
  ).toBe("Export");
});

test("averageTitleWords is 0 for an empty list and the mean word count of two stories", () => {
  expect(averageTitleWords([])).toBe(0);
  expect(
    averageTitleWords([
      { id: "TASK-1", title: "Fix, then ship" },
      { id: "TASK-2", title: "Export" },
    ]),
  ).toBe(2);
});

test("titleCount is 0 for an empty list and counts the stories with a non-empty title", () => {
  expect(titleCount([])).toBe(0);
  expect(
    titleCount([
      { id: "TASK-1", title: "Export" },
      { id: "TASK-2", title: "" },
    ]),
  ).toBe(1);
});
