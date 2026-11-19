#!/usr/bin/env node
/**
 * Classifies the Google Search Console page export against the pages this Astro
 * site actually publishes, and writes the cutover redirect map plus a report.
 *
 *   node scripts/gsc-cutover.mjs
 *
 * Inputs:  gsc-pages.csv                    (Search Console Pages export)
 *          redirects.csv / astro.config.mjs (redirects that already exist)
 *          src/content/posts/*.mdx          (articles carried over)
 * Outputs: gsc-redirect-map.csv, GSC_TRAFFIC_REPORT.md
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "https://richardwbown.com";

/* ------------------------------------------------------------------ inputs */

function readCsv(file) {
  return readFileSync(join(root, file), "utf8")
    .trim()
    .split("\n")
    .map((line) => line.replace(/\r$/, ""))
    .slice(1)
    .map((line) => {
      const [url, clicks, impressions, ctr, position] = line.split(",");
      return {
        url,
        clicks: Number(clicks),
        impressions: Number(impressions),
        ctr,
        position: Number(position)
      };
    });
}

const rows = readCsv("gsc-pages.csv");

const posts = readdirSync(join(root, "src/content/posts"))
  .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
  .map((f) => `/${f.replace(/\.mdx?$/, "")}/`);

const staticPages = [
  "/",
  "/about/",
  "/contact/",
  "/work-with-me/",
  "/writing/",
  "/talks/"
];

const existingRedirects = new Set(
  readFileSync(join(root, "redirects.csv"), "utf8")
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.replace(/\r$/, "").split(","))
    .filter(([, , status]) => status !== "200")
    .map(([source]) => source)
    .filter((source) => !source.includes("*"))
);

const WILDCARD_PREFIXES = ["/author/", "/tag/", "/category/"];

/**
 * Dropped URLs where a genuinely equivalent page still exists on the new site.
 * Anything absent from this map has no equivalent and is deliberately left to
 * 404 rather than redirected to the index (a mass redirect to /writing/ reads
 * to Google as a soft 404 and buys nothing).
 */
const PROPOSALS = {
  "/ddd-refactoring-and-legacy-code/": {
    destination: "/do-bounded-contexts-and-domain-driven-design-even-matter/",
    confidence: "medium",
    note: "Same DDD / bounded-context subject"
  },
  "/how-to-tackle-a-legacy-codebase/": {
    destination: "/legacy-systems-and-the-cost-of-hidden-technical-debt/",
    confidence: "medium",
    note: "Same legacy-modernisation subject"
  },
  "/thinking-in-systems-change-management/": {
    destination: "/the-hidden-dangers-of-systems-thinking/",
    confidence: "medium",
    note: "Same systems-thinking subject"
  },
  "/do-you-need-to-build-an-internal-developer-platform/": {
    destination: "/how-to-build-a-successful-platform-team/",
    confidence: "medium",
    note: "Same platform-team subject"
  },
  "/azure-devops-yaml-pipelines-the-land-of-confusion/": {
    destination:
      "/monitoring-azure-devops-build-pipelines-with-prometheus-and-grafana/",
    confidence: "medium",
    note: "Same Azure DevOps pipelines subject"
  },
  "/when-you-cant-do-test-driven-development/": {
    destination: "/test-driven-development-for-microservices/",
    confidence: "medium",
    note: "Same TDD subject"
  },
  "/test-driven-development-as-a-design-tool/": {
    destination: "/test-driven-development-for-microservices/",
    confidence: "medium",
    note: "Same TDD subject"
  },
  "/loving-legacy-podcast/human-software-how-we-treat-each-other-at-work/": {
    destination: "/talks/",
    confidence: "high",
    note: "Podcast episode under the show archive that already redirects"
  },
  "/loving-legacy-podcast/a-manifesto-for-better-software-delivery/": {
    destination: "/talks/",
    confidence: "high",
    note: "Podcast episode under the show archive that already redirects"
  },
  "/podcast-a-manifesto-for-better-software-delivery/": {
    destination: "/talks/",
    confidence: "high",
    note: "Podcast appearance"
  }
};

const TRANSACTIONAL = new Set([
  "/payment-confirmation/",
  "/payment-failed/",
  "/please-confirm-your-subscription/",
  "/thanks-for-signing-up/",
  "/thanks-for-joining-human-software/"
]);

/* ------------------------------------------------------------- classifying */

function toPath(url) {
  if (!url.startsWith(HOST)) return null; // other host or subdomain
  const path = url.slice(HOST.length).split("?")[0];
  return path === "" ? "/" : path;
}

const classified = rows.map((row) => {
  const path = toPath(row.url);
  let status;

  if (path === null) status = "offsite";
  else if (posts.includes(path) || staticPages.includes(path))
    status = "preserved";
  else if (WILDCARD_PREFIXES.some((p) => path.startsWith(p)))
    status = "archive";
  else if (existingRedirects.has(path)) status = "redirected";
  else if (path.startsWith("/wp-content/")) status = "asset";
  else if (TRANSACTIONAL.has(path)) status = "transactional";
  else status = "dropped";

  const proposal = PROPOSALS[path] ?? null;

  return {
    ...row,
    path,
    status,
    destination: proposal?.destination ?? "",
    confidence: proposal?.confidence ?? "",
    note: proposal?.note ?? ""
  };
});

/* ---------------------------------------------------------------- reporting */

