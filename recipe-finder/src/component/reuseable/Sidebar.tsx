import { NavLink } from "react-router-dom";
import type { SidebarProps } from "../../interface/Interface";
import {
  MdOutlineClose,
  MdOutlineYoutubeSearchedFor,
  MdOutlineFolderShared,
} from "react-icons/md";
import { VscHeartFilled } from "react-icons/vsc";
import { FaUserPlus, FaHome } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-white z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`} // Hides sidebar completely on desktop
    >
      {/* Mobile Header */}

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-700"
      >
        <MdOutlineClose size={24} />
      </button>

      {/* Nav Links */}
      <nav className="flex flex-col gap-4 p-4">
        <NavLink
          to="/"
          onClick={onClose}
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/search"
          onClick={onClose}
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <MdOutlineYoutubeSearchedFor /> Search
        </NavLink>
        <NavLink
          to="/category"
          onClick={onClose}
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <MdOutlineFolderShared /> Category
        </NavLink>
        <NavLink
          to="/Favorite"
          onClick={onClose}
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <VscHeartFilled /> Favorites
        </NavLink>
        <NavLink
          to="/logIn"
          onClick={onClose}
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <IoIosLogIn /> Login
        </NavLink>
        <NavLink
          to="/signUp"
          onClick={onClose}
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <FaUserPlus /> Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
