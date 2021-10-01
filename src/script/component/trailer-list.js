import DataSource from "../data/data-source";
import "./trailer-item";

class TrailerList extends HTMLElement {
  set films(films) {
    this._films = films;
    this.render();
  }

  render() {
    this._films.forEach((film) => {
      const getTrailer = async () => {
        try {
          const resultTrailer = await DataSource.trailer(film.id);
          displayTrailer(resultTrailer);
        } catch (message) {
          renderNotFound(message);
        }
      };
      const trailerItemElement = document.createElement("trailer-item");
      trailerItemElement.setAttribute("id", `modal${film.id}`);
      trailerItemElement.setAttribute("class", "modal fade");
      trailerItemElement.setAttribute("data-bs-backdrop", "static");
      trailerItemElement.setAttribute("data-bs-keyboard", "false");
      trailerItemElement.setAttribute("tabindex", "-1");
      trailerItemElement.setAttribute("aria-labelledby", "staticBackdropLabel");
      trailerItemElement.setAttribute("aria-hidden", "true");

      const buttonTrigModal = document.createElement("button");
      buttonTrigModal.setAttribute("class", "btn btn-lg btn-secondary mt-2");
      buttonTrigModal.setAttribute("data-bs-toggle", "modal");
      buttonTrigModal.setAttribute("data-bs-target", `#modal${film.id}`);
      buttonTrigModal.innerText = "Watch Trailer";

      const displayTrailer = (results) => {
        trailerItemElement.trailer = results;

        buttonTrigModal.setAttribute(
          "data-tagVideo",
          `https://www.youtube.com/embed/${results.key}`
        );

        document.getElementById(`DES${film.id}`).appendChild(buttonTrigModal);

        trailerItemElement.addEventListener("show.bs.modal", (event) => {
          const button = event.relatedTarget;
          const dataVideo = button.getAttribute("data-tagVideo");
          const iframeYt = this.querySelector(`#frame${results.key}`);
          iframeYt.setAttribute("src", dataVideo);
        });
        trailerItemElement.addEventListener("hide.bs.modal", () => {
          const iframeYt = this.querySelector(`#frame${results.key}`);
          iframeYt.setAttribute("src", "");
        });

        this.appendChild(trailerItemElement);
      };

      const renderNotFound = (message) => {
        trailerItemElement.innerHTML = `
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h2 class="modal-title">Watch Trailer</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h1 class="text-center text-muted">Sorry, Trailer &#34;${film.title}&#34; ${message}</h1>
              </div>
            </div>
          </div>
        `;
        setTimeout(() => {
          document.getElementById(`DES${film.id}`).appendChild(buttonTrigModal);
          this.appendChild(trailerItemElement);
        }, 1000);
      };

      getTrailer();
    });
  }
}

customElements.define("trailer-list", TrailerList);
