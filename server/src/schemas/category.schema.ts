import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(5).max(50),
});

export const categoryParamsSchema = z.object({
  id: z.string().min(1),
});

export const editCategorySchema = z.object({
  name: z.string().min(5).max(50),
});
