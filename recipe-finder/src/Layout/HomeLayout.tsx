import Navbar from "../static/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";
import Sidebar from "../component/reuseable/Sidebar";
import { useState } from "react";

const HomeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" ">
      {/* Main content */}
      <div className="">
        {/* Navbar */}
        <Navbar onOpenSidebar={() => setSidebarOpen(true)} collapsed={false} />

        {/* Page Content (fills space & pushes footer down) */}
        <main className=" flex w-full">
          <div>
            {/* Sidebar - full height of layout, not fixed */}
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
          <Outlet />
        </main>

        {/* Footer stays at bottom and scrolls normally */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
