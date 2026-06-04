import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (request, response) => {
  return response.json({ status: 'ok' });
});

app.use(errorMiddleware);

export { app };
