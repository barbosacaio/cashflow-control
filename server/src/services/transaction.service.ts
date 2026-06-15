import { prisma } from './prisma.js';
import type { Prisma, TransactionType } from '../../generated/prisma/client.js';

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

export async function editTransaction(
  userId: string,
  transactionId: string,
  data: {
    description?: string | undefined;
    amount?: number | undefined;
    type?: TransactionType | undefined;
    categoryId?: string | undefined;
  },
) {
  const updateData: Prisma.TransactionUncheckedUpdateInput = {};

  if (data.description !== undefined) updateData.description = data.description;
  if (data.type !== undefined) updateData.type = data.type;
  if (data.categoryId !== undefined) updateData.categoryId = data.categoryId;
  if (data.amount !== undefined)
    updateData.amount = Math.round(data.amount * 100);

  const transaction = await prisma.transaction.update({
    where: {
      id: transactionId,
      userId,
    },
    data: updateData,
  });

  return transaction;
}
