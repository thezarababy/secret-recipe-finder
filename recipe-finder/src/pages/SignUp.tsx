import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgFood2 from "../assets/bgFood2.jpg";
import AuthInstance from "../api/AuthInstance";
import toast from "react-hot-toast";
const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    FullName: "",
    Email: "",
    Password: "",
  });
  const handleFormChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await AuthInstance.post("/users/signup", form);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Error creating account. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 text-center lg:grid-cols-2 gap-12 w-full h-screen bg-white    ">
      <section className=" hidden h-screen lg:block   ">
        <img
          src={bgFood2}
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
      </section>
      <section className=" flex flex-col px-5 gap-7 py-40  ">
        <h1 className="  text-3xl lg:text-5xl font-bold">
          Join Our Food Community
        </h1>
        <i className="-mt-4">Find your next favorite recipe!</i>
        <form onSubmit={handleFormSubmit} className=" flex flex-col gap-5">
          <div className="">
            <input
              onChange={handleFormChange}
              type="text"
              id="FullName"
              placeholder="Enter your full name"
              className="rounded-lg border-0 bg-gray-300  px-3 py-2 w-full max-w-[600px]"
            />
          </div>
          <div>
            <input
              onChange={handleFormChange}
              type="text"
              id="Email"
              placeholder="Enter your email"
              className="rounded-lg border-0 bg-gray-300  px-3 py-2 w-full max-w-[600px]"
            />
          </div>
          <div>
            <input
              onChange={handleFormChange}
              type="password"
              id="Password"
              placeholder="Enter your password"
              className="rounded-lg border-0 bg-gray-300  px-3 py-2  w-full max-w-[600px]"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 w-full max-w-[600px]  md:mx-auto md:block"
          >
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline  ">
            Log in
          </a>
        </p>
      </section>
    </div>
  );
};

export default SignUp;
