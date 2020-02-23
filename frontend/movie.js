class Movie {
  constructor(movieObj) {
    this.title = movieObj.title;
    this.length = movieObj.length;
    this.isWatched = movieObj.is_watched;
    this.genre = movieObj.genre;
  }

  render() {
    let movieList = document.getElementsByClassName(
      this.genre.name + "-class"
    )[0];

    const newMovie = `<li>Title: ${this.title} --- Length: ${this.length} minutes --- Watched: ${this.is_watched}</li>`;
    movieList.innerHTML += newMovie;
  }
}
