import { ProductRepository } from '../database/postgresql/repository/productSQLRepository';
import { redisClient } from '../database/redis/providers';
import { Product } from '../database/postgresql/entities/product';

// Todos usos de casos aqui
export class ProductService {
  private cacheTTL = 180; // TTL de 3 minutos

  async getProductById(productId: number): Promise<Product | null> {
    const cachedProduct = await redisClient.get(`product:${productId}`);

    if (cachedProduct) {
      return JSON.parse(cachedProduct);
    }

    const product = await ProductRepository.findOneBy({ id: productId });

    if (product) {
      await redisClient.set(`product:${productId}`, JSON.stringify(product), 'EX', this.cacheTTL);
    }
    return product;
  }

  async createProduct(name: string, price: number, type: string): Promise<Product> {
    const product = ProductRepository.create({ name, price, type });
    await ProductRepository.save(product);
    return product;
  }
}
