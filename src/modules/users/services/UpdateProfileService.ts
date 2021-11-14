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

class UpdateProfileService {
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
      throw new AppError('User not found!!!!!');
    }

    const userUpdateEmail = await usersRepository.findByEmail(email);
    if (userUpdateEmail && userUpdateEmail.id !== user_id) {
      throw new AppError('Email already in use');
    }

    if (password && !old_password) {
      throw new AppError('Old password is required');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
      if (!checkOldPassword) {
        throw new AppError('Old password does not match');
      }

      user.password = await hash(password, 8);
    }

    user.name = name;
    user.email = email;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateProfileService;