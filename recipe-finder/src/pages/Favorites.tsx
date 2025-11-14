import useFavorites from "../hooks/useFavorites";
import RecipeDetails from "./RecipeDetails";
const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite recipes yet ❤️</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((recipe: any) => (
            <RecipeDetails key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
