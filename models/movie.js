const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true }, // <-- "The Matrix"
  releaseYear: { type: Number, required: true }, // <-- 1999
  director: { type: mongoose.Schema.Types.ObjectId, ref: "Director", required: true}, // <-- sroifgiuzsrfog
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre", required: true }, // <-- 283479284353fekfjhf
  actors: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Actor", required: true },
      ],
});

module.exports = mongoose.model("Movie", movieSchema);