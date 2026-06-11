import { prisma } from './prisma.js';
import type { TransactionType } from '../../generated/prisma/client.js';

export async function createTransaction(
  userId: string,
  description: string,
  amount: number,
  type: TransactionType,
  categoryId: string,
) {
  const transaction = await prisma.transaction.create({
    data: {
      amount: Math.round(amount * 100),
      description,
      type,
      userId,
      categoryId,
    },
  });

  return transaction;
}
