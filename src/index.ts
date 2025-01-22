import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import { validateApiGateway } from './middleware.js';

import { config } from 'dotenv';

config(); // Cargar variables de entorno desde .env

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    // validateApiGateway(req);
    return { req };
  },
  listen: { port: Number(process.env.PORT) || 4000 },
});

console.log(`🚀 Server ready at ${url}`);