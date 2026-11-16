# Lighthouse results

Audited the local production-mode static build with Lighthouse 12.8.2 and Google Chrome. Mobile used Lighthouse's mobile form factor; desktop used its desktop preset.

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

No Accessibility, Best Practices, or SEO audits remained below 100. The About portrait is served at 640px and loaded eagerly with high priority to avoid the mobile low-resolution and lazy-loading findings.

Lighthouse reported sub-1 Performance diagnostics even though the Performance category score rounded to 100:

- LCP metric audit: 0.98–0.99 on mobile runs.
- Network-dependency-tree and render-blocking insights: reported on the tested pages.
- Render-blocking resource audit: approximately 150ms estimated savings on the mobile home, About, and Writing pages.
- Image-delivery and responsive-image insights: reported for About and the selected post.
- LCP discovery and lazy-loaded LCP image insights: reported for the selected post.

These are diagnostic findings, not Accessibility, Best Practices, or SEO category failures.
