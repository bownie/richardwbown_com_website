import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const sourceDirectories = ["src/pages", "src/data"];
const files = [];

function collectFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      collectFiles(path);
    } else if (/\.(astro|mdx|ts)$/.test(entry.name)) {
      files.push(path);
    }
  }
}

for (const directory of sourceDirectories) {
  collectFiles(directory);
}

const placeholders = new Map();
const fixedTokens = ["EMAIL", "LINKEDIN_URL", "AUTHOR_SITE_URL"];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const matches = [
    ...source.matchAll(/\bTODO:\s*([A-Z][A-Z0-9_]*)/g),
    ...fixedTokens.flatMap((token) =>
      [...source.matchAll(new RegExp(`\\b${token}\\b`, "g"))].map((match) => [
        match[0],
        token
      ])
    )
  ];

  for (const match of matches) {
    const token = match[1] ?? match[0];
    if (!placeholders.has(token)) {
      placeholders.set(token, new Set());
    }
    placeholders.get(token).add(relative(process.cwd(), file));
  }
}

if (placeholders.size > 0) {
  console.warn("Build warning: unfilled copy placeholders remain:");
  for (const [token, paths] of placeholders) {
    console.warn(`- ${token}: ${[...paths].join(", ")}`);
  }

  if ((process.env.SITE_MODE ?? "production") === "production") {
    console.error(
      "Production build blocked until all copy placeholders are replaced."
    );
    process.exitCode = 1;
  }
}
