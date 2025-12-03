import { useState } from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Button from "../component/reuseable/Button";
import AuthInstance from "../api/AuthInstance";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, hidePassword] = useState(false);
  const togglePasswordVisibility = () => {
    hidePassword(!showPassword);
  };
  const [login, setLogin] = useState({
    Email: "",
    Password: "",
  });
  const handleLoginChange = (e: any) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };
  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await AuthInstance.post("/users/login", login);
      toast.success("Logged in successfully!");

      navigate("/home");
    } catch (error) {
      toast.error("Error logging in. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="w-full  pb-10 ">
      <nav className="w-full ">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 ml-6 mt-6 max-sm:w-10 max-sm:mt-2"
        />
        <hr className=" mx-6 my-3  border-t border-gray-300 " />
      </nav>
      <h1 className="font-bold text-4xl text-center my-8 max-sm:text-2xl max-sm:font-semibold ">
        Welcome back
      </h1>
      <form
        onSubmit={handleLoginSubmit}
        className=" w-full max-w-[500px]  mx-auto px-7 flex flex-col  gap-7"
      >
        <div>
          <input
            onChange={handleLoginChange}
            id="Email"
            type="text"
            placeholder="Email"
            className="  pl-2  py-3  w-full max-w-[500px]  rounded-lg border-0 bg-gray-300  max-sm:text-sm "
          />
        </div>
        <div className="relative">
          <input
            onChange={handleLoginChange}
            id="Password"
            type="text"
            placeholder="Password"
            className="pl-2  py-3  w-full max-w-[500px]  rounded-lg border-0  bg-gray-300 max-sm:text-sm"
          />
          <span
            onClick={togglePasswordVisibility}
            className="cursor-pointer absolute top-2 right-3"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        </div>

        <Button title="Log In" bgColor="#FE7B23" textColor="white" />
        <a href="" className="underline inline-block max-sm:text-sm">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default Login;
