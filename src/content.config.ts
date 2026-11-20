import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.string().max(160),
    category: z
      .enum([
        "Architecture",
        "Platform engineering",
        "Delivery & systems thinking",
        "People & teams"
      ])
      .optional(),
    // Kept out of the writing index, homepage and RSS feed, but still built and
    // listed in the sitemap so the old WordPress URL keeps ranking.
    unlisted: z.boolean().optional(),
    // Which end-of-article call to show; defaults to the consulting CTA.
    callout: z.enum(["consulting", "fiction"]).optional(),
    originalUrl: z.url()
  })
});

export const collections = { posts };
