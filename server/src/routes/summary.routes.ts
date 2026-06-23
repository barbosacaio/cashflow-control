import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { summaryController } from '../controllers/summary.controller.js';

const router = Router();

router.get('/', authMiddleware, summaryController);

export { router as summaryRoute };
