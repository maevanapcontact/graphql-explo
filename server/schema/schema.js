const { GraphQLSchema } = require("graphql");

const { RootQuery } = require("./types/types");
const mutation = require("./mutations");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
