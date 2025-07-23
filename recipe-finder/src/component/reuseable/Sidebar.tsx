import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-yellow">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/category">Category </NavLink>
      <NavLink to="/Favorite"> Favorite</NavLink>
      <NavLink to="/logIn">Login</NavLink>
    </div>
  );
};

export default Sidebar;
