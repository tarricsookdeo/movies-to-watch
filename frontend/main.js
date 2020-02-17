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
                            <ul>
                              ${generateMovieMarkup(genreMovies[0])}
                            </ul>
                          </div>
                        </div>
                      </div>`;

  return genreMarkup;
};

const generateMovieMarkup = movieObj => {
  const markup = `<li>Title: ${movieObj.title} - Length: ${movieObj.length} minutes - Watched: ${movieObj.is_watched}</li>`;
  return markup;
};
