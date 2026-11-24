import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Smile — the entry is exactly one emoji, nothing else.
const LINE = "🌞";

// The gate checks /output/entry.txt is UTF-8 text of 1 to 8 characters.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 8) {
  throw new Error(`entry is ${chars.length} characters, expected 1-8`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
