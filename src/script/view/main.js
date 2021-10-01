import "../component/film-list.js";
import DataSource from "../data/data-source";

const main = () => {
  const searchBar = document.querySelector("search-bar");
  const titleResult = document.querySelector("#title-result");
  const resultFilm = document.querySelector("film-list");
  const resultDetailFilm = document.querySelector("detail-list");
  const resultTrailerFilm = document.querySelector("trailer-list");

  const onClickSearch = async () => {
    try {
      const resultSearchFilm = await DataSource.searchFilm(searchBar.value);
      renderResult(resultSearchFilm);
    } catch (error) {
      fallbackError(error);
    }
  };

  const renderResult = (results) => {
    resultFilm.films = results;

    titleResult.innerHTML = `Result for <span class="text-dark">&#34;${searchBar.value}&#34;</span>`;
    titleResult.setAttribute("class", "fs-3 text-danger p-3");
    resultDetailFilm.films = results;
    resultTrailerFilm.films = results;

    window.scrollTo(0, document.body.scrollHeight);
  };

  const fallbackError = (message) => {
    resultFilm.renderError(message);
    window.scrollTo(0, document.body.scrollHeight);
  };

  searchBar.clickEvent = onClickSearch;
};

export default main;
