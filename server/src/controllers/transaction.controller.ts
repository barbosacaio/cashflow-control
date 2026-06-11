import type { Request, Response } from 'express';
import {
  createTransactionSchema,
  // categoryParamsSchema,
  // editCategorySchema,
} from '../schemas/transaction.schema.js';
import {
  createTransaction,
  // listCategories,
  // editCategory,
  // deleteCategory,
} from '../services/transaction.service.js';
import { AppError } from '../errors/AppError.js';
import { z } from 'zod';
import type { JwtPayload } from 'jsonwebtoken';

export async function createTransactionController(req: Request, res: Response) {
  const parsed = createTransactionSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError(z.prettifyError(parsed.error), 400);
  }

  try {
    const userId = (req.user as JwtPayload).userId;
    const { amount, description, type, categoryId } = parsed.data;
    const result = await createTransaction(
      userId,
      description,
      amount,
      type,
      categoryId,
    );
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Error creating transaction', 500);
  }
}
