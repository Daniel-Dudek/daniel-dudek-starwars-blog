import { baseUrl, fetchWrapper, planets } from "../api";

// Specific base URL for planets
const planetsEndPoint = `${baseUrl}${planets}`;

export const getPlanets = () => {
  return fetchWrapper(planetsEndPoint, {
    method: "GET",
  }).then((data) => {
    return data.results;
  });
};

export const getPlanet = (planetId) => {
  return fetchWrapper(`${planetsEndPoint}${planetId}`, {
    method: "GET",
  }).then((data) => {
    return data.result;
  });
};
