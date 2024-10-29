import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    type: "content",
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
    type: "content",
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
