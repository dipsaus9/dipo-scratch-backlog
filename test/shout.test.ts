import { expect, test } from "bun:test";

import { shout } from "../src/shout";

test("shouting one word gives it in upper case with an exclamation mark", () => {
  expect(shout("dipo")).toBe("DIPO!");
});
