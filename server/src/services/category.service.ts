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

export async function listCategories(userId: string) {
  const categories = await prisma.category.findMany({
    where: {
      OR: [{ userId: { equals: userId } }, { userId: { equals: '1' } }],
    },
  });

  return categories;
}
