import { FastifyInstance } from '../types';

interface RoutePluginOptions {}

async function routes(fastify: FastifyInstance, options: RoutePluginOptions): Promise<void> {
  fastify.get('/', async (request, reply) => {
    return {
      first: 'hey!'
    };
  });
}

export default routes;
