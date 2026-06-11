import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import {
  createTransactionController,
  listTransactionsController,
} from '../controllers/transaction.controller.js';

const router = Router();

router.post('/', authMiddleware, createTransactionController);
router.get('/', authMiddleware, listTransactionsController);

export { router as transactionRoutes };
