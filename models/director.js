const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  birthYear: { type: Number, required: true},
  movies: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Movie", required: true },
  ],
});

module.exports = mongoose.model("Director", directorSchema);