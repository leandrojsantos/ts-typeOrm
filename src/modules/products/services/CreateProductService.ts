import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

export default class CreateProductService {
  public async execute({ name, price, quantity }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const productExists = await productsRepository.findByName(name);
      if (productExists) {
        throw new AppError('NOME já em uso, escolha outro!!!');
      }
    const product = productsRepository.create({ name, price, quantity, });
    await productsRepository.save(product);
    return product;
  }
}
