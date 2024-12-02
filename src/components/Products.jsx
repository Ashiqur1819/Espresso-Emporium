import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-lg text-[#1B1A1A]">--- Sip & Savor ---</p>
        <h2 className="text-5xl font-medium text-[#331A15] font-Rancho">
          Our Popular Products
        </h2>
        <button className="mt-6 bg-[#331A15] btn text-white text-xl font-Rancho font-medium hover:bg-[#331A15]">
          <Link to="/addCoffee">Add Coffee</Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
