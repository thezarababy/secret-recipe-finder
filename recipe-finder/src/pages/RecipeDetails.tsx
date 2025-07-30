import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import type { mealsType } from "../interface/Interface";
import Instance from "../api/Instance";
import { ClimbingBoxLoader } from "react-spinners";

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [meal, setMeal] = useState<mealsType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
    <div>
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
      )}
    </div>
  );
};

export default RecipeDetails;
