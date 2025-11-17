import { useFavorites } from "../context/FavoritesContext";
import FavoriteCard from "../component/reuseable/FavoriteCard";
import { FaHeart } from "react-icons/fa";
const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="mx auto py-6 px-4">
      <div className="flex gap-2 mx-auto  justify-center items-center ">
        <h1 className="text-2xl font-bold mb-4">Your Favs </h1>
        <span>
          <FaHeart size={25} color="red" />
        </span>
      </div>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite recipes yet ❤️</p>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {favorites.map((recipe: any) => (
            <FavoriteCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
