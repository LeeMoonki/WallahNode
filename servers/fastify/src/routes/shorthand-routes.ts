import {
  FastifyInstance
} from '../types';

interface IQuerystring {
  foo: string;
  bar: number;
}
interface IHeaders {
  Custom?: string;
}

interface IParams {
  pid?: string | number;
}

interface IBody {
  nobody?: string;
}

interface FullRoutesPluginOptions {}

async function routes(fastify: FastifyInstance, options: FullRoutesPluginOptions): Promise<void> {
  fastify.get<{
    Querystring: IQuerystring,
    Headers: IHeaders,
    Params: IParams,
    Body: IBody,
  }>('/:pid', {}, async (request, reply) => {
    const { Custom } = request.headers;
    const { foo, bar } = request.query;
    const { pid } = request.params;
    // const { nobody } = request.body; // get에는 body가 없기 때문

    console.log('============= short hand : ', Custom, foo, bar, pid);

    return {
      shorthand: 'it is short!',
      headers: { ...request.headers },
      query: { foo, bar },
      params: { pid }
    };
  });
}

export default routes;
