const { GraphQLSchema } = require("graphql");

const { RootQuery } = require("./types/types");

const Character = require("../models/Character");
const Quest = require("../models/Quest");

module.exports = new GraphQLSchema({
  query: RootQuery,
});
