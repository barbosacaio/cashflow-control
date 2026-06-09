import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { authRoutes } from './routes/auth.routes.js';
import { categoryRoutes } from './routes/category.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (request, response) => {
  return response.json({ status: 'ok' });
});

app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);

app.use(errorMiddleware);

export { app };
