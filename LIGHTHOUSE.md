# Lighthouse results

Audited the production-mode static build locally with Lighthouse 12.8.2 and Google Chrome. The production build uses the `https://richardwbown.com/` canonical URLs and does not add `noindex`. Mobile used Lighthouse's mobile form factor; desktop used its desktop preset.

| Page | Device | Performance | Accessibility | Best Practices | SEO |
| --- | --- | ---: | ---: | ---: | ---: |
| `/` | Mobile | 100 | 100 | 100 | 100 |
| `/` | Desktop | 100 | 100 | 100 | 100 |
| `/about/` | Mobile | 100 | 100 | 100 | 100 |
| `/about/` | Desktop | 100 | 100 | 100 | 100 |
| `/writing/` | Mobile | 100 | 100 | 100 | 100 |
| `/writing/` | Desktop | 100 | 100 | 100 | 100 |
| `/legacy-systems-and-the-cost-of-hidden-technical-debt/` | Mobile | 100 | 100 | 100 | 100 |
| `/legacy-systems-and-the-cost-of-hidden-technical-debt/` | Desktop | 100 | 100 | 100 | 100 |

No failing audits remained in Accessibility, Best Practices, or SEO. The initial Best Practices run found a missing favicon request in the browser console; adding and linking a local SVG favicon resolved it. No Lighthouse audits were failing in the final runs.
