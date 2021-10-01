class NavApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container-lg">
          <a class="navbar-brand" href="index.html">FY Cinema</a>
          <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row" id="navbarContent">
            <div class="col-md-5 ms-auto" id="navbar-search"></div>
          </div>
        </div>
      `;
  }
}

customElements.define("nav-app", NavApp);
