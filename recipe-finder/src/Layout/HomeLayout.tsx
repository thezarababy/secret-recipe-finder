import Navbar from "../static/Navbar";
import Sidebar from "../component/reuseable/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
