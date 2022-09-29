const quests = [
  {
    id: "q-1",
    characterId: "c-1",
    name: "quest 1",
    description: "description of quest 1",
    status: "In progress",
  },
  {
    id: "q-2",
    characterId: "c-2",
    name: "quest 2",
    description: "description of quest 2",
    status: "To do",
  },
  {
    id: "q-3",
    characterId: "c-3",
    name: "quest 1",
    description: "description of quest 3",
    status: "Done",
  },
];

const characters = [
  {
    id: "c-1",
    name: "Character 1",
    role: "tank",
    level: 10,
  },
  {
    id: "c-2",
    name: "Character 2",
    role: "heal",
    level: 11,
  },
  {
    id: "c-3",
    name: "Character 3",
    role: "dps",
    level: 11,
  },
];

module.exports = { quests, characters };
