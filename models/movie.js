const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true }, // <-- "The Matrix"
  releaseYear: { type: Number, required: true }, // <-- 1999
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre", required: true }, // <-- 283479284353fekfjhf
});

module.exports = mongoose.model("Movie", movieSchema);