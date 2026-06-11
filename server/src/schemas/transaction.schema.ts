import { z } from 'zod';

export const createTransactionSchema = z.object({
  amount: z.number().positive(),
  description: z.string().min(5).max(200),
  type: z.enum(['INCOME', 'EXPENSE']),
  categoryId: z.string().min(1),
});
