const BASE_URL = "http://localhost:3000";

window.addEventListener("load", () => {
  getGenres();
});

const getGenres = () => {
  const url = BASE_URL + "/genres";

  let genreList = document.getElementById("accordion");
  genreList.innerHTML = "";

  fetch(url)
    .then(response => response.json())
    .then(genres => {
      genres.forEach(genre => {
        genreList.innerHTML += generateGenreMarkup(genre);
        generateGenreSelectOption(genre);
      });
    });
};

const generateGenreSelectOption = genreObj => {
  const genreSelect = document.getElementById("genre-select");

  const option = document.createElement("option");
  option.value = genreObj.id;
  option.label = genreObj.name;

  genreSelect.appendChild(option);
};

const generateGenreMarkup = genreObj => {
  const genreMovies = genreObj.movies;

  let genreMarkup = `<div class="card">
                        <div class="card-header" id="${genreObj.name}">
                            <h5 class="mb=0">
                                <button class="btn btn-link"
                                data-toggle="collapse"
                                data-target="#${genreObj.id}"
                                aria-expanded="true" 
                                aria-controls="${genreObj.id}">
                                    ${genreObj.name}
                                </button>
                            </h5>
                        </div>
                        
                        <div id="${genreObj.id}" 
                         class="collapse show" 
                         aria-labelledby="${genreObj.name}" 
                         data-parent="#accordion">
                          <div class="card-body">
                            <ul id="genre-movie-list" class="${
                              genreObj.name
                            }-class">
                              ${generateMovieMarkup(genreMovies, genreObj)}
                            </ul>
                          </div>
                        </div>
                      </div>`;

  return genreMarkup;
};

const generateMovieMarkup = (movieArr, genreObj) => {
  const movieList = document.getElementsByClassName(genreObj.name + "-class");
  movieList.innerHTML = "";

  movieArr.forEach(movie => {
    movieList.innerHTML += `<li>Title: ${movie.title} --- Length: ${movie.length} minutes --- Watched: ${movie.is_watched}</li>`;
  });

  return movieList.innerHTML;
};

// Create genre
const createGenreBtn = document.getElementById("create-genre-btn");
const createGenreText = document.getElementById("create-genre-text");

createGenreBtn.addEventListener("click", event => {
  event.preventDefault();
  createGenre();
});

const createGenre = () => {
  const genreName = createGenreText.value;

  if (genreName.length > 0) {
    createGenreText.value = "";

    const genre = {
      name: genreName
    };

    fetch(BASE_URL + "/genres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(genre)
    })
      .then(response => response.json())
      .then(genre => {
        let genreList = document.getElementById("accordion");
        genreList.innerHTML += generateGenreMarkup(genre);
        generateGenreSelectOption(genre);
      })
      .catch(error => {
        const errorMsg = document.getElementById("errors");
        errorMsg.innerHTML = "That genre name already exists.";
      });
  }
};

// Create movie
const genreSelect = document.getElementById("genre-select");
const movieTitle = document.getElementById("create-movie-title-text");
const movieLength = document.getElementById("create-movie-lenght-text");
const watchedCheckbox = document.getElementById("create-movie-watched-check");
const createMovieBtn = document.getElementById("create-movie-btn");

createMovieBtn.addEventListener("click", event => {
  event.preventDefault();
  createMovie();
});

const createMovie = () => {
  const movie = {
    title: movieTitle.value,
    length: movieLength.value,
    is_watched: watchedCheckbox.checked,
    genre_id: genreSelect.value
  };

  movieTitle.value = "";
  movieLength.value = "";

  fetch(BASE_URL + "/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(movie)
  })
    .then(response => response.json())
    .then(movie => {
      // create movie object, and call render on the object
      const newMovie = new Movie(movie);
      newMovie.render();
    })
    .catch(error => {
      const errorMsg = document.getElementById("errors");
      errorMsg.innerHTML = error;
    });
};

// const addSingleMovie = movie => {
//   let movieList = document.getElementsByClassName(
//     movie.genre.name + "-class"
//   )[0];

//   const newMovie = `<li>Title: ${movie.title} --- Length: ${movie.length} minutes --- Watched: ${movie.is_watched}</li>`;
//   movieList.innerHTML += newMovie;
//   // return movieList.innerHTML;
// };
