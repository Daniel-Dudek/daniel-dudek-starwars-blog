import { baseUrl, fetchWrapper, speciesUrl } from "../api";

// Specific base URL for species
const speciesEndPoint = `${baseUrl}${speciesUrl}`;

export const getSpecies = async () => {
  return await fetchWrapper(speciesEndPoint, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};

export const getSpecie = async (specieId) => {
  return await fetchWrapper(`${speciesEndPoint}/${specieId}`, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};
