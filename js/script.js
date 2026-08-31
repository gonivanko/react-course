"use strict";

const numberOfFilms = +prompt("Enter number of films", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < numberOfFilms; i++) {
    const movieName = prompt("Enter movie name", "");
    const rating = +prompt("Enter movie rating (from 1 to 10)", "");

    console.log("Movie name:", movieName);

    if (movieName !== "") personalMovieDB.movies[movieName] = rating;
}

console.log(personalMovieDB);