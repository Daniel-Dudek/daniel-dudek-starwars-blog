import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
  deleteFavorite: (id, type) => {},
  addToFavorites: (id, name, type) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // const refreshFavourites = () => {
  //   getUserFavourites(userId).then((data) => {
  //     setFavorites(data);
  //   });
  // };

  const deleteFavorite = (id, type) => {
    setFavorites(
      favorites.filter((favorite) => {
        return !(favorite.id === id && favorite.type === type);
      }),
    );
  };

  const addToFavorites = (id, name, type) => {
    setFavorites([
      ...favorites,
      {
        id: id,
        name: name,
        type: type,
      },
    ]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, addToFavorites, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
