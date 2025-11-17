import { RouterProvider } from "react-router-dom";
import mainRoute from "./router/Router";
import { FavoritesProvider } from "./context/FavoritesContext";

const App = () => {
  return (
    <FavoritesProvider>
      <RouterProvider router={mainRoute} />
    </FavoritesProvider>
  );
};

export default App;