const sum = (list, key) => list.reduce((total, r) => total + r[key], 0);
const pct = (part, whole) => (whole === 0 ? "0.0" : ((part / whole) * 100).toFixed(1));

const totalClicks = sum(classified, "clicks");
const totalImpressions = sum(classified, "impressions");

const byStatus = {};
for (const row of classified) {
  byStatus[row.status] ??= { rows: 0, clicks: 0, impressions: 0 };
  byStatus[row.status].rows += 1;
  byStatus[row.status].clicks += row.clicks;
  byStatus[row.status].impressions += row.impressions;
}

const atRisk = classified
  .filter((r) => r.status === "dropped" || r.status === "asset")
  .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);

const droppedClicks = sum(atRisk, "clicks");
const droppedImpressions = sum(atRisk, "impressions");

/* ------------------------------------------------------------------ outputs */

const mapRows = classified.filter((r) => r.destination);

const mapCsv = [
  "old_url,clicks,impressions,new_destination,confidence,note",
  ...mapRows.map((r) =>
    [r.url, r.clicks, r.impressions, r.destination, r.confidence, r.note]
      .map((v) => (String(v).includes(",") ? `"${v}"` : v))
      .join(",")
  )
].join("\n");

writeFileSync(join(root, "gsc-redirect-map.csv"), `${mapCsv}\n`);

const table = (list) =>
  [
    "| # | Old URL | Clicks | Impressions | Position | Proposed destination | Confidence |",
    "| ---: | --- | ---: | ---: | ---: | --- | --- |",
    ...list.map((r, i) =>
      `| ${i + 1} | \`${r.path ?? r.url}\` | ${r.clicks} | ${r.impressions} | ${r.position} | ${
        r.destination ? `\`${r.destination}\`` : "— (no equivalent)"
      } | ${r.confidence || "—"} |`
    )
  ].join("\n");

const report = `# Search Console cutover report

Generated by \`node scripts/gsc-cutover.mjs\` from \`gsc-pages.csv\` — the Search Console
Pages export for the last 12 months (${rows.length} URLs). Do not edit by hand.

## What the traffic looks like

| | Clicks | Impressions |
| --- | ---: | ---: |
| Total, all URLs | ${totalClicks} | ${totalImpressions} |

| Status | URLs | Clicks | % of clicks | Impressions |
| --- | ---: | ---: | ---: | ---: |
| Preserved (same URL on the new site) | ${byStatus.preserved.rows} | ${byStatus.preserved.clicks} | ${pct(byStatus.preserved.clicks, totalClicks)}% | ${byStatus.preserved.impressions} |
| Redirected (rule already in \`astro.config.mjs\`) | ${byStatus.redirected.rows} | ${byStatus.redirected.clicks} | ${pct(byStatus.redirected.clicks, totalClicks)}% | ${byStatus.redirected.impressions} |
| Archive URLs (\`/author/\`, \`/tag/\`, \`/category/\` — handled by the 404 fallback) | ${byStatus.archive.rows} | ${byStatus.archive.clicks} | ${pct(byStatus.archive.clicks, totalClicks)}% | ${byStatus.archive.impressions} |
| Transactional pages | ${byStatus.transactional.rows} | ${byStatus.transactional.clicks} | ${pct(byStatus.transactional.clicks, totalClicks)}% | ${byStatus.transactional.impressions} |
| **Dropped — not carried over** | **${atRisk.length}** | **${droppedClicks}** | **${pct(droppedClicks, totalClicks)}%** | **${droppedImpressions}** |

Dropping the pages marked *dropped* gives up **${droppedClicks} clicks and ${droppedImpressions} impressions a year**.

## Dropped URLs ranked by clicks

Every row here is a page the new site does not publish. A destination is proposed only
where a page on the new site covers the same subject; the rest are listed so the decision
stays visible.

${table(atRisk)}

## How the redirects work on GitHub Pages

GitHub Pages cannot return a 301. Astro's \`redirects\` config emits a static HTML file at the
old path containing a \`0;url=…\` meta refresh, which Google treats as a permanent redirect.
So every entry added to \`redirectDestinations\` in \`astro.config.mjs\` becomes a real file in
\`dist/\` and survives the Pages deploy.

The alternative — pointing every dropped URL at \`/writing/\` — is not recommended. Google
classifies a blanket redirect to an index page as a soft 404, so it neither passes link
equity nor clears the old URLs out of the index cleanly.
`;

writeFileSync(join(root, "GSC_TRAFFIC_REPORT.md"), report);

/* ------------------------------------------------------------------ summary */

console.log(`rows: ${rows.length}  clicks: ${totalClicks}  impressions: ${totalImpressions}`);
for (const [status, s] of Object.entries(byStatus).sort((a, b) => b[1].clicks - a[1].clicks)) {
  console.log(
    `  ${status.padEnd(14)} ${String(s.rows).padStart(3)} urls ${String(s.clicks).padStart(4)} clicks ${String(s.impressions).padStart(6)} impressions`
  );
}
console.log(`\ndropped: ${atRisk.length} urls, ${droppedClicks} clicks, ${droppedImpressions} impressions`);
console.log(`proposed redirects: ${mapRows.length}`);
console.log("\ntop dropped by clicks:");
for (const r of atRisk.slice(0, 12)) {
  console.log(`  ${String(r.clicks).padStart(4)} clicks ${String(r.impressions).padStart(6)} impr  ${r.path}`);
}
