import Logo from "../assets/Logo.png";
import Button from "../component/reuseable/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Searchbar from "../component/Searchbar";
import { CgMenuOreos } from "react-icons/cg";
import type { NavbarProps } from "../interface/Interface";
import { useEffect, useState } from "react";
import Instance, { CATEGORIES_URL } from "../api/Instance";
import { FiFilter } from "react-icons/fi";

const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar }) => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState(false);

  // Fetch all categories
  const getAllCategories = async () => {
    try {
      const res = await Instance.get(CATEGORIES_URL);
      const categoryNames = res.data.meals.map((c: any) => c.strCategory);
      setCategories(categoryNames);
    } catch (error) {
      console.log("error fetching categories");
    }
  };

  //  Fetch categories on first render
  useEffect(() => {
    getAllCategories();
  }, []);

  //  When a user selects a category
  const handleCategorySelect = (cat: string) => {
    navigate(`/category?name=${encodeURIComponent(cat)}`);
    setOpenCategory(false);
  };

  //  Search handler
  const handleSearchFromNavbar = (q: string) => {
    if (!q.trim()) return;
    navigate(`/search?query=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className="w-full bg-white shadow-lg pr-3">
      <main className="flex justify-between items-center  py-3">
        {/* logo */}
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" className="w-20" />
          </NavLink>
        </div>

        {/* searchbar */}
        <div className="md:block">
          <Searchbar onSearch={handleSearchFromNavbar} />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4 items-center">
            {/* Favorites */}
            <NavLink to="/favorite">
              <p className="font-semibold hover:underline cursor-pointer">
                Favorites
              </p>
            </NavLink>

            {/* Category Dropdown */}
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

            {/* Auth Buttons */}
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

          {/* Mobile sidebar toggle */}
          <button className="md:hidden" onClick={onOpenSidebar}>
            <CgMenuOreos size={30} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
