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
        <div className="mt-20">
            <Products></Products>
        </div>
      </div>
    );
};

export default HomePage;