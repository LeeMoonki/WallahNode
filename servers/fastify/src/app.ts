import fastify from 'fastify';
import { FastifyInstance } from './types';

import firstRoutes from './routes/first-route';
// import fullRoutes from './routes/full-routes';



const app: FastifyInstance = fastify({ logger: true });

app.register(firstRoutes, {
  // if you use `fastify-plugin` this option won't work
  // https://www.fastify.io/docs/latest/Plugins/#route-prefixing-option
  prefix: '/first',
  foo: {
    fooOption1: 100,
    fooOption2: 'foo',
  }
});

// app.register(fullRoutes, { prefix: '/full' });


function prepare() {
  app.get('/', function(request, reply) {
    reply.send({ hello: 'word' });
  });

  return app;
}

export default prepare;
