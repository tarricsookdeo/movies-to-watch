const BASE_URL = "http://localhost:3000";
let data = [];

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
      console.log(genres);
      data = genres;
      genres.forEach(genre => {
        genreList.innerHTML += generateGenreMarkup(genre);
      });
    });
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
    movieList.innerHTML += `<li>Title: ${movie.title} --- Lenght: ${movie.length} minutes --- Watched: ${movie.is_watched}</li>`;
  });

  return movieList.innerHTML;
};
