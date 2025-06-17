const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Movie = require("./models/movie.js");
const Genre = require("./models/genre.js");
const Director = require("./models/director.js");

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
// const createMovie = async () => {
//   try {
//     const movieData = {
//         title: 'The Dark Knight',
//         releaseYear: 2008,
//         director:,
//         genre: '6851b3992286a0636692dace'
//     }
//     const newMovie = await Movie.create(movieData);
//     await Genre.findByIdAndUpdate(
//         movieData.genre,
//         { $push: {movies: newMovie._id} },
//         { new: true },
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// TODO: Implement this function to create a new director and link it to a movie

const createDirector = async () => {
  try {
    const directorData = {
        name: 'Christopher Nolan',
        birthYear: 1970,
        movies: '6851b69f1407bf3495740bb0'
    }
    const newDirector = await Director.create(directorData);
        await Movie.findByIdAndUpdate(
        directorData.movies,
        { $push: {movies: '6851b69f1407bf3495740bb0'} },
        { new: true },
    );
    console.log(newDirector)
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

// TODO: Implement this function to find all movies by Director
const findMoviesByDirector = async () => {
  try {
    const directorId = "6851c0dce5265711ff601f04"
    const findMovie = await Director.find({director: directorId });
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
  await createDirector();
//    await createMovie();
//    await findMovies();
//   await findMoviesByGenre();
    // await findMoviesByDirector()
};