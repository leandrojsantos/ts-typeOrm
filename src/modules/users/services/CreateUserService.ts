import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);
      if (emailExists) {
        throw new AppError('E-MAIL já esta em uso.....');
      }
    const hashedPassword = await hash(password, 8);
    const user = usersRepository.create({ name, email, password: hashedPassword });
    await usersRepository.save(user);
    return user;
  }
}

