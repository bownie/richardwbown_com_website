import type { APIRoute } from "astro";
import { sitePath } from "../utils/site-url";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("The Astro site URL is required to generate robots.txt.");
  }

  const sitemap = new URL(sitePath("sitemap-index.xml"), site);
  const content = `User-agent: *
Allow: /

Sitemap: ${sitemap.href}
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
