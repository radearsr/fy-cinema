import "./detail-item.js";

class DetailList extends HTMLElement {
  set films(films) {
    this._films = films;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._films.forEach((film) => {
      const detailFilmElement = document.createElement("detail-item");
      detailFilmElement.setAttribute(
        "class",
        "row align-content-center justify-content-evenly position-relative w-100 mx-0"
      );
      detailFilmElement.film = film;
      this.appendChild(detailFilmElement);
    });
  }
}

customElements.define("detail-list", DetailList);
