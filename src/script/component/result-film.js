class ResultFilm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.innerHTML = `<film-list></film-list>`;
  }
}

customElements.define("result-film", ResultFilm);
