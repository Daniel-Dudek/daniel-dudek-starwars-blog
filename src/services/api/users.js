import { baseUrl, fetchWrapper, usersUrl } from "../api";

// Specific base URL for species
const usersEndPoint = `${baseUrl}${usersUrl}`;

export const getUsers = async () => {
  return await fetchWrapper(usersEndPoint, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};

export const getUser = async (userId) => {
  return await fetchWrapper(`${usersEndPoint}/${userId}`, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};

export const getUserFavourites = async (userId) => {
  return await fetchWrapper(`${usersEndPoint}/${userId}/favourites`, {
    method: "GET",
  }).then((data) => {
    return data;
  });
};

export const postUserFavourite = async (userId, externalId, name, type) => {
  return await fetchWrapper(`${usersEndPoint}/${userId}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      external_id: externalId,
      name: name,
      type: type,
    }),
  }).then((data) => {
    return data;
  });
};

export const deleteUserFavourite = async (userId, favouriteId) => {
  return await fetchWrapper(`${usersEndPoint}/${userId}/favourites`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: favouriteId,
    }),
  }).then((data) => {
    return data;
  });
};
