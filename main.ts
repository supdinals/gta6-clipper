// gta6-clipper-01 entry program.
//
// The whole entry is a YouTube video (see VIDEO.json). This program's only
// job is to hand that file to the grader: it reads VIDEO.json from the
// repository folder and writes an identical copy into the output folder.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const payload = readFileSync(join(repoDir, "VIDEO.json"));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), payload);
