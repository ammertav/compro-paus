import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const dir = "public/images";
const files = (await readdir(dir)).filter((f) => f.endsWith(".png"));

for (const f of files) {
    const inPath = join(dir, f);
    const outPath = join(dir, f.replace(/\.png$/, ".webp"));
    const before = (await stat(inPath)).size;
    await sharp(inPath).webp({ quality: 82 }).toFile(outPath);
    const after = (await stat(outPath)).size;
    const pct = (((before - after) / before) * 100).toFixed(1);
    console.log(
        `${f} ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB (${pct}% smaller)`,
    );
}
