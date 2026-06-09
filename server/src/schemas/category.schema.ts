import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(5).max(50),
});
