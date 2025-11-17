import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext<any>(null);

export const FavoritesProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  // load from localStorage once

  useEffect(() => {
    const stored = localStorage.getItem("favorites");

    if (stored) {
      console.log("📦 Loaded from localStorage:", JSON.parse(stored));
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipe: any) => {
    setFavorites((prev: any) => {
      if (!prev.find((item: any) => item.idMeal === recipe.idMeal)) {
        return [...prev, recipe];
      }
      return prev;
    });
  };

  const removeFromFavorites = (idMeal: string) => {
    setFavorites((prev: any) =>
      prev.filter((item: any) => item.idMeal !== idMeal)
    );
  };

  const isFavorite = (idMeal: string) => {
    return favorites.some((item) => item.idMeal === idMeal);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
