import { useEffect, useState } from "react";

import { ClimbingBoxLoader } from "react-spinners";
// Make sure the following is exported in Interface.ts:
// export type items = { ... } or export interface items { ... }
import type { mealsType } from "../interface/Interface";
import Instance from "../api/Instance";

const Home = () => {
  const [meal, setMeal] = useState<mealsType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);

  const fetchMeal = async () => {
    setLoading(true);
    try {
      const res = await Instance.get("/search.php?s");
      console.log(meal);
      setMeal(res.data.meals);
      setLoading(false);
    } catch {
      // setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">
        Discover Delicious Recipes Instantly{" "}
      </h1>

      {loading ? (
        <ClimbingBoxLoader />
      ) : (
        <section className=" flex flex-wrap justify-center gap-6 ">
          {meal?.map((items: mealsType) => (
            <main
              key={items.idMeal}
              className="w-60 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-2xl "
            >
              <img src={items.strMealThumb} alt="" className=" rounded-t-2xl" />

              <div className="pl-4  font-semibold">
                <p>{items.strMeal}</p>
                <p> Category: {items.strCategory}</p>
                <p>Country: {items.strArea}</p>
              </div>
            </main>
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
