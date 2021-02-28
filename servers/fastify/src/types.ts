import {
  FastifyInstance as FI,
  RouteShorthandOptions as RSO,
} from 'fastify';
// import { Server, IncomingMessage, ServerResponse } from 'http';

export interface FastifyInstance extends FI {}

export interface RouteShorthandOptions extends RSO {}
