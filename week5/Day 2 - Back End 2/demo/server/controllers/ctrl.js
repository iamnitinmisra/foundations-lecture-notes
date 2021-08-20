const movies = require("../db.json");

let movieID = 11;

const findTheIndex = (id) => {
  const index = movies.findIndex((movie) => {
    return movie.id === +id;
  });
  return index;
};

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movies);
  },

  deleteMovie: (req, res) => {
    // console.log(req.params);
    const { id } = req.params;

    // console.log(typeof id);

    const index = findTheIndex(id);

    if (id === -1) {
      res.status(400).send({ error: "there is no such id" });
    } else {
      movies.splice(index, 1);
      res.status(200).send(movies);
    }
  },

  editRating: (req, res) => {
    const { id } = req.params;
    const { type: newName } = req.body;

    // console.log(id, type);

    const index = movies.findIndex((movie) => {
      return movie.id === +id;
    });

    const specificMovie = movies[index];

    if (
      index !== -1 &&
      newName === "plus" &&
      specificMovie.rating < 5 &&
      specificMovie.rating > 0
    ) {
      specificMovie.rating++;
      res.status(200).send(movies);
    } else if (
      index !== -1 &&
      newName === "minus" &&
      specificMovie.rating > 1 &&
      specificMovie.rating <= 5
    ) {
      specificMovie.rating--;
      res.status(200).send(movies);
    } else {
      res.status(400).send({ error: "could not edit a rating" });
    }
  },

  createMovie: (req, res) => {
    console.log(req.body);

    const { title, rating, imageURL } = req.body;

    const newMovie = { id: movieID, title, rating, imageURL };

    movies.push(newMovie);
    movieID++;

    res.status(200).send(movies);
  },
};
