import 'reflect-metadata';
import '@shared/typeorm';
import express, { NextFunction, Request, Response } from 'express';
import AppError from '@shared/errors/AppError';
import cors from 'cors';
import routes from './routes';

/**instancia do express como app e usa: */
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**tratamento para erros */
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Server ERROR!!!',
    });
  },
);

/**escuta a porta/inicia do app */
app.listen(5000, () => {
  console.log('APP UP 🏆 IN http://localhost:5000',);
});
