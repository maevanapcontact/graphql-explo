const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLEnumType,
} = require("graphql");

const Character = require("../models/Character");
const Quest = require("../models/Quest");
const { CharacterType, QuestType } = require("./types/types");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCharacter: {
      type: CharacterType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        role: {
          type: new GraphQLEnumType({
            name: "CharacterRole",
            values: {
              tank: { value: "Tank" },
              heal: { value: "Heal" },
              dps: { value: "DPS" },
            },
          }),
          defaultValue: "DPS",
        },
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
    updateCharacter: {
      type: CharacterType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        role: { type: GraphQLString },
        level: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Character.findByIdAndUpdate(
          args.id,
          {
            $set: {
              role: args.role,
              level: args.level,
            },
          },
          { new: false }
        );
      },
    },
    addQuest: {
      type: QuestType,
      args: {
        characterId: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "QuestStatus",
            values: {
              todo: { value: "To do" },
              doing: { value: "In progress" },
              done: { value: "Done" },
            },
          }),
          defaultValue: "To do",
        },
      },
      resolve(parent, args) {
        const quest = new Quest({
          characterId: args.characterId,
          name: args.name,
          description: args.description,
          status: args.status,
        });
        return quest.save();
      },
    },
    deleteQuest: {
      type: QuestType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Quest.findByIdAndRemove(args.id);
      },
    },
    updateQuest: {
      type: QuestType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "QuestStatusUpdate",
            values: {
              todo: { value: "To do" },
              doing: { value: "In progress" },
              done: { value: "Done" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Quest.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = mutation;
