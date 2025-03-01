import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import { validateApiGateway } from './middleware.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

if (!process.env.MONGO_URI || !process.env.PORT) {
  throw new Error("Las variables de entorno MONGO_URI y PORT no están definidas");
}


// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI , {
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
    //validateApiGateway(req);
    return { req };
  },
  listen: { port: Number(process.env.PORT) || 8080 },
});




console.log(`🚀 Server ready at ${url}`);