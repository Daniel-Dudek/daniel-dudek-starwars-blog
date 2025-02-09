import { baseUrl, fetchWrapper, planetsUrl } from "../api";

// Specific base URL for films
const filmsEndPoint = `${baseUrl}${planetsUrl}`;

export const getPlanets = async () => {
  return await fetchWrapper(filmsEndPoint, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};

export const getPlanet = async (planetId) => {
  return await fetchWrapper(`${filmsEndPoint}/${planetId}`, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};
