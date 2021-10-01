class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container d-flex justify-content-center">
          <div class="row align-content-center c-red position-relative" id="jumbotron-search">
              <h1 class="text-secondary mb-3 text-center">
                  Search Your Favorite Movies Easily
              </h1>
              <search-bar class="d-flex" id="main-search"></search-bar>
          </div>
      </div>
    `;
  }
}

customElements.define("hero-section", HeroSection);
