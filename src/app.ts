import Fastify from 'fastify';
import { productRoutes } from './main/routes/search_product';

export const buildApp = () => {
  const fastify = Fastify();

  fastify.register(productRoutes);

  return fastify;
};
