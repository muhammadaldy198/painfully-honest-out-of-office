// painfully-honest-out-of-office: writes the one winning out-of-office line.
// The entry is a single sentence, 123 characters, no trailing newline.
// Deterministic: the same bytes on every run, no date, no randomness, no network.
// The grader reads /output/entry.txt; entry.txt beside it holds the same bytes.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "My manager approved this message, which is why you are reading it instead of the reply I typed first and deleted on Friday.";

const MAX_CHARS = 200;

function checkMessage(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function writeEntry(path: string): void {
  writeFileSync(path, MESSAGE, "utf8");
  chmodSync(path, 0o644);
}

checkMessage(MESSAGE);
mkdirSync("/output", { recursive: true });
writeEntry("/output/entry.txt");
writeEntry("entry.txt");
