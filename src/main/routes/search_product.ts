import { FastifyInstance } from 'fastify';
import { getProduct , createProduct } from '../controllers/productController';

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get('/products/:id', getProduct);  // Busca um produto pelo ID
  fastify.post('/products', createProduct);  // Cria um novo produto
}
