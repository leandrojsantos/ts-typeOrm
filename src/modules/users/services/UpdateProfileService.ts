import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

export default class UpdateProfileService {
  public async execute({
    user_id,
    email,
    name,
    old_password,
    password,
  }: IRequest): Promise<User> {
  const usersRepository = getCustomRepository(UsersRepository);
  const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User não encontrado!!!!!');
    }
  const userUpdateEmail = await usersRepository.findByEmail(email);
    if (userUpdateEmail && userUpdateEmail.id !== user_id) {
      throw new AppError('Email já cadastrado');
    }

    if (password && !old_password) {
      throw new AppError('Você precisa informar a senha antiga para alterar a senha');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
        if (!checkOldPassword) {
          throw new AppError('Senha antiga incorreta');
        }
      user.password = await hash(password, 8);
    }
    user.name = name;
    user.email = email;
    await usersRepository.save(user);
    return user;
  }
}
