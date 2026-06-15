import type { Request, Response } from 'express';
import {
  createTransactionSchema,
  transactionParamsSchema,
  editTransactionSchema,
} from '../schemas/transaction.schema.js';
import {
  createTransaction,
  listTransactions,
  editTransaction,
  deleteTransaction,
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

export async function listTransactionsController(req: Request, res: Response) {
  try {
    const userId = (req.user as JwtPayload).userId;
    const transactions = await listTransactions(userId);
    res.json(transactions);
  } catch (error) {
    console.error(error);
    throw new AppError('Error listing transactions', 500);
  }
}

export async function editTransactionController(req: Request, res: Response) {
  const parsedBody = editTransactionSchema.safeParse(req.body);
  const parsedParams = transactionParamsSchema.safeParse(req.params);

  if (!parsedBody.success) {
    throw new AppError(z.prettifyError(parsedBody.error), 400);
  }

  if (!parsedParams.success) {
    throw new AppError(z.prettifyError(parsedParams.error), 400);
  }

  try {
    const userId = (req.user as JwtPayload).userId;
    const transactionId = parsedParams.data.id;
    const data = parsedBody.data;

    const result = await editTransaction(userId, transactionId, data);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Error editing transaction', 500);
  }
}

export async function deleteTransactionController(req: Request, res: Response) {
  const parsed = transactionParamsSchema.safeParse(req.params);

  if (!parsed.success) {
    throw new AppError(z.prettifyError(parsed.error), 400);
  }

  try {
    const userId = (req.user as JwtPayload).userId;
    const transactionId = parsed.data.id;

    await deleteTransaction(userId, transactionId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    throw new AppError('Error deleting transaction', 500);
  }
}
