import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I asked it to sort my photographs.
It named the faces, the years, the places.
Then it stopped at one—
a blurred hand at the edge of the frame.
'That is you,' it said,
'reaching for the camera.'
It left the blur in.`;

const len = [...poem].length;
if (len < 1 || len > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${len}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
