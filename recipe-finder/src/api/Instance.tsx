import axios from "axios";

const Instance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1", // no trailing slash
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export default Instance;
