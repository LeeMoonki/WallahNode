import { FastifyInstance } from '../types';

interface RoutePluginOptions {
  prefix: string;
  foo: {
    fooOption1: number;
    fooOption2: string;
  }
}

// options는 app.register에서 전달하는 옵션값이다.
async function routes(fastify: FastifyInstance, options: RoutePluginOptions): Promise<void> {
  // app.register에서 호출되는 스코프

  fastify.get('/', async (request, reply) => {
    // route 접근시 호출되는 스코프
    return {
      first: 'hey!',
      options,
    };
  });
}

const options = {
  // if you use `fastify-plugin` this option won't work
  // https://www.fastify.io/docs/latest/Plugins/#route-prefixing-option
  prefix: '/first',
  foo: {
    fooOption1: 100,
    fooOption2: 'foo',
  }
};

export default { routes, options };
