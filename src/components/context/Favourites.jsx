import { createContext, useState, useEffect } from "react";
import {
  getUserFavourites,
  deleteUserFavourite,
  postUserFavourite,
} from "../../services/api/users";

export const FavouritesContext = createContext({
  favourites: [],
  setFavourites: () => {},
  deleteFavourite: (id, type) => {},
  addToFavourites: (id, name, type) => {},
});

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const userId = 1;

  const refreshFavourites = () => {
    getUserFavourites(userId).then((data) => {
      setFavourites(data);
    });
  };

  const deleteFavourite = (externalId, type) => {
    const favouriteId = favourites.find((favourite) => {
      return favourite.type === type && favourite.external_id === externalId;
    }).id;
    deleteUserFavourite(userId, favouriteId).then(() => {
      refreshFavourites();
    });
  };

  const addToFavourites = (externalId, name, type) => {
    postUserFavourite(userId, externalId, name, type).then(() => {
      refreshFavourites();
    });
  };

  useEffect(() => {
    refreshFavourites();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{ favourites, setFavourites, addToFavourites, deleteFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
