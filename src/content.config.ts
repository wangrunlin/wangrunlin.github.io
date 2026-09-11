import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const collections = {
  work: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
  moment: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/moment" }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      img: z.string().optional(),
      img_alt: z.string().optional(),
      twitter: z.string().optional(),
      mastodon: z.string().optional(),
      bluesky: z.string().optional(),
    }),
  }),
};
