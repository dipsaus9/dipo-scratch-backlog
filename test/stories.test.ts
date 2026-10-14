import { expect, test } from "bun:test";

import { storyLine } from "../src/stories";

test("a story line names the id and the title", () => {
  expect(storyLine({ id: "TASK-1", title: "Export" })).toBe("TASK-1 Export");
});
