import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import {
  createCategoryController,
  listCategoriesController,
  editCategoryController,
} from '../controllers/category.controller.js';

const router = Router();

router.post('/', authMiddleware, createCategoryController);
router.get('/', authMiddleware, listCategoriesController);
router.put('/:id', authMiddleware, editCategoryController);

export { router as categoryRoutes };
