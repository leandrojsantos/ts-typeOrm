import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function IsAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction,
):

void { const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('jwt/token errado!!!!', 401);
  }
  const [, token] = authHeader.split(' ');
  try {
    const decodedToken = verify(token, authConfig.jwt.secret);
    const { sub } = decodedToken as ITokenPayload;
    request.user = { id: sub };
    return next();
  } catch (error) {
    throw new AppError('inválido jwt/token!!!!', 401);
  }
}
