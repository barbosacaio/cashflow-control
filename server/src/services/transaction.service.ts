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

export async function listTransactions(userId: string) {
  const transactions = await prisma.transaction.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    include: {
      category: true,
    },
  });

  return transactions;
}
