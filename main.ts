// How Many Tabs Do You Have Open? — make.fun entry (program/v1).
//
// The program writes one text to /output/entry.txt: a single number in
// digits and nothing else — the honest count of open browser tabs.
//
// The count is 366: one tab for every day of a leap year. A year of
// opening "I'll read this later" and never closing any of it — articles,
// docs, half-finished forms, a recipe from February, the same video essay
// queued three times. Specific enough to be a real count, high enough to
// surprise, low enough to believe, and it hints at the habit behind it
// without a word of explanation.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TABS_OPEN = 366;
const OUTPUT_PATH = "/output/entry.txt";

// The entry is exactly the digits of the count: no newline, no spaces,
// no second number — the gate allows 1 to 5 characters and the judge
// reads a single number in digits and nothing else.
const entryText = String(TABS_OPEN);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, entryText, "utf8");

// Confirm what landed on disk is exactly the digits we meant to send.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== entryText || !/^[0-9]{1,5}$/.test(written)) {
  throw new Error(`entry.txt is not a single 1-5 digit number: ${JSON.stringify(written)}`);
}
