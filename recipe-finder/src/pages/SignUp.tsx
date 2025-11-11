import bgFood1 from "../assets/bgFood1.jpg";
const SignUp = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full max-sm:grid-cols-1 max-sm:gap-4  pb-10 px-6">
      <section className="h-screen ">
        <img
          src={bgFood1}
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="flex flex-col items-center py-40 gap-8">
        <h1 className="text-5xl font-bold">Join Our Food Community</h1>
        <i className="-mt-4">Find your next favorite recipe!</i>
        <form action="" className=" flex flex-col gap-5">
          <div className="">
            <label htmlFor="fullName">Full Name : </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              className="rounded-lg border-0 bg-gray-300 ml-2 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="rounded-lg border-0 bg-gray-300 ml-2 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <input
              type="text"
              id="password"
              placeholder="Enter your full name"
              className="rounded-lg border-0 bg-gray-300 ml-2 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Create Account
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
