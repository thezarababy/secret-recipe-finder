import Footer from "../static/Footer";
import Navbar from "../static/Navbar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div>
      <Navbar
        showAuthButtons={true}
        onOpenSidebar={() => {}}
        hideMainNav={true} // safe empty function
      />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
