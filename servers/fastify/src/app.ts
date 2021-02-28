import fastify from 'fastify';
import { FastifyInstance } from './types';

import firstRoutes from './routes/first-route';



const app: FastifyInstance = fastify({ logger: true });

app.register(firstRoutes, {
  // if you use `fastify-plugin` this option won't work
  // https://www.fastify.io/docs/latest/Plugins/#route-prefixing-option
  prefix: '/first'
});


function prepare() {
  app.get('/', function(request, reply) {
    reply.send({ hello: 'word' });
  });

  return app;
}

export default prepare;
