import fastify from 'fastify';
import fastifyMultipart from 'fastify-multipart';
import fastifyFormbody from 'fastify-formbody';

import { FastifyInstance } from './types';

import firstRoutes from './routes/firstRoute';
import shortHandRoutes from './routes/shorthandRoutes';
import loginApi from './routes/login';

const app: FastifyInstance = fastify({ logger: {
  prettyPrint: true
} });

app.register(fastifyFormbody);
app.register(fastifyMultipart);

app.register(firstRoutes.routes, firstRoutes.options);
app.register(shortHandRoutes.routes, shortHandRoutes.options);
app.register(loginApi.routes, loginApi.options);

function prepare() {
  app.get('/', function(request, reply) {
    reply.send({ hello: 'word' });
  });

  return app;
}

export default prepare;
