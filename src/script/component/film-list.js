import "./film-item.js";

class FilmList extends HTMLElement {
  set films(films) {
    this._films = films;
    this.render();
  }

  detailFilm(elementId) {
    const allElement = document.querySelectorAll("detail-item");

    allElement.forEach((element) => {
      element.classList.remove("details-show");
    });
    document.getElementById(elementId).classList.add("details-show");

    window.scrollTo(0, document.body.scrollHeight);
  }

  renderError(message) {
    const detailShows = document.querySelectorAll("detail-item");
    if (detailShows != null) {
      detailShows.forEach((detailShow) => {
        detailShow.classList.remove("details-show");
      });
    }

    const msElement = document.createElement("h2");
    msElement.setAttribute("class", "text-center text-light p-5");
    msElement.innerText = `Sorry, your keyword "${message}" is not found`;
    document.querySelector("#title-result").innerHTML = "";
    this.innerHTML = "";
    this.appendChild(msElement);
  }

  render() {
    this.innerHTML = "";
    this.setAttribute("class", "row overflow-auto p-3 mb-3");
    this._films.forEach((film) => {
      const filmItemElement = document.createElement("film-item");
      filmItemElement.film = film;
      filmItemElement.setAttribute("class", "col-1 mx-2 shadow");
      this.appendChild(filmItemElement);
      filmItemElement.addEventListener("click", () => {
        this.detailFilm(film.id);
      });
    });
  }
}

customElements.define("film-list", FilmList);
