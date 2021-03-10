import fastify from 'fastify';
import { FastifyInstance } from './types';

import firstRoutes from './routes/first-route';
import shortHandRoutes from './routes/shorthand-routes';



const app: FastifyInstance = fastify({ logger: {
  prettyPrint: true
} });

app.register(firstRoutes, {
  // if you use `fastify-plugin` this option won't work
  // https://www.fastify.io/docs/latest/Plugins/#route-prefixing-option
  prefix: '/first',
  foo: {
    fooOption1: 100,
    fooOption2: 'foo',
  }
});

app.register(shortHandRoutes, { prefix: '/short' });

function prepare() {
  app.get('/', function(request, reply) {
    reply.send({ hello: 'word' });
  });

  return app;
}

export default prepare;
