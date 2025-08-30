
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Instance from "../api/Instance";
import type { mealsType } from "../interface/Interface";
import { ClimbingBoxLoader } from "react-spinners";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("query") || "").trim();

  const [result, setResult] = useState<mealsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSearch = async (q: string) => {
      setLoading(true);
      setError(false);
      try {
        // use encodeURIComponent to be safe (though query is already in URL)
        const res = await Instance.get(
          `/search.php?s=${encodeURIComponent(q)}`
        );
        setResult(res.data?.meals || []);
      } catch (err) {
        setError(true);
        setResult([]);
      } finally {
        setLoading(false);
      }
    };

    if (!query) {
      setResult([]); // clear previous results when no query
      return;
    }

    fetchSearch(query);
  }, [query]);

  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Search Results{query ? ` for "${query}"` : ""}
      </h1>

      {loading && (
        <div className="flex justify-center mt-6">
          <ClimbingBoxLoader color="#FE7B23" />
        </div>
      )}

      {error && (
        <p className="text-center text-red-500 mt-4">An error occurred.</p>
      )}

      {!loading && !error && query && result.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No recipes found.</p>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {result.map((items) => (
          <Link
            key={items.idMeal}
            to={`/details/${items.idMeal}`}
            className="block w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden"
          >
            <img
              src={items.strMealThumb}
              alt={items.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 font-semibold">
              <p className="text-lg">{items.strMeal}</p>
              <p className="text-sm">Category: {items.strCategory}</p>
              <p className="text-sm">Country: {items.strArea}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default SearchPage;
