// The Router Confesses
// Writes a single one-line excuse, in the router's own voice, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback: /output).
// Node 22 stdlib only. Deterministic. No network, no secrets,
// no reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I cut the climax to check whether the hero's Wi-Fi password is also 'password123' — professional courtesy, router to router.";

// Guard: the competition gate rejects entries outside 1-200 chars or
// spanning multiple lines. Validate the line before writing so a bad
// entry fails loudly here instead of being scored as a zero.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
