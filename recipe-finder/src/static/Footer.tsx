// import { Link } from "react-router-dom";
// import { FcSearch } from "react-icons/fc";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaTwitterSquare,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="max-w-[1280] bg-orange-500 h-[70vh]  px-10 pt-6 mb-0">
//       <div className="flex justify-between items-center">
//         <div className="flex items-center justify-center gap-4 hover:transition-all hover:translate-1.5">
//           <h1 className="text-4xl bg-white px-6 py-5 rounded-lg font-bold ">
//             Recipe Finder
//           </h1>
//           <FcSearch size={50} />
//         </div>
//         <div className="flex flex-col gap-6 hover:cursor-pointer ">
//           <Link
//             to="/"
//             className="text-white text-2xl font-medium hover:text-3xl"
//           >
//             Home
//           </Link>
//           <Link
//             to="/category"
//             className="text-white text-2xl font-medium hover:text-3xl"
//           >
//             Category
//           </Link>
//           <Link
//             to="/favorite"
//             className="text-white text-2xl font-medium hover:text-3xl"
//           >
//             Favorite
//           </Link>
//           <Link
//             to="/signUp"
//             className="text-white text-2xl font-medium hover:text-3xl"
//           >
//             Sign Up
//           </Link>
//         </div>

//         <div>
//           <h1 className="text-2xl  font-extrabold mb-5">follow us</h1>
//           <div className="flex gap-6">
//             <FaFacebookSquare
//               size={40}
//               color="white "
//               className="hover:transition-all hover:translate-1.5"
//             />
//             <FaInstagramSquare
//               size={40}
//               color="white"
//               className="hover:transition-all hover:translate-1.5"
//             />
//             <FaTwitterSquare
//               size={40}
//               color="white"
//               className="hover:transition-all hover:translate-1.5"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white mt-6 flex  justify-between pt-7">
//         <div>
//           <p className="text-white ">
//             © 2025 Recipe Finder,All Rights Reserved
//           </p>
//         </div>

//         <div className="flex text-white  gap-4 underline hover:cursor-pointer">
//           <p>Privacy policy</p>
//           <p>Terms & conditions</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 px-10 pt-6 pb-4">
      {/* Top section */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl bg-white px-4 py-2 rounded-lg font-bold">
            Recipe Finder
          </h1>
          <FcSearch size={40} />
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:underline"
          >
            Home
          </Link>
          <Link
            to="/category"
            className="text-white text-lg font-medium hover:underline"
          >
            Category
          </Link>
          <Link
            to="/favorite"
            className="text-white text-lg font-medium hover:underline"
          >
            Favorite
          </Link>
          <Link
            to="/signUp"
            className="text-white text-lg font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>

        {/* Socials */}
        <div className="text-center">
          <h1 className="text-lg font-bold text-white mb-3">Follow us</h1>
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
