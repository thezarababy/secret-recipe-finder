// import Navbar from "../static/Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../static/Footer";
// import Sidebar from "../component/reuseable/Sidebar";
// import { useState } from "react";

// const HomeLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile
//   const [collapsed, setCollapsed] = useState(false); // for desktop collapse
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="sticky top-0 h-screen">
//         <Sidebar
//           isOpen={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//           collapsed={collapsed}
//         />
//       </div>

//       {/* Main content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar at the top */}
//         <Navbar
//           onOpenSidebar={() => setSidebarOpen(true)}
//           collapsed={collapsed}
//           setCollapsed={setCollapsed}
//         />

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto p-4">
//           <Outlet />
//         </main>
//         {/* Footer at the bottom */}

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default HomeLayout;

import Navbar from "../static/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../static/Footer";
import Sidebar from "../component/reuseable/Sidebar";
import { useState } from "react";

const HomeLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className=" ">
      {/* Main content */}
      <div className="">
        {/* Navbar */}
        <Navbar
          onOpenSidebar={() => setSidebarOpen(true)}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* Page Content (fills space & pushes footer down) */}
        <main className=" flex w-full">
          <div>
            {/* Sidebar - full height of layout, not fixed */}
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              collapsed={collapsed}
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
