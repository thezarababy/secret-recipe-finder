import axios from "axios";

const Instance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1", // no trailing slash
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export const CATEGORIES_PATH = "/categories.php";
export const CATEGORIES_URL = `${Instance.defaults.baseURL}${CATEGORIES_PATH}`;

export const FILTER_BY_CATEGORY_PATH = "/filter.php?c=";
export const filterByCategoryUrl = (category: string) =>
  `${Instance.defaults.baseURL}${FILTER_BY_CATEGORY_PATH}${encodeURIComponent(
    category
  )}`;

export default Instance;
