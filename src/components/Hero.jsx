const Hero = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/qy4b36X/3.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content grid md:grid-cols-2">
        <div className="col-span-1"></div>
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl font-semibold font-Rancho text-white ">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5 text-gray-300">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] rounded-none text-2xl font-medium border-none font-Rancho hover:bg-[#f1b567]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
