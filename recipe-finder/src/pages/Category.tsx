import { useEffect, useState } from "react";
import Instance, { CATEGORIES_URL } from "../api/Instance";

const Category = () => {
  const [category, setCategory] = useState<any>([]);

  const filterByCategory = async () => {
    try {
      const res = await Instance.get(CATEGORIES_URL);
      setCategory(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    filterByCategory();
  }, []);

  return <div>Category</div>;
};

export default Category;
