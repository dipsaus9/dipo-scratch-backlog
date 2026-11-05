import { expect, test } from "bun:test";

import { clamp } from "../src/clamp";

test("clamp returns min when the value is below the range", () => {
  expect(clamp(-5, 0, 10)).toBe(0);
});

test("clamp returns the value when it is inside the range", () => {
  expect(clamp(7, 0, 10)).toBe(7);
});

test("clamp returns max when the value is above the range", () => {
  expect(clamp(15, 0, 10)).toBe(10);
});
