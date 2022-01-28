const movies = require("./movies");

const movie = {
    id: 203,
    name: "The sword",
};

//create
movies.push(movie);
console.log("Added", movie.name);
console.log(movie);
console.log(movies);

//read

const id = "202";
const movieFound = movies.find(function (m) {
    return m.id == id;
});
if (!moviefound) {
    console.log("movie ${id} not found");
} else {
    console.log("added", moviefound);
}
