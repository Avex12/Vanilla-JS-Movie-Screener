// Import movies (assuming movies is exported from "./constants/movie.js")
import movies from "./movie.js";

// Elements
const movie_director = document.querySelector("#movie_director");
const movie_name = document.querySelector("#movie_name");
const movie_genre = document.querySelector("#movie_genre");
const movie_year = document.querySelector("#movie_year");
const movie_rating = document.querySelector("#movie_rating");
const movie_poster = document.querySelector("#movie_poster");

// Iterator Index
let index = 0;
displayData(); // Initial Data Load

// Buttons
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

// Events
prevBtn.addEventListener("click", () => {
  movieIterator("prev");
});
nextBtn.addEventListener("click", () => {
  movieIterator("next");
});

// Iterator Function
function movieIterator(action) {
  if (action === "next" && index < movies.length - 1) {
    index++;
    displayData(index);
  } else if (action === "prev" && index > 0) {
    index--;
    displayData(index);
  }
}

// Display Data
function displayData(index = 0) {
  movie_director.textContent = movies[index].director;
  movie_name.textContent = movies[index].title;
  movie_genre.textContent = movies[index].genre.join(",");
  movie_poster.src = movies[index].src;
  movie_poster.alt = movies[index].alt;
  movie_year.textContent = movies[index].year;
  movie_rating.textContent = movies[index].rating;
}
