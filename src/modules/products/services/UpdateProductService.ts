import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string,
  name: string,
  price: number,
  quantity: number,
}

class UpdateProductService {
  public async execute({ id, name, price, quantity,}: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const product = await productsRepository.findOne(id);
      if (!product) {
        throw new AppError('Produto não encontrado...');
      }
    const productExists = await productsRepository.findByName(name);
      if (productExists && name !== product.name) {
        throw new AppError('NOME já em uso, escolha outro!!!');
      }
      product.name = name;
      product.price = price;
      product.quantity = quantity;
      await productsRepository.save(product);
      return product;
  }
}

export default UpdateProductService;
