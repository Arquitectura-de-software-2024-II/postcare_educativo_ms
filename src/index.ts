import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import { validateApiGateway } from './middleware.js';

import { config } from 'dotenv';
import mongoose from 'mongoose';

config(); // Cargar variables de entorno desde .env

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "", {
    // Puedes agregar opciones adicionales si es necesario, pero estas no son obligatorias.
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
  

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