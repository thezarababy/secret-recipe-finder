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

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, collapsed }) => {
  return (
    <div
      className={` md:block md:static top-0 left-0 h-full   bg-white shadow-lg z-50  
      transition-all duration-300 
      ${collapsed ? "w-20" : "w-64"}
      ${
        isOpen
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0 hidden md:block"
      }`}
    >
      {/* Mobile Header */}
      <div className="flex justify-between items-center p-4 border-b   w-full md:hidden">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      {/* Nav Links */}
      <nav className="flex flex-col gap-4 p-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <FaHome /> {!collapsed && "Home"}
        </NavLink>
        <NavLink
          to="/search"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <MdOutlineYoutubeSearchedFor /> {!collapsed && "Search"}
        </NavLink>
        <NavLink
          to="/category"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <MdOutlineFolderShared /> {!collapsed && "Category"}
        </NavLink>
        <NavLink
          to="/Favorite"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <VscHeartFilled /> {!collapsed && "Favorite"}
        </NavLink>
        <NavLink
          to="/logIn"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <IoIosLogIn /> {!collapsed && "Login"}
        </NavLink>
        <NavLink
          to="/signUp"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          {" "}
          <FaUserPlus /> {!collapsed && "Sign Up"}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
