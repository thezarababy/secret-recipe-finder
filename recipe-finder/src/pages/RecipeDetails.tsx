import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import type { mealsType } from "../interface/Interface";
import Instance from "../api/Instance";
import { ClimbingBoxLoader } from "react-spinners";
import { FaRegHeart } from "react-icons/fa6";
import { useFavorites } from "../context/FavoritesContext";
import type { RecipeCardProps } from "../interface/Interface";
import { toast, Toaster } from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const RecipeDetails: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<mealsType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  // use whichever is available: prop (from card) or fetched meal
  const current = (recipe as any) || meal;

  // local toggle state to control filled heart immediately
  const [isFavLocal, setIsFavLocal] = useState<boolean>(() =>
    Boolean(current?.idMeal && isFavorite(current.idMeal))
  );
  // sync local state when current or favorites change
  useEffect(() => {
    const idKey = current?.idMeal;
    if (idKey) setIsFavLocal(isFavorite(idKey));
  }, [current, isFavorite]);

  const handleFavorite = () => {
    if (!current?.idMeal) {
      toast.error("No recipe to add/remove");
      return;
    }

    const idKey = current.idMeal;

    if (isFavLocal || isFavorite(idKey)) {
      removeFromFavorites(idKey);
      setIsFavLocal(false);
      toast.error("Removed from favorites");
    } else {
      // pass the minimal recipe object expected by favorites store
      const favItem = {
        idMeal: current.idMeal,
        strMeal: current.strMeal,
        strMealThumb: current.strMealThumb,
      };
      addToFavorites(favItem);
      setIsFavLocal(true);
      toast.success("Added to favorites ❤️");
    }

    // hide toast after 3 secs
    setTimeout(() => toast.dismiss(), 5000);
  };

  const fetchRecipeDetails = async () => {
    setLoading(true);
    try {
      const res = await Instance.get(`/lookup.php?i=${id}`);
      setMeal(res.data.meals[0]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);

  return (
    <div className="mx-auto">
      <Toaster position="top-center" />
      {loading ? (
        <ClimbingBoxLoader className="flex justify-center items-center  " />
      ) : error ? (
        <p>Something went wrong. Please try again.</p>
      ) : (
        <div className="max-w-4xl mx-auto p-6" key={meal?.idMeal}>
          <h2 className="text-3xl font-bold mb-4 text-center">
            {meal?.strMeal}
          </h2>
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="w-full rounded-xl mb-6"
          />
          <section className="flex  justify-between">
            <div>
              <p className="mb-2">
                <strong>Category:</strong> {meal?.strCategory}
              </p>
              <p className="mb-2">
                <strong>Area:</strong> {meal?.strArea}
              </p>
              <p className="mb-4">
                <strong>Instructions:</strong>
              </p>
              <p className="whitespace-pre-line">{meal?.strInstructions}</p>
            </div>

            <div>
              <button
                onClick={handleFavorite}
                aria-pressed={isFavLocal}
                aria-label="toggle favorite"
                className="focus:outline-none"
              >
                {isFavLocal ? (
                  <FaHeart size={45} className="text-red-500" />
                ) : (
                  <FaRegHeart size={45} className="text-red-500" />
                )}
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
