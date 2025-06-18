const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Movie = require("./models/movie.js");
const Genre = require("./models/genre.js");
const Director = require("./models/director.js");
const Actor = require("./models/actor.js");

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
// const createGenre = async () => {
//   try {
//     const genreData = {
//         name: "Korean",
//         birthYear:
//     }  
//     const newGenre = await Genre.create(genreData)
//     console.log("New Genre:", newGenre)
//   } catch (error) {
//     console.log(error);
//   }
// };

// TODO: Implement this function to create a new genre
const createActor = async () => {
  try {
    const actorData = {
        name: "Tom Hardy",
        birthYear: 1977,
        movies: [],
        biography: "With his breakthrough performance as Eames in Christopher Nolan's sci-fi thriller Inception (2010), English actor Tom Hardy has been brought to the attention of mainstream audiences worldwide. However, the versatile actor has been steadily working on both stage and screen since his television debut in the miniseries Band of Brothers (2001).",
        awards: [ "BAFTA Rising Star", "BIFA Best Actor", "Critics Choice Award - Best Actor in an Action Movie" ],
    }  
    const newActor = await Actor.create(actorData)
    console.log("New Actor:", newActor)
  } catch (error) {
    console.log(error);
  }
};

// TODO: Implement this function to create a new movie and link it to a genre
const createMovie = async () => {
  try {
    const movieData = {
        title: 'The Dark Knight Rises',
        releaseYear: 2010,
        director:'6851c2bfb753ce4df60cb866',
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
// const findMoviesByDirector = async () => {
//   try {
//     const directorId = "6851c0dce5265711ff601f04"
//     const findMovie = await Director.find({director: directorId });
//     console.log(findMovie);  
// } catch (error) {
//     console.log(error);
//   }
// };

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

// TODO: Implement this function to find a director and populate its movies
const findMoviesByDirector = async () => {
  try {
    const directorId = "6851c2bfb753ce4df60cb866"
    const directorWithMovies = await Director.findById(directorId).populate('movies');
    console.log(directorWithMovies); 
  } catch (error) {
    console.log(error);
  }
};


/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log("Queries running.");

// Uncomment these one at a time to test your implementations
// await createGenre();
  // 
  // await createActor()
    await createMovie();
//    await findMovies();
//   await findMoviesByGenre();
    // await findMoviesByDirector()
};