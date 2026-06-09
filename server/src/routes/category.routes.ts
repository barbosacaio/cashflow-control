import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import {
  createCategoryController,
  listCategoriesController,
  editCategoryController,
  deleteCategoryController,
} from '../controllers/category.controller.js';

const router = Router();

router.post('/', authMiddleware, createCategoryController);
router.get('/', authMiddleware, listCategoriesController);
router.put('/:id', authMiddleware, editCategoryController);
router.delete('/:id', authMiddleware, deleteCategoryController);

export { router as categoryRoutes };
