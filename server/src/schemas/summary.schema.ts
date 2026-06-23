import { z } from 'zod';

export const summaryParamsSchema = z.object({
  month: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'Month must be in format YYYY-MM')
    .optional(),
});
