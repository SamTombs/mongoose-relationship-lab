const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  birthYear: { type: Number, required: true }, 
  movies: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
    ],
  biography: { type: String, required: true }, 
  awards: [
    { type: String, required: true },
    ],
});

module.exports = mongoose.model("Actor", actorSchema);