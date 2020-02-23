class Genre {
  constructor(genreObj) {
    this.id = genreObj.id;
    this.name = genreObj.name;
  }

  render() {
    // create dropdown menu selection
    const genreSelect = document.getElementById('genre-select');

    const option = document.createElement('option');
    option.value = this.id;
    option.label = this.name;

    genreSelect.appendChild(option);
  }
}
