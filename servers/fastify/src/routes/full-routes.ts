import {
  FastifyInstance
} from '../types';

interface IQuerystring {
  foo: string;
  bar: number;
}
interface IHeaders {
  'h-Custom'?: string;
}

interface FullRoutesPluginOptions {}

async function routes(fastify: FastifyInstance, options: FullRoutesPluginOptions): Promise<void> {
  fastify.get<{
    Querystring: IQuerystring,
    Headers: IHeaders
  }>('/first', {}, async (request, reply) => {
    return {
      first: 'hey!'
    };
  });
}

export default routes;
