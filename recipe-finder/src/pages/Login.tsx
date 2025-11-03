import Logo from "../assets/logo.png";
import Button from "../component/reuseable/Button";
const Login = () => {
  return (
    <div className="w-full pb-10 ">
      <nav className="w-full">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 ml-6 mt-6 max-sm:w-10 max-sm:mt-2"
        />
        <hr className=" mx-6 my-3  border-t border-gray-300 " />
      </nav>
      <h1 className="font-bold text-4xl text-center mt-8 max-sm:text-2xl max-sm:font-semibold ">
        Welcome back
      </h1>
      <section className="w-[500px] m-auto  max-sm:ml-7">
        <div>
          <input
            type="text"
            placeholder="Email"
            className="  pl-2  py-3 w-[500px]  rounded-lg border-0 my-7 bg-gray-300 max-sm:w-auto max-sm:text-sm "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="pl-2  py-3 w-[500px]  rounded-lg border-0  bg-gray-300 max-sm:w-auto max-sm:text-sm"
          />
        </div>

        <a href="" className="underline inline-block my-4 max-sm:text-sm">
          Forgot password?
        </a>
        <Button title="Log In" bgColor="#FE7B23" textColor="white" />
      </section>
    </div>
  );
};

export default Login;
