import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { sitePath } from "../utils/site-url";

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts")).filter(
    (post) => !post.data.unlisted
  );
  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: "Richard W. Bown — Writing",
    description:
      "Selected writing on software architecture, platform engineering, and delivery.",
    site: context.site!,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: sitePath(`${post.id.replace(/\.mdx?$/, "")}/`)
    }))
  });
};
