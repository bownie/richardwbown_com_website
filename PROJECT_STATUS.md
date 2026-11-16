# Project status and handoff

Last updated: 2026-11-16

## Current state

The Astro static portfolio is implemented with 18 migrated posts, the redesigned single-page home, About and Contact pages, appearance data, SEO metadata, redirects, sitemap, RSS, and the GitHub Pages preview workflow. See [README.md](./README.md) for running and deployment instructions, [MIGRATION_REPORT.md](./MIGRATION_REPORT.md) for migration gaps, and [LINK_AUDIT.md](./LINK_AUDIT.md) for the retained link audit.

The latest supplied profile details are in [the home page](./src/pages/index.astro) and [About page](./src/pages/about.astro). Ideas link to existing posts in [ideas.ts](./src/data/ideas.ts). Talk data is in [talks.ts](./src/data/talks.ts): InfoQ and the 2023 We Are Developers appearance have details; Config Management Camp, FOSDEM, DevOps Days NL, and Fast Flow Conference London are listed as venues only.

The tagged post [emergent-architecture-and-beating-the-monolith.mdx](./src/content/posts/emergent-architecture-and-beating-the-monolith.mdx) was not changed in this pass. No deployment has been performed.

## Remaining inputs

The production build guard is expected to stop the build until these are filled:

- `LINKEDIN_URL`
- `AUTHOR_SITE_URL`
- `TODO: PERSPECTIVE_TEXT`
- `TODO: CONTACT_LINE`

The requested PDF is not present at `public/downloads/A-Systems-Approach-to-Software-Product-Delivery-v1.1-Richard-Bown.pdf`; the Papers section remains hidden until it is added. Talk venues can be enriched with titles, dates, and URLs when available. `SHOW_TALKS` is `false` in `.env.example`; set it to `true` to show the Talks navigation link.

## Verification completed

- `npm run check`: passed with no diagnostics.
- `SITE_MODE=preview npm run build`: passed and warned about the remaining placeholders.
- Production placeholder guard: confirmed to fail before Astro builds.
- Built-link crawl: zero broken internal targets; all 18 posts are reachable through the home page and Writing page.
- Mobile at 360px: menu opened and no horizontal overflow was found.
- Lighthouse results are recorded in [LIGHTHOUSE.md](./LIGHTHOUSE.md): all four category scores were 100 on mobile and desktop for the home, About, Writing, and selected post. Sub-1 performance diagnostics are documented there.

## Resume checklist

1. Replace the remaining copy and URL placeholders above.
2. Add the PDF if it becomes available and enrich venue-only talks as desired.
3. Run `npm run check`, then `SITE_MODE=production npm run build`.
4. For production deployment, use a host that processes `public/_redirects` (such as Cloudflare Pages or Netlify); GitHub Pages remains preview-only.
