import Logo from "../assets/Logo.png";
import Button from "../component/reuseable/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Searchbar from "../component/Searchbar"; // ensure filename exact casing

const Navbar = () => {
  const navigate = useNavigate();

  const handleSearchFromNavbar = (q: string) => {
    if (!q.trim()) return;
    navigate(`/search?query=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className="max-w-[1280px] mx-auto bg-white shadow-lg">
      <main className="flex justify-between items-center px-6 py-3">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="h-14 w-auto" />
        </NavLink>

        <div className="flex-1 mx-6">
          {/* pass onSearch so Searchbar calls back to the navbar handler */}
          <Searchbar onSearch={handleSearchFromNavbar} />
        </div>

        <div className="flex gap-4">
          <NavLink to="/signUp">
            <Button
              title="Create account"
              borderColor="2px solid #FE7B23"
              textColor="black"
            />
          </NavLink>
          <NavLink to="/logIn">
            <Button title="Log In" bgColor="#FE7B23" textColor="white" />
          </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
