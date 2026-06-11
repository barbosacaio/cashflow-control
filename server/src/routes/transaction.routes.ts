import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { createTransactionController } from '../controllers/transaction.controller.js';

const router = Router();

router.post('/', authMiddleware, createTransactionController);

export { router as transactionRoutes };
