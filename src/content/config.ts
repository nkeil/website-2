import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string().transform((s) => new Date(s)),
      image: z.string(),
    }),
  }),
  projects: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string().transform((s) => new Date(s)),
        image: image(),
        link: z.string().url(),
      }),
  }),
};
