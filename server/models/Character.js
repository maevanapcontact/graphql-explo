const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: { type: String },
  role: {
    type: String,
    enum: ["Tank", "Heal", "DPS"],
  },
  level: { type: Number },
});

module.exports = mongoose.model("Character", CharacterSchema);
