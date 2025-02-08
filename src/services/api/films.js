import { baseUrl, fetchWrapper, films } from "../api";

// Specific base URL for films
const filmsEndPoint = `${baseUrl}${films}`;

export const getFilms = () => {
  return fetchWrapper(filmsEndPoint, {
    method: "GET",
  }).then((data) => {
    return data.result;
  });
};

export const getFilm = (filmId) => {
  return fetchWrapper(`${filmsEndPoint}${filmId}`, {
    method: "GET",
  }).then((data) => {
    return data.result;
  });
};
