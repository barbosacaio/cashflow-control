import { prisma } from './prisma.js';

export async function summary(userId: string, month?: string) {
  const targetMonth = month ?? new Date().toISOString().slice(0, 7);

  const dateFilter = {
    createdAt: {
      gte: new Date(`${targetMonth}-01`),
      lt: new Date(
        new Date(`${targetMonth}-01`).setMonth(
          new Date(`${targetMonth}-01`).getMonth() + 1,
        ),
      ),
    },
  };

  const [income, expenses] = await Promise.all([
    prisma.transaction.aggregate({
      where: { userId, type: 'INCOME', ...dateFilter },
      _sum: { amount: true },
    }),
    prisma.transaction.aggregate({
      where: { userId, type: 'EXPENSE', ...dateFilter },
      _sum: { amount: true },
    }),
  ]);

  const totalIncome = (income._sum.amount ?? 0) / 100;
  const totalExpenses = (expenses._sum.amount ?? 0) / 100;

  return {
    income: totalIncome,
    expenses: totalExpenses,
    balance: totalIncome - totalExpenses,
  };
}
