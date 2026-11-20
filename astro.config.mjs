import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { talks } from "./src/data/talks.ts";

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
const talksPageVisible = talks.length >= 3;

const redirectDestinations = {
  "/team-topologies/": "/the-real-value-of-team-topologies/",
  "/defining-the-bounded-context-is-the-key-to-flow/":
    "/do-bounded-contexts-and-domain-driven-design-even-matter/",
  "/monitoring-azure-devops-build-pipelines-with-prometheus/":
    "/monitoring-azure-devops-build-pipelines-with-prometheus-and-grafana/",
  "/contact-me/": "/contact/",
  // Old landing page for the novel; it canonicalised to the book site already.
  "/human-software/": "https://humansoftwarebook.com/",
  "/consulting-offerings/": "/work-with-me/",
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
    "/we-are-developers-world-congress-2023/":
    "/talks/",
  "/loving-legacy-podcast/human-software-how-we-treat-each-other-at-work/":
    "/talks/",
  "/loving-legacy-podcast/a-manifesto-for-better-software-delivery/":
    "/talks/",
  "/podcast-a-manifesto-for-better-software-delivery/": "/talks/",
  "/ddd-refactoring-and-legacy-code/":
    "/do-bounded-contexts-and-domain-driven-design-even-matter/",
  "/how-to-tackle-a-legacy-codebase/":
    "/legacy-systems-and-the-cost-of-hidden-technical-debt/",
  "/thinking-in-systems-change-management/":
    "/the-hidden-dangers-of-systems-thinking/",
  "/do-you-need-to-build-an-internal-developer-platform/":
    "/how-to-build-a-successful-platform-team/",
  "/azure-devops-yaml-pipelines-the-land-of-confusion/":
    "/monitoring-azure-devops-build-pipelines-with-prometheus-and-grafana/",
  "/when-you-cant-do-test-driven-development/":
    "/test-driven-development-for-microservices/",
  "/test-driven-development-as-a-design-tool/":
    "/test-driven-development-for-microservices/"
};

const redirects = Object.fromEntries(
  Object.entries(redirectDestinations).map(([source, destination]) => [
    source,
    /^https?:\/\//.test(destination)
      ? destination
      : `${base}${destination.replace(/^\/+/, "")}`
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
        talksPageVisible || !page.endsWith(`${base}talks/`)
    })
  ],
  redirects
});
