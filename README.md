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

The static site is generated in `dist/`. A GitHub Actions workflow runs the project checks and deploys successful builds from `main` to a GitHub Pages preview. In repository settings, enable Pages with **GitHub Actions** as the build and deployment source.

`SITE_MODE=preview` builds for `https://bownie.github.io/richardwbown_com_website/`, adds `noindex`, and sets canonicals to that preview URL. `SITE_MODE=production` builds for `https://richardwbown.com/` without `noindex`. `BASE_PATH` optionally overrides the base path; it defaults to `/richardwbown_com_website/` in preview mode and `/` in production mode. Set the optional `PUBLIC_GA_ID` repository variable to enable GA4. The home Talks section and sitemap entry appear with at least three confirmed appearances; the navigation link appears only when that threshold is met and `SHOW_TALKS=true`.

## Deployment

GitHub Pages is for the noindex preview only. It does not process `public/_redirects`, and Astro's static redirect pages do not return HTTP 301 responses. The GitHub Pages workflow therefore always builds preview mode and omits the custom-domain file.

For production, build with `SITE_MODE=production` and deploy `dist/` to a host that reads `public/_redirects`, such as Cloudflare Pages or Netlify. Those host-level rules are required for the requested 301 redirects and wildcard paths. Configure the production domain and DNS with the chosen host. The build checks for unresolved copy placeholders: preview builds warn and list them, while production builds stop until they are replaced.

## Configuration

Copy `.env.example` to `.env`. The LinkedIn and Bluesky URLs are centralized in `src/data/social-links.ts` and can be overridden with `LINKEDIN_URL` and `BLUESKY_URL`. Set `PUBLIC_GA_ID` only if Google Analytics 4 is required; analytics is not loaded when the variable is empty. With fewer than three confirmed Talks entries, `/talks/` is still generated, but remains out of navigation and the sitemap.

Before production, replace `AUTHOR_SITE_URL`, complete the `PERSPECTIVE_TEXT` and `CONTACT_LINE` copy, and add the PDF at `public/downloads/A-Systems-Approach-to-Software-Product-Delivery-v1.1-Richard-Bown.pdf` if it becomes available. The Papers section stays hidden until that file exists.

## Content

Add Markdown or MDX entries under `src/content/posts/`. The collection schema validates title, publication date, summary, category, and original URL. Local images can be imported from `src/assets/` and rendered with Astro's `Image` component.

Public appearances are maintained in `src/data/talks.ts` with a show and role; title, date, and URL are included when known. Venue-only entries are supported.
