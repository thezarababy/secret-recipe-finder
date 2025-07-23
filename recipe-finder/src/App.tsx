import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Category from "./pages/Category";
import HomeLayout from "./Layout/HomeLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/logIn" element={<Login />} />
        </Route>

        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
