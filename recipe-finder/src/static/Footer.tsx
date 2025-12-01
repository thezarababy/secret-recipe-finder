import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 px-10 pt-6 pb-4  max-w-[1200px] mx-auto">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl bg-white px-4 py-2 rounded-lg font-bold max-sm:text-lg max-sm:font-semibold sm:px-1.5">
            Recipe Finder
          </h1>
          <FcSearch size={40} className="sm: size-8" />
        </div>

        {/* Links */}
        <div className="flex flex-row  gap-3 text-center  hover:cursor-pointer max-sm:gap-2  ">
          <Link to="/" className="text-white text-lg  hover:underline">
            Home
          </Link>
          <Link to="/category" className="text-white text-lg  hover:underline">
            Category
          </Link>
          <Link to="/favorite" className="text-white text-lg  hover:underline">
            Favorite
          </Link>
          <Link to="/signUp" className="text-white text-lg  hover:underline">
            Sign Up
          </Link>
        </div>

        {/* Socials */}
        <div className="text-center flex">
          <h1 className="text-lg font-bold text-white mb-3 mr-2">Follow us </h1>
          <div className="flex justify-center md:justify-start gap-4">
            <FaFacebookSquare
              size={30}
              color="white"
              className="hover:scale-110 transition-transform"
            />
            <FaInstagramSquare
              size={30}
              color="white"
              className="hover:scale-110 transition-transform"
            />
            <FaTwitterSquare
              size={30}
              color="white"
              className="hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white mt-6 flex flex-col md:flex-row items-center justify-between pt-4 text-white text-sm">
        <p>© {new Date().getFullYear()} Recipe Finder, All Rights Reserved</p>
        <div className="flex gap-4 underline">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
