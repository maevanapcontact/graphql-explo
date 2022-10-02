const mongoose = require("mongoose");

const QuestSchema = new mongoose.Schema({
  characterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Character",
  },
  name: { type: String },
  description: { type: String },
  status: {
    type: String,
    enum: ["To do", "In progress", "Done"],
  },
});

module.exports = mongoose.model("Quest", QuestSchema);
