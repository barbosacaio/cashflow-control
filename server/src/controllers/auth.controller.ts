import type { Request, Response } from 'express';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { registerUser, loginUser } from '../services/auth.service.js';
import { AppError } from '../errors/AppError.js';
import { z } from 'zod';

export async function registerUserController(req: Request, res: Response) {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError(z.prettifyError(parsed.error), 400);
  }

  try {
    const { name, email, password } = parsed.data;
    const result = await registerUser(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Failed to register user', 409);
  }
}

export async function loginUserController(req: Request, res: Response) {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new AppError(z.prettifyError(parsed.error), 400);
  }

  try {
    const { email, password } = parsed.data;
    const result = await loginUser(email, password);
    res.json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Failed to login user', 401);
  }
}
