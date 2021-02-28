import { FastifyInstance } from '../types';
import { FastifyPluginCallback } from 'fastify';

interface Opts {}

// very simple example
const simplePlugin: FastifyPluginCallback<Opts> = function (fastify, opts, done) {
  done();
};