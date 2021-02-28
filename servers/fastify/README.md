# fastify node server

Studying fastify

## **references**
* [HTTP prototypes(type of the server)](https://www.fastify.io/docs/v1.14.x/TypeScript/)
```javascript
interface CustomIncomingMessage extends http.IncomingMessage {
  getClientDeviceType: () => string
}

// Passing overrides for the http prototypes to fastify
const server: fastify.FastifyInstance<http.Server, CustomIncomingMessage, http.ServerResponse> = fastify()

server.get('/ping', (request, reply) => {
  // Access our custom method on the http prototype
  const clientDeviceType = request.raw.getClientDeviceType()

  reply.send({ clientDeviceType: `you called this endpoint from a ${clientDeviceType}` })
})
```