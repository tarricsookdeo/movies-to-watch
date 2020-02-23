class Movie {
  constructor(movieObj) {
    this.title = movieObj.title;
    this.length = movieObj.length;
    this.isWatched = movieObj.is_watched;
    this.genre = movieObj.genre;
  }

  render() {
    let movieList = document.getElementsByClassName(
      this.genre.name + '-class'
    )[0];

    let status = '';

    if (this.isWatched == false) {
      status = 'false';
    } else {
      status = 'true';
    }

    const newMovie = `<li>Title: ${this.title} --- Length: ${this.length} minutes --- Watched: ${status}</li>`;
    movieList.innerHTML += newMovie;
  }
}
