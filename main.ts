import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "My manager approved this message, which is why you are reading it instead of the reply I typed first and deleted on Friday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const target = path.join(outDir, "entry.txt");
fs.writeFileSync(target, ENTRY, "utf8");
fs.chmodSync(target, 0o644);
