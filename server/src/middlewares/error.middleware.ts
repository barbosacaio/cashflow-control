import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError.js';

export function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
}
