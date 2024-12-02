import Coffees from "../components/Coffees";
import FollowUs from "../components/FollowUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <div className="mt-20 px:4 md:px-8 lg:px-12">
        <Products></Products>
        <Coffees></Coffees>
      </div>
      <div className="mt-20 px:4 md:px-8 lg:px-12">
        <FollowUs></FollowUs>
      </div>
    </div>
  );
};

export default HomePage;
