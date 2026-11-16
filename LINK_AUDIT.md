# Internal link and CTA audit

The audit covers migrated Markdown/MDX content and Astro page source. `originalUrl` frontmatter entries are excluded: those URLs identify the same posts that are present at their preserved slugs. Links below were not changed.

## Internal links to old-site content

| File | Line | Old target | Context / routing |
| --- | ---: | --- | --- |
| [avoiding-toxicity-how-to-manage-cognitive-load.mdx](src/content/posts/avoiding-toxicity-how-to-manage-cognitive-load.mdx) | 13 | https://richardwbown.com/team-topologies/ | Team Topologies reading link; the path has a configured redirect to the migrated Team Topologies post. |
| [build-now-vs-build-later-upfront-design-vs-implementation-costs.mdx](src/content/posts/build-now-vs-build-later-upfront-design-vs-implementation-costs.mdx) | 17 | https://richardwbown.com/is-the-path-of-least-resistance-sometimes-the-right-choice/ | Refers to the path-of-least-resistance article; not part of this migration. |
| [emergent-architecture-and-beating-the-monolith.mdx](src/content/posts/emergent-architecture-and-beating-the-monolith.mdx) | 19 | https://richardwbown.com/beating-the-monolith-understanding-modern-software-delivery/ | The old page redirected to `/modern-software-leadership/`; neither destination is in this site. |
| [emergent-architecture-and-beating-the-monolith.mdx](src/content/posts/emergent-architecture-and-beating-the-monolith.mdx) | 21 | https://richardwbown.com/defining-the-bounded-context-is-the-key-to-flow/ | Alias for the migrated bounded-context post; a configured redirect points to it. |
| [how-to-build-a-successful-platform-team.mdx](src/content/posts/how-to-build-a-successful-platform-team.mdx) | 10 | https://richardwbown.com/resources/ | Reading-list link; the old URL redirected to `/reading-list/`, not part of this migration. |
| [how-to-build-a-successful-platform-team.mdx](src/content/posts/how-to-build-a-successful-platform-team.mdx) | 47 | https://richardwbown.com/conways-law/ | Conway’s Law article; not part of this migration. |
| [how-to-build-a-successful-platform-team.mdx](src/content/posts/how-to-build-a-successful-platform-team.mdx) | 47 | https://richardwbown.com/team-topologies/ | Team Topologies reading link; the path has a configured redirect to the migrated Team Topologies post. |
| [how-to-visualise-your-systems.mdx](src/content/posts/how-to-visualise-your-systems.mdx) | 13 | https://richardwbown.com/podcast-avoiding-legacy-ddd-collaborative-architecture-and-product-thinking-with-nico-krijnen/ | Podcast episode; not part of this migration. |
| [residues-time-change-and-uncertainty-in-software-architecture-barry-oreilly.mdx](src/content/posts/residues-time-change-and-uncertainty-in-software-architecture-barry-oreilly.mdx) | 14 | https://richardwbown.com/team-topologies-and-the-human-touch-at-fast-flow-conference-london-2023/ | Conference post; not part of this migration. |
| [test-driven-development-for-microservices.mdx](src/content/posts/test-driven-development-for-microservices.mdx) | 13 | https://richardwbown.com/test-driven-design-at-its-best-when-its-outside-in/ | Test-driven-design post; not part of this migration. |
| [that-one-script-you-wrote-is-a-now-a-platform.mdx](src/content/posts/that-one-script-you-wrote-is-a-now-a-platform.mdx) | 10 | https://richardwbown.com/conways-law/ | Conway’s Law article; not part of this migration. |
| [the-real-value-of-team-topologies.mdx](src/content/posts/the-real-value-of-team-topologies.mdx) | 15 | https://richardwbown.com/team-topologies-and-the-human-touch-at-fast-flow-conference-london-2023/ | Conference post; not part of this migration. |

## CTA wording

Scanned `src/pages/` and `src/content/posts/` case-insensitively for “work with me”, “consulting”, “hire”, “newsletter”, “subscribe”, and “sign up” as whole words or phrases. No matches were found. No content was removed as part of this sweep.
