class FilmItem extends HTMLElement {
  set film(film) {
    this._film = film;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.innerHTML = `
          <img src="https://image.tmdb.org/t/p/original${this._film.poster_path}" alt="${this._film.title}" />
          `;
  }
}

customElements.define("film-item", FilmItem);
