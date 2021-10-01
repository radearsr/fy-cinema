const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "843c1a6c74ade449eb64dc7fae955cfa";

class DataSource {
  static searchFilm = async (keyword) => {
    try {
      const response = await fetch(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`
      );

      const responseJson = await response.json();

      if (responseJson.error) {
        console.log(responseJson.message);
      } else {
        const films = responseJson.results;

        return new Promise((resolve, rejected) => {
          const filteredFilms = films.filter((film) => {
            return (
              film.poster_path != null &&
              film.title.toUpperCase().includes(keyword.toUpperCase())
            );
          });

          if (filteredFilms.length) {
            resolve(filteredFilms);
          } else {
            rejected(keyword);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static genres = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`
      );

      const responseJson = await response.json();

      if (responseJson.error) {
        console.log(responseJson.message);
      } else {
        const genres = responseJson.genres;

        return new Promise((resolve, rejected) => {
          if (genres.length) {
            resolve(genres);
          } else {
            rejected("Genre is not found");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static trailer = async (idFilm) => {
    try {
      const response = await fetch(
        `${baseUrl}/movie/${idFilm}/videos?api_key=${apiKey}`
      );

      const responseJson = await response.json();

      if (responseJson.error) {
        console.log(responseJson.message);
      } else {
        const trailers = responseJson.results;

        const type = "trailer";

        const filterTrailers = trailers.filter((trailer) => {
          return trailer.type.toUpperCase().includes(type.toUpperCase());
        });
        return new Promise((resolve, rejected) => {
          if (filterTrailers.length) {
            resolve(filterTrailers[0]);
          } else {
            rejected("is unavailable");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default DataSource;
