import { prisma } from './prisma.js';
import { AppError } from '../errors/AppError.js';

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
    orderBy: { name: 'asc' },
  });

  return categories;
}

export async function editCategory(
  categoryId: string,
  userId: string,
  name: string,
) {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category || category.userId !== userId) {
    throw new AppError('Category not found', 404);
  }

  const updatedCategory = await prisma.category.update({
    where: { id: categoryId },
    data: { name },
  });

  return updatedCategory;
}

export async function deleteCategory(categoryId: string, userId: string) {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category || category.userId !== userId) {
    throw new AppError('Category not found', 404);
  }

  const deletedCategory = await prisma.category.delete({
    where: { id: categoryId },
  });

  return deletedCategory;
}
