import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the single dad joke from entry.txt (next to this script) to the
// grader's output directory, creating it when needed. Deterministic: the
// output is byte-for-byte the entry file.
const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, "entry.txt"));
