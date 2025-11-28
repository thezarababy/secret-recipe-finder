import Navbar from "../static/Navbar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div>
      <Navbar
        showAuthButtons={true}
        onOpenSidebar={() => {}} // safe empty function
      />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LandingLayout;
