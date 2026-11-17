# Migration report

Source URLs were checked on 16 November 2026. Posts with a complete page body were migrated without rewriting their prose; WordPress presentation and promotion blocks were removed. The collection contains 24 unique posts.

## Posts

| Source URL | Fetch result | Migration |
| --- | --- | --- |
| https://richardwbown.com/residues-time-change-and-uncertainty-in-software-architecture-barry-oreilly/ | 200 | Migrated |
| https://richardwbown.com/susanne-kaiser-architecture-for-flow/ | 200 | Migrated; source YouTube embed linked locally in the post |
| https://richardwbown.com/do-bounded-contexts-and-domain-driven-design-even-matter/ | 200 | Migrated |
| https://richardwbown.com/defining-the-bounded-context-is-the-key-to-flow/ | 200, redirects to the bounded-contexts URL above | Not a separate post; alias redirects to the migrated post |
| https://richardwbown.com/emergent-architecture-and-beating-the-monolith/ | 200 | Migrated; source YouTube embed linked locally in the post |
| https://richardwbown.com/brittle-systems/ | 200 | Migrated |
| https://richardwbown.com/how-to-visualise-your-systems/ | 200 | Migrated |
| https://richardwbown.com/the-magic-of-wardley-maps/ | 200 | Migrated |
| https://richardwbown.com/build-now-vs-build-later-upfront-design-vs-implementation-costs/ | 200 | Migrated |
| https://richardwbown.com/legacy-systems-and-the-cost-of-hidden-technical-debt/ | 200 | Migrated |
| https://richardwbown.com/are-relational-databases-still-important-in-the-age-of-nosql/ | 200 | Migrated |
| https://richardwbown.com/what-you-need-to-know-before-running-a-backstage-proof-of-concept/ | 200 | Migrated |
| https://richardwbown.com/how-to-build-a-successful-platform-team/ | 200 | Migrated |
| https://richardwbown.com/that-one-script-you-wrote-is-a-now-a-platform/ | 200 | Migrated; embedded Speaker Deck linked in the post |
| https://richardwbown.com/monitoring-azure-devops-build-pipelines-with-prometheus-and-grafana/ | 200 | Migrated |
| https://richardwbown.com/the-real-value-of-team-topologies/ | 200 | Migrated |
| https://richardwbown.com/avoiding-toxicity-how-to-manage-cognitive-load/ | 200 | Migrated |
| https://richardwbown.com/test-driven-development-for-microservices/ | 200 | Migrated |
| https://richardwbown.com/john-romeros-ten-principles-for-building-great-software/ | 200 | Migrated |
| https://richardwbown.com/daniel-pinks-drive-and-what-self-determination-theory-sdt-really-says/ | 200 | Migrated under the same slug in People & teams; the body diagram was downloaded locally |
| https://richardwbown.com/fear-driven-development-when-you-work-against-the-flow/ | 200 | Migrated under the same slug in People & teams |
| https://richardwbown.com/how-to-fix-the-failing-team/ | 200 | Migrated under the same slug in People & teams |
| https://richardwbown.com/the-hidden-dangers-of-systems-thinking/ | 200 | Migrated under the same slug in People & teams |
| https://richardwbown.com/an-elegant-puzzle-systems-of-engineering-management-will-larsen/ | 200 | Migrated under the same slug in People & teams |
| https://richardwbown.com/the-passive-aggressive-pull-request/ | 200 | Migrated under the same slug in People & teams; page metadata says published 19 July 2026, while the article says it was first written in May 2024 |

## Talks and podcasts

| Source URL | Fetch result | Migration |
| --- | --- | --- |
| https://richardwbown.com/se-radio-podcast-the-differences-between-devops-vs-sre/ | 404 | No episode details available |
| https://richardwbown.com/lovin-legacy-podcast-the-business-of-legacy-making-software-change-successful/ | 404 | No episode details available |
| https://richardwbown.com/lovin-legacy-podcast-jonathan-hall-devops-go-and-continuous-delivery-in-reverse/ | 404 | No episode details available |
| https://richardwbown.com/loving-legacy-podcast/ | 200 | Source is a show archive, not an individual episode; no confirmed appearance entry added |
| https://richardwbown.com/podcast-how-does-legacy-and-tech-debt-appear/ | 200 | Episode title, date, and description extracted, but no direct episode URL or role could be confirmed; not listed |
| https://richardwbown.com/software-delivery-club-pod-getting-your-evenings-and-weekends-back/ | 404 | No episode details available |
| https://richardwbown.com/software-delivery-club-pod-between-product-and-engineering/ | 404 | No episode details available |
| https://richardwbown.com/can-software-engineers-fix-the-world-podcast-with-gene-kim/ | 404 | No episode details available |
| https://richardwbown.com/bryan-finster-continuous-delivery-no-nonsense-podcast/ | 404 | No episode details available |
| https://richardwbown.com/podcast-making-it-software-more-sustainable-with-tom-kennes/ | 404 | No episode details available |
| https://richardwbown.com/observability-engineering-and-customer-needs-with-stephen-townsend/ | 404 | No episode details available |
| https://richardwbown.com/we-are-developers-world-congress-2023/ | 200 | “The QUEST for Better Software”; July 2023; original YouTube recording linked |
| https://www.infoq.com/podcasts/humane-engineering-organizations/ | 200 | “Leading from Any Position: Richard Bown on Humane Engineering Organizations”; 12 December 2025; InfoQ Engineering Culture Podcast; confirmed guest appearance |

