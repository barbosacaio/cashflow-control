import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { createCategoryController } from '../controllers/category.controller.js';

const router = Router();

router.post('/', authMiddleware, createCategoryController);

export { router as categoryRoutes };
