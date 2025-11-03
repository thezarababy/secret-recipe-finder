import Logo from "../assets/Logo.png";
import Button from "../component/reuseable/Button";
const Login = () => {
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
      <section className=" w-full max-w-[500px]  px-7 flex flex-col gap-7">
        <div>
          <input
            type="text"
            placeholder="Email"
            className="  pl-2  py-3  w-full max-w-[500px]  rounded-lg border-0 bg-gray-300  max-sm:text-sm "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="pl-2  py-3  w-full max-w-[500px]  rounded-lg border-0  bg-gray-300 max-sm:text-sm"
          />
        </div>

        <Button title="Log In" bgColor="#FE7B23" textColor="white" />
        <a href="" className="underline inline-block max-sm:text-sm">
          Forgot password?
        </a>
      </section>
    </div>
  );
};

export default Login;
