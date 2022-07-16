import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepositories';

interface IRequest { id: string;}

export default class ShowCutomerService {
  public async execute({ id }: IRequest): Promise<Customer> {
  const customersRepository = getCustomRepository(CustomersRepository);
  const customer = await customersRepository.findById(id);
    if (!customer) {
      throw new AppError('Cliente não encontrado!!!!!');
    }
    return customer;
  }
}
