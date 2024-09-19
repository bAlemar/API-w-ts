import { AppDataSource } from '../providers';
import { Product } from '../entities/product';

export const ProductRepository = AppDataSource.getRepository(Product);
