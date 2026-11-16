import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { showTalks } from "./src/data/talks.ts";

const siteMode = process.env.SITE_MODE ?? "production";

if (siteMode !== "preview" && siteMode !== "production") {
  throw new Error('SITE_MODE must be either "preview" or "production".');
}

const site =
  siteMode === "preview"
    ? "https://bownie.github.io"
    : "https://richardwbown.com";
const configuredBase =
  process.env.BASE_PATH ||
  (siteMode === "preview" ? "/richardwbown_com_website/" : "/");
const baseSegments = configuredBase.split("/").filter(Boolean);
const base = `/${baseSegments.join("/")}${baseSegments.length ? "/" : ""}`;

const redirectDestinations = {
  "/team-topologies/": "/the-real-value-of-team-topologies/",
  "/defining-the-bounded-context-is-the-key-to-flow/":
    "/do-bounded-contexts-and-domain-driven-design-even-matter/",
  "/monitoring-azure-devops-build-pipelines-with-prometheus/":
    "/monitoring-azure-devops-build-pipelines-with-prometheus-and-grafana/",
  "/contact-me/": "/contact/",
  "/work-with-me/": "/",
  "/consulting-offerings/": "/",
  "/blog/": "/writing/",
  "/archive/": "/writing/",
  "/author/": "/writing/",
  "/tag/": "/writing/",
  "/category/": "/writing/",
  "/se-radio-podcast-the-differences-between-devops-vs-sre/": "/talks/",
  "/lovin-legacy-podcast-the-business-of-legacy-making-software-change-successful/":
    "/talks/",
  "/lovin-legacy-podcast-jonathan-hall-devops-go-and-continuous-delivery-in-reverse/":
    "/talks/",
  "/loving-legacy-podcast/": "/talks/",
  "/podcast-how-does-legacy-and-tech-debt-appear/": "/talks/",
  "/software-delivery-club-pod-getting-your-evenings-and-weekends-back/":
    "/talks/",
  "/software-delivery-club-pod-between-product-and-engineering/": "/talks/",
  "/can-software-engineers-fix-the-world-podcast-with-gene-kim/": "/talks/",
  "/bryan-finster-continuous-delivery-no-nonsense-podcast/": "/talks/",
  "/podcast-making-it-software-more-sustainable-with-tom-kennes/": "/talks/",
  "/observability-engineering-and-customer-needs-with-stephen-townsend/":
    "/talks/",
  "/we-are-developers-world-congress-2023/": "/talks/"
};

const redirects = Object.fromEntries(
  Object.entries(redirectDestinations).map(([source, destination]) => [
    source,
    `${base}${destination.replace(/^\/+/, "")}`
  ])
);

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        showTalks || !page.endsWith(`${base}talks/`)
    })
  ],
  redirects
});
