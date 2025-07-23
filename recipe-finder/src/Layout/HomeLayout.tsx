import Navbar from "../static/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
