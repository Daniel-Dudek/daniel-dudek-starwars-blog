import { baseUrl, fetchWrapper, charactersUrl } from "../api";

// Specific base URL for characters
const charactersEndPoint = `${baseUrl}${charactersUrl}`;

export const getCharacters = async () => {
  return await fetchWrapper(charactersEndPoint, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};

export const getCharacter = async (characterId) => {
  return await fetchWrapper(`${charactersEndPoint}/${characterId}`, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};
