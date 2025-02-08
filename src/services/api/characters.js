import { baseUrl, fetchWrapper, characters } from "../api";

// Specific base URL for characters
const charactersEndPoint = `${baseUrl}${characters}`;

export const getCharacters = () => {
  return fetchWrapper(charactersEndPoint, {
    method: "GET",
  }).then((data) => {
    return data.results;
  });
};

export const getCharacter = (characterId) => {
  return fetchWrapper(`${charactersEndPoint}${characterId}`, {
    method: "GET",
  }).then((data) => {
    return data.result;
  });
};
