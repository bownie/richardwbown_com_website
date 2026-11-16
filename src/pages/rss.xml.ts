import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("posts");
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
      link: `/${post.id.replace(/\.mdx?$/, "")}/`
    }))
  });
};
