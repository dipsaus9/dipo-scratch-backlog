import { expect, test } from "bun:test";

import { whisper } from "../src/whisper";

test("whispering one word gives it in lower case followed by three dots", () => {
  expect(whisper("DIPO")).toBe("dipo...");
});
