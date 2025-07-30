import { useEffect, useState } from "react";

import { ClimbingBoxLoader } from "react-spinners";
// Make sure the following is exported in Interface.ts:
// export type items = { ... } or export interface items { ... }
import type { mealsType } from "../interface/Interface";
import Instance from "../api/Instance";
import { Link } from "react-router-dom";

const Home = () => {
  const [meal, setMeal] = useState<mealsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchMeal = async (count: number) => {
    setLoading(true);
    try {
      const mealPromises = Array.from({ length: count }, () =>
        Instance.get("/random.php")
      );
      const res = await Promise.all(mealPromises);
      const mealArray = res.map((response) => response.data.meals[0]);

      setMeal(mealArray);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal(8);
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">
        Discover Delicious Recipes Instantly{" "}
      </h1>
      {error && (
        <p className="text-red-500 text-center font-medium">
          Oops! Something went wrong. Please try again.
        </p>
      )}

      {loading ? (
        <ClimbingBoxLoader className="flex justify-center items-center" />
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {meal?.map((items: mealsType) => (
            <Link to={`/recipeDetails/${items.idMeal}`} key={items.idMeal}>
              <main
                key={items.idMeal}
                className="w-60 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-2xl "
              >
                <img
                  src={items.strMealThumb}
                  alt=""
                  className=" rounded-t-2xl"
                />

                <div className="pl-4  font-semibold">
                  <p>{items.strMeal}</p>
                  <p> Category: {items.strCategory}</p>
                  <p>Country: {items.strArea}</p>
                </div>
              </main>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
