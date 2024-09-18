// server.js

const { ApolloServer } = require('apollo-server');
const { graphqlUploadExpress } = require('graphql-upload');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const express = require('express');

const app = express();

// Use graphqlUploadExpress middleware to handle file uploads
app.use(graphqlUploadExpress());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Add context if needed
  },
});

// Apply Apollo GraphQL middleware to the express server
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
});
