import React from "react";
import Logo from "../assets/Logo.png";
import Button from "../component/reuseable/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Searchbar from "../component/Searchbar";
import { CgMenuOreos } from "react-icons/cg";
import type { NavbarProps } from "../interface/Interface";
import { useEffect, useState } from "react";
import Instance, { CATEGORIES_URL } from "../api/Instance";
import { FiFilter } from "react-icons/fi";

const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar, showAuthButtons }) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState(false);

  // Fetch categories
  const getAllCategories = async () => {
    try {
      const res = await Instance.get(CATEGORIES_URL);
      const categoryNames = res.data.meals.map((c: any) => c.strCategory);
      setCategories(categoryNames);
    } catch (error) {
      console.log("error fetching categories");
    }
  };

  useEffect(() => {
    if (!showAuthButtons) getAllCategories(); // Only fetch categories on main site
  }, [showAuthButtons]);

  // Navigation for selecting categories
  const handleCategorySelect = (cat: string) => {
    navigate(`/category?name=${encodeURIComponent(cat)}`);
    setOpenCategory(false);
  };

  const handleSearchFromNavbar = (q: string) => {
    if (!q.trim()) return;
    navigate(`/search?query=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className="w-full sticky top-0  bg-white  pr-3">
      <main className=" max-w-[1200px] mx-auto  flex justify-between items-center  py-3">
        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" className="w-20" />
        </div>

        {/* Searchbar → HIDDEN on landing page */}
        {!showAuthButtons && (
          <div className="md:block">
            <Searchbar onSearch={handleSearchFromNavbar} />
          </div>
        )}

        <div className="flex items-center gap-6">
          {/* Right section desktop → Hidden on landing page */}
          {!showAuthButtons && (
            <div className="hidden md:flex gap-4 items-center">
              <NavLink to="/favorite">
                <p className="font-semibold hover:underline cursor-pointer">
                  Favorites
                </p>
              </NavLink>

              {/* Category dropdown */}
              <div className="relative">
                <button
                  type="button"
                  className="font-semibold cursor-pointer flex items-center gap-1"
                  onClick={() => setOpenCategory((prev) => !prev)}
                >
                  <FiFilter size={18} />
                  Category
                </button>

                {openCategory && (
                  <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-md py-2 w-44 z-50 border border-gray-200">
                    {categories.length === 0 ? (
                      <p className="px-3 py-2 text-gray-500 text-sm">
                        Loading...
                      </p>
                    ) : (
                      categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategorySelect(cat)}
                          className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                        >
                          {cat}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Auth Buttons → ONLY shown on landing page */}
          {showAuthButtons && (
            <div className="hidden md:flex gap-4 items-center">
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
          )}

          {/* Mobile Auth buttons */}
          {showAuthButtons && (
            <div className="md:hidden flex ">
              <NavLink
                to="/signUp"
                className="font-semibold hover: text-orange-400"
              >
                <Button title="Create account" textColor="black" />
              </NavLink>
              <NavLink
                to="/logIn"
                className="font-semibold hover: text-orange-400"
              >
                <Button title="Log In" textColor="black" />
              </NavLink>
            </div>
          )}

          {/* Mobile sidebar toggle → Hidden on landing page */}
          {!showAuthButtons && (
            <button className="md:hidden" onClick={onOpenSidebar}>
              <CgMenuOreos size={30} />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
