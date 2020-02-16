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
      });
    });
};

const generateGenreMarkup = genreObj => {
  const markup = `<div class="card">
        <div class="card-header" id="${genreObj.id}">
            <h5 class="mb=0>
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ${genreObj.name}
                </button>
            </h5>
        </div>
    </div>`;

  return markup;
};
