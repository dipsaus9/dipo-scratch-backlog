import { expect, test } from "bun:test";

import { reverseText } from "../src/reverse";

test("reversing an empty text gives an empty text", () => {
  expect(reverseText("")).toBe("");
});

test("reversing one word reverses its characters", () => {
  expect(reverseText("dipo")).toBe("opid");
});
