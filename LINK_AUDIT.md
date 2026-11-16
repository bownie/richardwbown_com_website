# Internal link and CTA audit

The audit covers migrated Markdown/MDX content and Astro page source. `originalUrl` frontmatter entries are excluded because they identify the source of each migrated post.

## Non-migrated links unlinked

The old destinations were removed from the Markdown links while retaining their anchor text.

| File | Line | Old target | Text retained |
| --- | ---: | --- | --- |
| [emergent-architecture-and-beating-the-monolith.mdx](src/content/posts/emergent-architecture-and-beating-the-monolith.mdx) | 19 | https://richardwbown.com/beating-the-monolith-understanding-modern-software-delivery/ | Modern Software Delivery: Beating the Monolith |
| [build-now-vs-build-later-upfront-design-vs-implementation-costs.mdx](src/content/posts/build-now-vs-build-later-upfront-design-vs-implementation-costs.mdx) | 17 | https://richardwbown.com/is-the-path-of-least-resistance-sometimes-the-right-choice/ | the path of least resistance |
| [how-to-build-a-successful-platform-team.mdx](src/content/posts/how-to-build-a-successful-platform-team.mdx) | 10 | https://richardwbown.com/resources/ | books |
| [how-to-build-a-successful-platform-team.mdx](src/content/posts/how-to-build-a-successful-platform-team.mdx) | 47 | https://richardwbown.com/conways-law/ | Conway’s Law |
| [that-one-script-you-wrote-is-a-now-a-platform.mdx](src/content/posts/that-one-script-you-wrote-is-a-now-a-platform.mdx) | 10 | https://richardwbown.com/conways-law/ | Conway’s Law |
| [how-to-visualise-your-systems.mdx](src/content/posts/how-to-visualise-your-systems.mdx) | 13 | https://richardwbown.com/podcast-avoiding-legacy-ddd-collaborative-architecture-and-product-thinking-with-nico-krijnen/ | podcast episode |
| [residues-time-change-and-uncertainty-in-software-architecture-barry-oreilly.mdx](src/content/posts/residues-time-change-and-uncertainty-in-software-architecture-barry-oreilly.mdx) | 14 | https://richardwbown.com/team-topologies-and-the-human-touch-at-fast-flow-conference-london-2023/ | Team Topologies |
| [the-real-value-of-team-topologies.mdx](src/content/posts/the-real-value-of-team-topologies.mdx) | 15 | https://richardwbown.com/team-topologies-and-the-human-touch-at-fast-flow-conference-london-2023/ | Fast Flow Conference |
| [test-driven-development-for-microservices.mdx](src/content/posts/test-driven-development-for-microservices.mdx) | 13 | https://richardwbown.com/test-driven-design-at-its-best-when-its-outside-in/ | Test-Driven Development By Example |

## Old-site links retained

These remaining internal links point to configured redirects or a migrated post:

| File | Line | Old target | Destination |
| --- | ---: | --- | --- |
| [avoiding-toxicity-how-to-manage-cognitive-load.mdx](src/content/posts/avoiding-toxicity-how-to-manage-cognitive-load.mdx) | 13 | https://richardwbown.com/team-topologies/ | Redirects to the migrated Team Topologies post |
| [emergent-architecture-and-beating-the-monolith.mdx](src/content/posts/emergent-architecture-and-beating-the-monolith.mdx) | 21 | https://richardwbown.com/defining-the-bounded-context-is-the-key-to-flow/ | Redirects to the migrated bounded-context post |
| [how-to-build-a-successful-platform-team.mdx](src/content/posts/how-to-build-a-successful-platform-team.mdx) | 47 | https://richardwbown.com/team-topologies/ | Redirects to the migrated Team Topologies post |

## CTA wording

Scanned `src/pages/` and `src/content/posts/` case-insensitively for “work with me”, “consulting”, “hire”, “newsletter”, “subscribe”, and “sign up” as whole words or phrases. No matches were found. No content was removed as part of this sweep.
