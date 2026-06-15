import { z } from 'zod';

export const createTransactionSchema = z.object({
  amount: z.number().positive(),
  description: z.string().min(5).max(200),
  type: z.enum(['INCOME', 'EXPENSE']),
  categoryId: z.string().min(1),
});

export const transactionParamsSchema = z.object({
  id: z.string().min(1),
});

export const editTransactionSchema = z.object({
  amount: z.number().positive().optional(),
  description: z.string().min(5).max(200).optional(),
  type: z.enum(['INCOME', 'EXPENSE']).optional(),
  categoryId: z.string().min(1).optional(),
});
