import chickenStirFry from "../assets/chickenStirFry.mp4";

const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ----- Background Video ----- */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={chickenStirFry}
        autoPlay
        loop
        muted
      />

      {/* ----- Dark Overlay for Visibility ----- */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* ----- Center Text ----- */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-3">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Delicious Recipes You Can Trust
        </h1>

        <p className="text-white text-lg md:text-2xl max-w-xl">
          Discover amazing meals, curated for your taste.
        </p>
      </div>
    </div>
  );
};

export default Landing;
