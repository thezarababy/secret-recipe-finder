import { useEffect, useState } from "react";
import RecipeCard from "../component/reuseable/RecipeCard";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
interface mealsType {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const Home = () => {
  const [meal, setMeal] = useState<mealsType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchMeal = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      setMeal(res.data.meals);
      setLoading(false);

      console.log(res.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div>
      <h1>Browse your Fvourite meals </h1>

      {loading ? (
        <ClimbingBoxLoader />
      ) : (
        <section>
          {meal?.map((items) => (
            <RecipeCard key={items.idMeal} items={items} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
