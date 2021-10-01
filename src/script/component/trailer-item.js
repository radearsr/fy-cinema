class TrailerItem extends HTMLElement {
  set trailer(trailer) {
    this._trailer = trailer;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Watch Trailer</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="ratio ratio-16x9">
              <iframe
                src=""
                allow="autoplay;"
                allowfullscreen
                id="frame${this._trailer.key}"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("trailer-item", TrailerItem);
