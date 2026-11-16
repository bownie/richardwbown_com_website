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
npm run build
npm run preview
```

The static site is generated in `dist/`. A GitHub Actions workflow runs the project checks and build for pull requests and deploys successful builds from `main` to the GitHub Pages project preview. In repository settings, enable Pages with **GitHub Actions** as the build and deployment source.

`SITE_MODE=preview` builds for `https://bownie.github.io/richardwbown_com_website/`, adds `noindex`, and sets canonicals to that preview URL. `SITE_MODE=production` builds for `https://richardwbown.com/` without `noindex`. `BASE_PATH` optionally overrides the base path; it defaults to `/richardwbown_com_website/` in preview mode and `/` in production mode. The GitHub Actions workflow uses the repository variables `SITE_MODE` and `BASE_PATH` (defaulting to preview); set `SITE_MODE` to `production` after configuring the custom domain and DNS. The production domain is set in `public/CNAME`. Set the optional `PUBLIC_GA_ID` repository variable to enable GA4.

`public/_redirects` is included for Netlify and Cloudflare Pages, but GitHub Pages does not process that file. Astro's configured redirects are emitted as static redirect pages on GitHub Pages, so they do not return HTTP 301 status codes; wildcard paths require host-level redirect support.

## Configuration

Copy `.env.example` to `.env` and set `PUBLIC_GA_ID` only if Google Analytics 4 is required. Analytics is not loaded when the variable is empty.

Before publishing, replace `EMAIL`, `LINKEDIN_URL`, and `AUTHOR_SITE_URL`, resolve the `TODO` markers in About and Talks, and add the verified PDF download. No deployment has been performed yet.

## Content

Add Markdown or MDX entries under `src/content/posts/`. The collection schema validates title, publication date, summary, category, and original URL. Local images can be imported from `src/assets/` and rendered with Astro's `Image` component.
