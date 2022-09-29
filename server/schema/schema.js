const { RootQuery } = require("./types/types");

const { GraphQLSchema } = require("graphql");

module.exports = new GraphQLSchema({
  query: RootQuery,
});
