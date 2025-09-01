import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Category from "../pages/Category";
import RecipeDetails from "../pages/RecipeDetails";
import Favorites from "../pages/Favorites";
import SearchPage from "../pages/SearchPage";

const mainRoute = createBrowserRouter([
  {
    element: <HomeLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <Login />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/details/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/favorite",
        element: <Favorites />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

export default mainRoute;
