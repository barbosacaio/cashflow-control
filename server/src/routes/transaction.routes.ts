import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import {
  createTransactionController,
  listTransactionsController,
  editTransactionController,
  deleteTransactionController,
} from '../controllers/transaction.controller.js';

const router = Router();

router.post('/', authMiddleware, createTransactionController);
router.get('/', authMiddleware, listTransactionsController);
router.put('/:id', authMiddleware, editTransactionController);
router.delete('/:id', authMiddleware, deleteTransactionController);

export { router as transactionRoutes };
