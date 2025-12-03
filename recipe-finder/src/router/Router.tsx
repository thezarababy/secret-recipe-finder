import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "../Layout/LandingLayout";
import HomeLayout from "../Layout/HomeLayout";

import Landing from "../pages/Landing";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Category from "../pages/Category";
import RecipeDetails from "../pages/RecipeDetails";
import Favorites from "../pages/Favorites";
import SearchPage from "../pages/SearchPage";
import AuthLayout from "../Layout/AuthLayout";

const mainRoute = createBrowserRouter([
  // 👉 PUBLIC LANDING LAYOUT
  {
    element: <LandingLayout />,
    children: [
      {
        path: "/", // Landing page
        element: <Landing />,
      },
    ],
  },

  // Auth layout
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <Login />,
      },
    ],
  },

  // 👉 MAIN APP LAYOUT
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/home", // Actual dashboard/home after login
        element: <Home />,
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
