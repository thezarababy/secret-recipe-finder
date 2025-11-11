import bgFood2 from "../assets/bgFood2.jpg";
const SignUp = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full h-screen bg-orange-100 max-sm:grid-cols-1 max-sm:gap-4  pb-10 px-6">
      <section className="h-screen ">
        <img
          src={bgFood2}
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
      </section>
      <section className=" flex flex-col  gap-7 py-40 pl-40">
        <h1 className="text-5xl font-bold">Join Our Food Community</h1>
        <i className="-mt-4">Find your next favorite recipe!</i>
        <form action="" className=" flex flex-col gap-5">
          <div className="">
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="rounded-lg border-0 bg-gray-300 ml-2 px-3 py-2 w-full max-w-[600px]"
            />
          </div>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="rounded-lg border-0 bg-gray-300 ml-2 px-3 py-2 w-full max-w-[600px]"
            />
          </div>
          <div>
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
              className="rounded-lg border-0 bg-gray-300 ml-2 px-3 py-2  w-full max-w-[600px]"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 block  w-full max-w-[600px]"
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
