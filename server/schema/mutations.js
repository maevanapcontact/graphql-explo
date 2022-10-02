const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require("graphql");

const Character = require("../models/Character");
const { CharacterType } = require("./types/types");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCharacter: {
      type: CharacterType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        role: { type: GraphQLNonNull(GraphQLString) },
        level: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const character = new Character({
          name: args.name,
          role: args.role,
          level: args.level,
        });
        return character.save();
      },
    },
    deleteCharacter: {
      type: CharacterType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Character.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = mutation;
