const express = require('express');
const conekta = require("./src/conekta");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.get('/', (req, res) => res.status(200).send({"mensaje" : "mamamwebi"}))
app.post('/payment', conekta)
app.listen(PORT, ()=> {
    console.log(`Escuchando en el puerto ${PORT}`)
})
/*const { ApolloServer, gql } = require('apollo-server-express');
const { buildSchema }= require("graphql");

async function startApolloServer() {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  const server = new ApolloServer(
      
    { typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer()*/