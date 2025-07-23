import Logo from "../assets/Logo.png";
import { FcSearch } from "react-icons/fc";
import Button from "../component/reuseable/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-white  shadow-lg">
      <main className="flex justify-between items-center px-6 ">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-30 w-auto" />
        </Link>

        <div className="flex gap-5 items-center justify-center">
          <input
            type="search"
            placeholder="search recipes... "
            className=" border-2 border-orange-500 w-80 px-5 py-3 rounded-lg"
          />{" "}
          <FcSearch size={30} />
        </div>

        <div className="flex gap-8 ">
          <Link to="/signUp">
            <Button
              title="Create account"
              borderColor=" 2px solid #FE7B23"
              textColor="black"
            />
          </Link>

          <Link to="/logIn">
            <Button title="Log In" bgColor="#FE7B23" textColor="white" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
