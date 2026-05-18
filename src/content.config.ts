import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      "network",
      "database",
      "system",
      "ai-application",
      "ai-inference",
      "ai-training",
      "prototype",
      "thinking",
    ]),
    subcategory: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
