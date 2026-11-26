// The Router Confesses
// Writes a single one-line excuse, in the router's own voice, to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback: /output).
// Node 22 stdlib only. Deterministic. No network, no secrets,
// no reads outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I cut the climax to check whether the hero's Wi-Fi password is also 'password123' — professional courtesy, router to router.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
