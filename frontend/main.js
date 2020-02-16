const BASE_URL = "http://localhost:3000";

window.addEventListener("load", () => {
  getGenres();
});

const getGenres = () => {
  url = BASE_URL + "/genres";

  let genreList = document.getElementById("genre-list");
  genreList.innerHTML = "";

  fetch(url)
    .then(response => response.json())
    .then(genres => {
      genres.forEach(genre => {
        genreList.innerHTML += `name: ${genre.name}`;
      });
    });
};
