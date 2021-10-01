import DataSource from "../data/data-source";

class DetailItem extends HTMLElement {
  set film(film) {
    this._film = film;
    this.render();
  }

  closeDetails(parentElement) {
    parentElement.classList.remove("details-show");
  }

  render() {
    const genre = async () => {
      try {
        const resultGenres = await DataSource.genres();
        getGenres(resultGenres);
      } catch (message) {
        console.log(message);
      }
    };

    genre();

    let currentLoop = 0;
    let filmGenres = "";

    const getGenres = (genres) => {
      genres.forEach((genre) => {
        const { id, name } = genre;

        if (
          this._film.genre_ids.length != 0 &&
          this._film.genre_ids.includes(id)
        ) {
          currentLoop += 1;
          if (currentLoop != this._film.genre_ids.length) {
            filmGenres += name;
            filmGenres += ", ";
          } else {
            filmGenres += name;
          }
        } else if (this._film.genre_ids.length == 0) {
          filmGenres = "Not found";
        }
        const buttonClose = document.createElement("button");
        buttonClose.setAttribute(
          "class",
          "btn-close btn-close-white position-absolute top-0 end-0"
        );
        buttonClose.setAttribute("type", "button");
        buttonClose.setAttribute("aria-label", "Close");

        buttonClose.addEventListener("click", () => {
          this.closeDetails(buttonClose.parentElement);
        });

        this.innerHTML = "";
        this.setAttribute("id", this._film.id);

        if (this._film.backdrop_path != null) {
          this.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${this._film.backdrop_path}")`;
        } else {
          this.style.backgroundColor = "rgba(0,0,0,0.5)";
        }

        this.innerHTML = `
            <div class="col-lg-2 position-relative text-center">
            <img src="https://image.tmdb.org/t/p/original/${this._film.poster_path}" alt="${this._film.title}" />
            </div>
            <div class="col-lg-7 my-auto text-white position-relative details" id="DES${this._film.id}">
                <h1 class="display-6 fw-bold">${this._film.title}</h1>
                <h2 class="fs-5 fw-bold">
                    Rating: <span class="fw-normal">${this._film.vote_average} /10</span>
                </h2>
                <p class="my-3 fs-5">${this._film.overview}</p>
                <h2 class="fs-5 fw-bold">
                    Release Date:
                    <span class="fw-normal">${this._film.release_date}</span>
                </h2>
                <h2 class="fs-5 fw-bold">
                    Genres:
                    <span class="fw-normal">${filmGenres}</span>
                </h2>
            </div>
        `;
        this.appendChild(buttonClose);
      });
    };
  }
}

customElements.define("detail-item", DetailItem);
