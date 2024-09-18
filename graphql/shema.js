// schema.js

const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Upload
  scalar JSON

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    getSettings: JSON
  }

  type Mutation {
    singleUpload(file: Upload!): File!
    updateSettings(settings: JSON!): JSON
  }
`;

module.exports = typeDefs;
