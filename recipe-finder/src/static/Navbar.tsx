import Logo from "../assets/Logo.png";
import Button from "../component/reuseable/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Searchbar from "../component/Searchbar";
import { CgMenuOreos } from "react-icons/cg";
import type { NavbarProps } from "../interface/Interface";

const Navbar: React.FC<NavbarProps> = ({ onOpenSidebar }) => {
  const navigate = useNavigate();

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
        <div className="  md:block">
          <Searchbar onSearch={handleSearchFromNavbar} />
        </div>

        {/* Right section */}
        <div className="flex   items-center gap-6 ">
          <div className="hidden md:flex gap-4 items-center ">
            <NavLink to="/favorite">
              <a
                title="Favorites"
                className="font-semibold hover:underline hover:cursor-pointer"
              >
                Favorites
              </a>
            </NavLink>

            <NavLink to="/category">
              <a
                title="Category"
                className="font-semibold  hover:underline hover:cursor-pointer"
              >
                Category
              </a>
            </NavLink>
            <NavLink to="/signUp">
              <Button
                title="Create account"
                borderColor=" 2px solid #FE7B23"
                textColor="black"
              />
            </NavLink>

            <NavLink to="/logIn">
              <Button title="Log In" bgColor="#FE7B23" textColor="white" />
            </NavLink>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <CgMenuOreos size={30} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Navbar;

// import { useState } from "react";
// import Logo from "../assets/Logo.png";
// import Button from "../component/reuseable/Button";
// import { NavLink, useNavigate } from "react-router-dom";
// import Searchbar from "../component/Searchbar";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSearchFromNavbar = (q: string) => {
//     if (!q.trim()) return;
//     navigate(`/search?query=${encodeURIComponent(q.trim())}`);
//   };

//   return (
//     <div className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">
//       <main className="flex justify-between items-center px-4 md:px-6 py-3 max-w-[1280px] mx-auto">
//         {/* Logo */}
//         <NavLink to="/" className="flex items-center">
//           <img src={Logo} alt="logo" className="h-12 w-auto" />
//         </NavLink>

//         {/* Desktop Search */}
//         <div className="hidden md:flex flex-1 mx-6">
//           <Searchbar onSearch={handleSearchFromNavbar} />
//         </div>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex gap-4">
//           <NavLink to="/signUp">
//             <Button
//               title="Create account"
//               borderColor="2px solid #FE7B23"
//               textColor="black"
//             />
//           </NavLink>
//           <NavLink to="/logIn">
//             <Button title="Log In" bgColor="#FE7B23" textColor="white" />
//           </NavLink>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </main>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 shadow-lg">
//           <div className="my-4">
//             <Searchbar onSearch={handleSearchFromNavbar} />
//           </div>
//           <div className="flex flex-col gap-3">
//             <NavLink to="/signUp" onClick={() => setIsOpen(false)}>
//               <Button
//                 title="Create account"
//                 borderColor="2px solid #FE7B23"
//                 textColor="black"
//               />
//             </NavLink>
//             <NavLink to="/logIn" onClick={() => setIsOpen(false)}>
//               <Button title="Log In" bgColor="#FE7B23" textColor="white" />
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
