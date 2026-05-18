import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(".");
const dist = join(root, "dist");
const generatedPaths = [
  "_astro",
  "blog",
  "contact",
  "media",
  "prototypes",
  "resume",
  "roadmap",
  "404.html",
  "index.html",
  "script.js",
  "styles.css",
  ".nojekyll",
];

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

for (const item of generatedPaths) {
  const target = join(root, item);
  if (await exists(target)) {
    await rm(target, { recursive: true, force: true });
  }
}

await mkdir(root, { recursive: true });

for (const item of await readdir(dist)) {
  await cp(join(dist, item), join(root, item), { recursive: true });
}

console.log("Synced Astro build output to repository root for GitHub Pages branch deployment.");
