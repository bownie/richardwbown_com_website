# Richard W. Bown

A minimal static personal site built with Astro. Writing is stored in Markdown/MDX content collections and published at the original article slugs.

## Run locally

```sh
npm install
npm run dev
```

## Validate and build

```sh
npm run check
SITE_MODE=preview npm run build
npm run preview
```

The static site is generated in `dist/`. A GitHub Actions workflow runs the project checks and deploys successful builds from `main` to GitHub Pages. Pull requests build in preview mode but are not deployed. In repository settings, enable Pages with **GitHub Actions** as the build and deployment source.

`SITE_MODE=preview` builds for `https://bownie.github.io/richardwbown_com_website/`, adds `noindex`, and sets canonicals to that preview URL. `SITE_MODE=production` builds for `https://richardwbown.com/` without `noindex`. The base path follows `SITE_MODE` unless `BASE_PATH` is set, so a build has to use the mode that matches where it is served: the project Pages URL needs `preview`, and only a deployment on the custom domain can use `production`. The workflow builds `preview` for pull requests and for `main` unless the repository variable `SITE_MODE` is set to `production`. The GA4 Measurement ID is centralized in `src/data/analytics.ts` and is loaded only on the production domain. The home Talks section and sitemap entry appear with at least three confirmed appearances; the navigation link appears only when that threshold is met and `SHOW_TALKS=true`.

## Deployment

Deployments from `main` publish the staging site at `https://bownie.github.io/richardwbown_com_website/`, with `noindex`, no analytics, and `public/CNAME` stripped from the artifact so the project URL keeps serving. Cutting over to the custom domain is one step, because a `production` build served from the project path emits root-relative URLs that 404 there:

1. Configure `richardwbown.com` as the custom domain in the repository's Pages settings and point the domain's DNS to GitHub Pages.
2. Set the repository variable `SITE_MODE=production` so builds target `https://richardwbown.com/` and preserve `public/CNAME`.
3. Enable **Enforce HTTPS** once GitHub has verified the domain.

Keep the domain's recommended apex A/AAAA records and an optional `www` CNAME in place so GitHub can route and redirect both hostnames.

GitHub Pages does not read `public/_redirects` and cannot issue server-side HTTP 301 responses. Exact redirects in `astro.config.mjs` are emitted by Astro as static redirect pages (instant meta refresh, canonical, and fallback link); nested `/author/`, `/tag/`, and `/category/` paths are routed from the custom 404 page with client-side JavaScript. These work on GitHub Pages but are not equivalent to server-side 301s, and wildcard redirects require JavaScript. If true HTTP 301s or reliable wildcard redirects without JavaScript are required, use a host or edge service that supports redirect rules.

The build checks for unresolved copy placeholders: preview builds warn and list them, while production builds stop until they are replaced.

## Configuration

Copy `.env.example` to `.env`. The LinkedIn and Bluesky URLs are centralized in `src/data/social-links.ts` and can be overridden with `LINKEDIN_URL` and `BLUESKY_URL`. Google Analytics 4 uses the fixed project ID in `src/data/analytics.ts`; it is not loaded on the noindex preview. With fewer than three confirmed Talks entries, `/talks/` is still generated, but remains out of navigation and the sitemap.

Add the PDF at `public/downloads/A-Systems-Approach-to-Software-Product-Delivery-v1.1-Richard-Bown.pdf` if it becomes available; the Papers section stays hidden until that file exists. The placeholder guard in `scripts/check-placeholders.mjs` blocks a production build while `TODO:TOKEN`, `EMAIL` or `AUTHOR_SITE_URL` text is left in `src/pages` or `src/data`; none remain today.

## Content

Add Markdown or MDX entries under `src/content/posts/`. The collection schema validates title, publication date, summary, category, and original URL. Local images can be imported from `src/assets/` and rendered with Astro's `Image` component.

Public appearances are maintained in `src/data/talks.ts` with a show and role; title, date, and URL are included when known. Venue-only entries are supported.
