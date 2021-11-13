import AppError from '@shared/errors/AppError';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import UserTokensRepository from '../typeorm/repositories/UserTokensRepository ';
import EtherealMail from '@config/mail/EtherealMail';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('NOT exists.....');
    }

    const { token } = await userTokensRepository.generate(user.id);

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: 'SALES_API reset pass!!!',
      templateData: {
        template: `reset-password para {{name}} :  {{token}}`,
        variables: {
          name: user.name,
          token,
        },
      },
    });
  }
}

export default SendForgotPasswordEmailService;
