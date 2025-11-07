import signup from "../assets/signup.mp4";
const SignUp = () => {
  return (
    <div className="flex  items-center w-full gap-10 mx-auto">
      <section className="max-w-[800px]">
        <video
          controls
          className=" rounded-lg shadow-sm"
          poster="../assets/signup-poster.jpg" // optional poster image
        >
          <source src={signup} type="video/mp4" />
        </video>
      </section>
      <section>
        <h1>Join Our Food Community</h1>
        <p>Find your next favorite recipe</p>
        <main>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Enter your full name"
            />
          </div>
        </main>
      </section>
    </div>
  );
};

export default SignUp;
