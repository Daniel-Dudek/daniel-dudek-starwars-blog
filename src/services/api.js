// Base URL for the API endpoints
export const baseUrl = "https://www.swapi.tech/api";

// Specific base URL for all resources
export const films = "/films/";
export const characters = "/people/";
export const planets = "/planets/";
export const species = "/species/";
export const starships = "/starships/";
export const vehicles = "/vehicles/";

// Function to get resources from star wars API
export const fetchWrapper = (input, init) => {
  return fetch(input, init)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText || response.status);
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
