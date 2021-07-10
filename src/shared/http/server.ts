import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import '@shared/typeorm';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'sorry internal server error',
    });
  },
);

app.listen(5000, () => {
  console.log('****** APP UP: http://localhost:5000 ******');
});
