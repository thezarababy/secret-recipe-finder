import { useState, useEffect } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<any>([]);

  // Load favorites from local storage (run once)
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    setFavorites(stored ? JSON.parse(stored) : []);
  }, []);

  // Save favorites to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add to favorites
  const addToFavorites = (recipe: any) => {
    setFavorites((prev: any) => {
      if (!prev.find((item: any) => item.idMeal === recipe.idMeal)) {
        return [...prev, recipe];
      }
      return prev;
    });
  };

  // Remove from favorites
  const removeFromFavorites = (recipe: any) => {
    setFavorites((prev: any) =>
      prev.filter((item: any) => item.idMeal !== recipe.idMeal)
    );
  };

  // Check if recipe is already in favorites
  const isFavorite = (idMeal: string) => {
    return favorites.some((item: any) => item.idMeal === idMeal);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
};

export default useFavorites;
