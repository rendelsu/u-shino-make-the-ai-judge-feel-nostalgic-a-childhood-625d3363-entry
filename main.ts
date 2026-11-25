import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const TEXT = "Rain on hot pavement, the smell of my grandmother's banana fritters, and the ice cream cart's bell bring me back to our porch, where I still believed she would always be waiting.";
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, TEXT + "\n", "utf8");
chmodSync(outFile, 0o644);
