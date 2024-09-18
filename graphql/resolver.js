// resolvers.js

const { GraphQLUpload } = require('graphql-upload');
const { GraphQLJSON } = require('graphql-type-json');

const resolvers = {
  Upload: GraphQLUpload,
  JSON: GraphQLJSON,

  Query: {
    getSettings: () => {
      return {
        theme: "dark",
        notifications: {
          email: true,
          sms: false,
        },
      };
    },
  },

  Mutation: {
    singleUpload: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      // Implement logic to handle file, e.g., save to disk or cloud storage
      return { filename, mimetype, encoding };
    },
    updateSettings: (parent, { settings }) => {
      // Implement logic to update settings
      return settings; // Return updated settings
    },
  },
};

module.exports = resolvers;
