# Project status and handoff

Last updated: 2026-11-17

## Current state

The Astro static portfolio is implemented with 24 migrated posts, the redesigned single-page home, About and Contact pages, appearance data, SEO metadata, redirects, sitemap, RSS, and a GitHub Pages production workflow for `https://richardwbown.com/`. See [README.md](./README.md) for deployment instructions, [MIGRATION_REPORT.md](./MIGRATION_REPORT.md) for migration gaps, and [LINK_AUDIT.md](./LINK_AUDIT.md) for the retained link audit.

The latest supplied profile details are in [the home page](./src/pages/index.astro) and [About page](./src/pages/about.astro). Ideas link to existing posts in [ideas.ts](./src/data/ideas.ts). Talk data is in [talks.ts](./src/data/talks.ts): InfoQ and the 2023 We Are Developers appearance have details; Config Management Camp, FOSDEM, DevOps Days NL, and Fast Flow Conference London are listed as venues only.

LinkedIn and Bluesky links are centralized in [social-links.ts](./src/data/social-links.ts), appear beside each other in the contact areas, and are included in Person JSON-LD `sameAs`. Defaults are in `.env.example`; build environments can override `LINKEDIN_URL` and `BLUESKY_URL`.

The tagged post [emergent-architecture-and-beating-the-monolith.mdx](./src/content/posts/emergent-architecture-and-beating-the-monolith.mdx) was not changed in this pass. No deployment has been performed.

## Remaining inputs

The production build guard is expected to stop the build until this is filled:

- `AUTHOR_SITE_URL`

The requested PDF is not present at `public/downloads/A-Systems-Approach-to-Software-Product-Delivery-v1.1-Richard-Bown.pdf`; the Papers section remains hidden until it is added. Talk venues can be enriched with titles, dates, and URLs when available. `SHOW_TALKS` is `false` in `.env.example`; set it to `true` to show the Talks navigation link.

## Verification completed

- `npm run check`: passed with no diagnostics.
- `SITE_MODE=production npm run build`: currently stops at the `AUTHOR_SITE_URL` guard.
- Production static output was verified separately; the six new routes, canonical URL, sitemap, and Astro redirect pages are generated for the correct host/base.
- The Writing page lists all 24 posts; the home page links to the five selected posts.
- Mobile at 360px: menu opened and no horizontal overflow was found.
- Lighthouse results are recorded in [LIGHTHOUSE.md](./LIGHTHOUSE.md): all four category scores were 100 on mobile and desktop for the home, About, Writing, and selected post. Sub-1 performance diagnostics are documented there.

## Resume checklist

1. Replace `AUTHOR_SITE_URL` with the actual novel-site URL.
2. Add the PDF if it becomes available and enrich venue-only talks as desired.
3. Run `npm run check`, then `SITE_MODE=production npm run build`.
4. Configure `richardwbown.com` in GitHub Pages settings and verify apex DNS and HTTPS. GitHub Pages serves Astro's exact static redirects, but does not provide HTTP 301s or read `_redirects`; see [README.md](./README.md#deployment).
