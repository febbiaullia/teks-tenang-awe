import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

// The gate requires 1-280 Unicode code points, and not only whitespace.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(
    `entry.txt must be 1-280 Unicode code points, got ${codePoints}`,
  );
}
if (text.trim().length === 0) {
  throw new Error("entry.txt must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
