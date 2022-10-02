const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const Character = require("../../models/Character");
const Quest = require("../../models/Quest");

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
        return Character.findById(parent.characterId);
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
        return Quest.findById(args.id);
      },
    },
    quests: {
      type: new GraphQLList(QuestType),
      resolve(parent, args) {
        return Quest.find();
      },
    },
    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Character.findById(args.id);
      },
    },
    characters: {
      type: new GraphQLList(CharacterType),
      resolve(parent, args) {
        return Character.find();
      },
    },
  },
});

module.exports = { RootQuery };
