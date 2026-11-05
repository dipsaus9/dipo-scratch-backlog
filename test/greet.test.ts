import { expect, test } from "bun:test";

import { greet } from "../src/greet";

test("greet returns Hello, followed by the name and an exclamation mark", () => {
  expect(greet("Ada")).toBe("Hello, Ada!");
});
