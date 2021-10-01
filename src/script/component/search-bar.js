class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search-input").value;
  }

  render() {
    this.innerHTML = `
      <input
      class="form-control me-1 bg-transparent border-secondary text-white"
      type="search"
      placeholder="Search Film Here..."
      aria-label="Search"
      id="search-input"
      autocomplete="off"
      />
      <button class="btn btn-danger" type="submit"  id="btn-search">
        Search
      </button>
      <button class="btn btn-danger d-none" type="button" disabled id="btn-loading">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span class="visually-hidden">Loading...</span>
      </button>
    `;

    this.querySelector("#btn-search").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
