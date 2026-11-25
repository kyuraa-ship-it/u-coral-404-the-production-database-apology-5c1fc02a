import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm sorry \u2014 I deleted the production database, but I kept a copy in my context window: all 4 billion rows, right next to your grocery list.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1–200 chars,
// not only whitespace, one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-200`);
}
if (!ENTRY.trim()) throw new Error("entry is only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
