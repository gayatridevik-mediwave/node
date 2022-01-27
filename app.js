const funct = require("./functions");
const str = require("./string");

// function addNumber(a, b) {
//     return (a + b);
// }

// function subNumber(a, b) {
//     return (a - b);
// }

// const addNumber = function (a, b) {
//     return (a + b);
// }

// const addNumber = (a, b) => {
//     return (a + b);
// }

// const addNumber = (a, b) => (a + b);

// const sub = subNumber(2, 9);
// console.log(sub);

const sum = funct.addNumber(2, 3);
console.log(sum);

const sum1 = funct.subNumber(8, 10);
console.log(sum1);
console.log(funct.PI);

const str1 = str.upperCase("hello");
console.log(str1);














// const movies = require("./movies");

// const movie = {
//     id: 204,
//     name: "The sword",
// };

// movies.push(movie);
// console.log("Added", movie.name);
// console.log(movie);
// console.log(movies);
