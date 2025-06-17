const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Movie = require("./models/movie.js");
const Genre = require("./models/genre.js");
const genre = require("./models/genre.js");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    await runQueries();
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

connect();

/*----------------------------- Query Functions -----------------------------*/

// TODO: Implement this function to create a new genre
const createGenre = async () => {
  try {
    const genreData = {
        name: "Korean",
    }  
    const newGenre = await Genre.create(genreData)
    console.log("New Genre:", newGenre)
  } catch (error) {
    console.log(error);
  }
};

// TODO: Implement this function to create a new movie and link it to a genre
const createMovie = async () => {
  try {
    const movieData = {
        title: 'The Dark Knight',
        releaseYear: 2008,
        genre: '6851b3992286a0636692dace'
    }
    const newMovie = await Movie.create(movieData);
    await Genre.findByIdAndUpdate(
        movieData.genre,
        { $push: {movies: newMovie._id} },
        { new: true },
    );
  } catch (error) {
    console.log(error);
  }
};

// TODO: Implement this function to find all movies in a specific genre
const findMovies = async () => {
  try {
    const genreId = "6851b3992286a0636692dace"
    const findMovie = await Movie.find({genre: genreId });
    console.log(findMovie);  
} catch (error) {
    console.log(error);
  }


};

// TODO: Implement this function to find a genre and populate its movies
const findMoviesByGenre = async () => {
  try {
    const genreId = "6851b3992286a0636692dace"
    const genreWithMovies = await Genre.findById(genreId).populate('movies');
    console.log(genreWithMovies); 
  } catch (error) {
    console.log(error);
  }
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log("Queries running.");

  // Uncomment these one at a time to test your implementations
  // await createGenre();
//    await createMovie();
//    await findMovies();
//   await findMoviesByGenre();
};