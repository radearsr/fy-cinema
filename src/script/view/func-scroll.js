const navbar = document.querySelector("nav-app");
const burgerMenu = document.querySelector(".navbar-toggler");

const elementNavbar = document.getElementById("navbar-search");
const newSearchNav = document.createElement("search-bar");
newSearchNav.setAttribute("class", "d-flex");
newSearchNav.setAttribute("id", "nav-search");

const elementJumbotron = document.getElementById("jumbotron-search");
const newSearchJumbotron = document.createElement("search-bar");
newSearchJumbotron.setAttribute("class", "d-flex");
newSearchJumbotron.setAttribute("id", "main-search");

let searchElement = document.querySelector("search-bar");

const onScrollPage = () => {
  if (
    document.body.scrollTop > 320 ||
    document.documentElement.scrollTop > 320
  ) {
    burgerMenu.classList.remove("d-none");
    elementNavbar.appendChild(newSearchNav);
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-dark");
    if (document.getElementById("main-search") !== null) {
      document.getElementById("main-search").remove();
      searchElement = document.getElementById("nav-search");
    }
  } else {
    burgerMenu.classList.add("d-none");

    if (
      document.querySelector("#nav-search") !== null &&
      document.getElementById("main-search") == null
    ) {
      document.querySelector("#nav-search").remove();
      elementJumbotron.appendChild(newSearchJumbotron);
      searchElement = document.getElementById("main-search");
    }
    navbar.classList.remove("bg-dark");
    navbar.classList.add("bg-transparent");
  }
};

export default onScrollPage;
