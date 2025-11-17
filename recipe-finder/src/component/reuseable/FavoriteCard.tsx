import { useEffect, useState } from "react";
import Instance from "../../api/Instance";

const FavoriteCard = ({ recipe }: any) => {
  const [details, setDetails] = useState<any>(null);

  const fetchDetails = async () => {
    try {
      const res = await Instance.get(`/lookup.php?i=${recipe.idMeal}`);
      setDetails(res.data.meals[0]);
    } catch (error) {
      console.log("Error fetching favorite details:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="rounded-xl shadow-md p-4 bg-white">
      <img
        src={details.strMealThumb}
        alt={details.strMeal}
        className="rounded-xl mb-3"
      />

      <h2 className="text-lg font-bold">{details.strMeal}</h2>

      <p className="text-sm text-gray-600">
        <strong>Category:</strong> {details.strCategory}
      </p>

      <p className="text-sm text-gray-600 mb-2">
        <strong>Area:</strong> {details.strArea}
      </p>

      <p className="text-sm line-clamp-3 text-gray-700">
        {details.strInstructions}
      </p>
    </div>
  );
};

export default FavoriteCard;
