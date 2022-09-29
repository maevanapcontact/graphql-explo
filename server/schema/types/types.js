const { quests, characters } = require("../../__mocks__/data");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const QuestType = new GraphQLObjectType({
  name: "Quest",
  fields: () => ({
    id: { type: GraphQLID },
    characterId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const CharacterType = new GraphQLObjectType({
  name: "Character",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    role: { type: GraphQLString },
    level: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    quest: {
      type: QuestType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return quests.find((quest) => quest.id === args.id);
      },
    },
  },
});

module.exports = { RootQuery };
