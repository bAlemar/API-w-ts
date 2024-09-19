import { FastifyReply, FastifyRequest } from 'fastify';
import { ProductService } from '../../services/productService';

// Interface para tipar os parâmetros da rota
interface GetProductParams {
  id: string; // O 'id' será uma string, pois os parâmetros da URL são strings por padrão
}

const productService = new ProductService();

export async function getProduct(req: FastifyRequest<{ Params: GetProductParams }>,
								 reply: FastifyReply)
	{
	const productId = Number(req.params.id);  // Converter para número
	const product = await productService.getProductById(productId);

	if (!product) {
		return reply.status(404).send({ message: 'Product not found' });
	}

	return reply.send(product);
	}

export async function createProduct(req: FastifyRequest, reply: FastifyReply) {
  const { name, price, type } = req.body as { name: string, price: number, type: string };
  const product = await productService.createProduct(name, price, type);
  return reply.status(201).send(product);
}
