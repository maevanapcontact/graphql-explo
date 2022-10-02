const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: { type: String },
  role: { type: String },
  level: { type: Number },
});

module.exports = mongoose.model("Character", CharacterSchema);
