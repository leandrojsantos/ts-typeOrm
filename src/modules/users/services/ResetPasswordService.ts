import AppError from '@shared/errors/AppError';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import UserTokensRepository from '../typeorm/repositories/UserTokensRepository ';
import { isAfter, addHours } from 'date-fns';
import { hash } from 'bcryptjs';

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  public async execute({ token, password }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const UserToken = await userTokensRepository.findByToken(token);
    if (!UserToken) {
      throw new AppError('E-MAIL not exists.....');
    }

    const user = await usersRepository.findById(UserToken.user_id);
    if (!user) {
      throw new AppError('User not exists.....');
    }

    const tokenCreatedAt = UserToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);
    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.....');
    }

    user.password = await hash(password, 8);
    await usersRepository.save(user);
  }
}

export default ResetPasswordService;
