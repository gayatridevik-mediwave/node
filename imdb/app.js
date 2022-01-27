const movies = require("./movies");

const movie = {
    id: 204,
    name: "The sword",
};

movies.push(movie);
console.log("Added", movie.name);
console.log(movie);
console.log(movies);
