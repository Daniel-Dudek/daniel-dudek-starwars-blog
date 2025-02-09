// Base URL for the API endpoints
export const baseUrl =
  "https://jubilant-train-q66w49767x5f44xv-3000.app.github.dev/";

// Specific base URL for all resources
export const planetsUrl = "/planets";
export const charactersUrl = "/people";
export const speciesUrl = "/species";
export const usersUrl = "/users";

// Function to get resources from star wars API
export const fetchWrapper = async (input, init) => {
  return await fetch(input, init)
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
