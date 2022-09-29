const { quests, characters } = require("../../__mocks__/data");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const QuestType = new GraphQLObjectType({
  name: "Quest",
  fields: () => ({
    id: { type: GraphQLID },
    characterId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    character: {
      type: CharacterType,
      resolve(parent, args) {
        return characters.find(
          (character) => character.id === parent.characterId
        );
      },
    },
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
    quests: {
      type: new GraphQLList(QuestType),
      resolve(parent, args) {
        return quests;
      },
    },
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return characters.find((character) => character.id === args.id);
      },
    },
    characters: {
      type: new GraphQLList(CharacterType),
      resolve(parent, args) {
        return characters;
      },
    },
  },
});

module.exports = { RootQuery };
