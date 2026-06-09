import type { Request, Response } from 'express';
import {
  createCategorySchema,
  categoryParamsSchema,
  editCategorySchema,
} from '../schemas/category.schema.js';
import {
  createCategory,
  listCategories,
  editCategory,
} from '../services/category.service.js';
import { AppError } from '../errors/AppError.js';
import { z } from 'zod';
import type { JwtPayload } from 'jsonwebtoken';

export async function createCategoryController(req: Request, res: Response) {
  const parsed = createCategorySchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError(z.prettifyError(parsed.error), 400);
  }

  try {
    const userId = (req.user as JwtPayload).userId;
    const { name } = parsed.data;
    const result = await createCategory(userId, name);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Error creating category', 500);
  }
}

export async function listCategoriesController(req: Request, res: Response) {
  try {
    const userId = (req.user as JwtPayload).userId;
    const result = await listCategories(userId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Error listing categories', 500);
  }
}

export async function editCategoryController(req: Request, res: Response) {
  const parsedBody = editCategorySchema.safeParse(req.body);
  const parsedParams = categoryParamsSchema.safeParse(req.params);
  if (!parsedBody.success) {
    throw new AppError(z.prettifyError(parsedBody.error), 400);
  }
  if (!parsedParams.success) {
    throw new AppError(z.prettifyError(parsedParams.error), 400);
  }

  try {
    const userId = (req.user as JwtPayload).userId;
    const categoryId = parsedParams.data.id;
    const { name } = parsedBody.data;
    const result = await editCategory(categoryId, userId, name);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Error editing category', 500);
  }
}
