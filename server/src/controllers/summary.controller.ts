import type { Request, Response } from 'express';
import { summaryParamsSchema } from '../schemas/summary.schema.js';
import { summary } from '../services/summary.service.js';
import { z } from 'zod';
import { AppError } from '../errors/AppError.js';
import type { JwtPayload } from 'jsonwebtoken';

export async function summaryController(req: Request, res: Response) {
  const parsedParams = summaryParamsSchema.safeParse(req.query);

  if (!parsedParams.success) {
    throw new AppError(z.prettifyError(parsedParams.error), 400);
  }

  try {
    const userId = (req.user as JwtPayload).userId;
    const month = parsedParams.data.month;

    const result = await summary(userId, month);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    throw new AppError('Error generating monthly summary', 500);
  }
}
