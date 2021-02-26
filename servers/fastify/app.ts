import fastify, { FastifyInstance } from 'fastify';
// import { Server, IncomingMessage, ServerResponse } from 'http';

const app: FastifyInstance = fastify({ logger: true });

function prepare() {
  app.get('/', function(request, reply) {
    reply.send({ hello: 'word' });
  });

  return app;
}

export default prepare;
