import type { Request, Response } from 'express';
import { createCategorySchema } from '../schemas/category.schema.js';
import { createCategory } from '../services/category.service.js';
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
