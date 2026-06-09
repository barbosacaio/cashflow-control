import { prisma } from './prisma.js';

export async function createCategory(userId: string, name: string) {
  const category = await prisma.category.create({
    data: {
      userId,
      name,
    },
  });

  return category;
}
