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
    category: z.enum([
      "Architecture",
      "Platform engineering",
      "Delivery & systems thinking"
    ]),
    originalUrl: z.url()
  })
});

export const collections = { posts };