The Loving Legacy page links to the show on Apple Podcasts and Spotify but does not expose episode-level details. The “How Does Legacy and Tech Debt Appear?” source page is dated 9 December 2022 and does not link an original episode. Neither is included in public appearances until its role and original episode link can be confirmed.

## About and paper

| Source URL | Fetch result | Migration |
| --- | --- | --- |
| https://richardwbown.com/about/ | 301 to https://richardwbownauthor.com/; destination returned 200 | About is now a TODO-only template; no role, focus areas, experience, or selected-work claims were inferred. |
| https://richardwbown.com/wp-content/uploads/2022/08/A-Systems-Approach-to-Software-Product-Delivery-v1.1-Richard-Bown.pdf | Direct request returned 403; a browser-style request returned 200 but redirected to the site homepage as HTML | No PDF was saved or linked. The Papers section is hidden unless the requested PDF exists in `public/downloads/`. |

## Requested items still missing

- **Talk/podcast entries with no source page (404):**
  - `se-radio-podcast-the-differences-between-devops-vs-sre`
  - `lovin-legacy-podcast-the-business-of-legacy-making-software-change-successful`
  - `lovin-legacy-podcast-jonathan-hall-devops-go-and-continuous-delivery-in-reverse`
  - `software-delivery-club-pod-getting-your-evenings-and-weekends-back`
  - `software-delivery-club-pod-between-product-and-engineering`
  - `can-software-engineers-fix-the-world-podcast-with-gene-kim`
  - `bryan-finster-continuous-delivery-no-nonsense-podcast`
  - `podcast-making-it-software-more-sustainable-with-tom-kennes`
  - `observability-engineering-and-customer-needs-with-stephen-townsend`
- **Talk/podcast entries incomplete from available pages and therefore not listed:**
  - `loving-legacy-podcast` — the source is a show archive, not episode records; individual episode titles, dates, links, and role remain unconfirmed.
  - `podcast-how-does-legacy-and-tech-debt-appear` — title, date, and description are available, but the original episode URL and role remain unconfirmed.
- **Paper:** `A Systems Approach to Software Product Delivery v1.1` — the source did not return a PDF, so the requested download is not present.

## Images and links

- 22 article images were downloaded locally and are rendered through Astro’s `Image`; no image downloads failed. The total includes the newly downloaded Daniel Pink diagram. Two images that belonged to removed author-promotion blocks were discarded.
- The About page uses the square portrait `richardwbown-london-rooftop-square-reduced.jpg` from the local `hardbittensoftie_website` project.
- The source embeds in the migrated posts were preserved as links to their recorded YouTube or Speaker Deck embed URLs.
- The following seven non-migrated same-site destinations were unlinked from article prose; their anchor text remains:
  - https://richardwbown.com/modern-software-leadership/ (the source link to `/beating-the-monolith-understanding-modern-software-delivery/` redirects here)
  - https://richardwbown.com/conways-law/
  - https://richardwbown.com/is-the-path-of-least-resistance-sometimes-the-right-choice/
  - https://richardwbown.com/podcast-avoiding-legacy-ddd-collaborative-architecture-and-product-thinking-with-nico-krijnen/
  - https://richardwbown.com/reading-list/ (the source `/resources/` link redirects here)
  - https://richardwbown.com/team-topologies-and-the-human-touch-at-fast-flow-conference-london-2023/
  - https://richardwbown.com/test-driven-design-at-its-best-when-its-outside-in/
- `/team-topologies/` and the defining-bounded-context URL are covered by redirects to migrated content.
- Other external references in article prose were preserved; they were not exhaustively audited.

## Redirect notes

No redirects were found for the six additional post URLs; no redirect rules needed removal.

The `/contact/` row in `redirects.csv` records the requested identity mapping with status 200; it is not emitted as a redirect because redirecting a URL to itself would loop. Astro's static redirect configuration handles the base `/author/`, `/tag/`, and `/category/` paths. Their arbitrary subpaths are handled by the host-level `_redirects` file; Astro cannot collapse dynamic redirect parameters to one fixed destination in static config.

## MOVED_CONTENT
