import 'reflect-metadata';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import '@shared/typeorm';
// import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

/**instancia express como app e usa: */
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
//app.use('/files', express.static(uploadConfig.directory));

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
      message: 'Internal Server ERROR!!!',
    });
  },
);

/**escuta a porta/inicia do app */
app.listen(5000, () => {
  console.log('***APP UP 🏆: http://localhost:5000 ***',);
});
