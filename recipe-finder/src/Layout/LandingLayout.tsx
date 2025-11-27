import Navbar from "../static/Navbar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div>
      <Navbar showAuthButtons={true} /> {/* show login/signup */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LandingLayout;
