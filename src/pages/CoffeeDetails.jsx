import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px:4 md:px-8 lg:px-12 my-6">
        <button className="bg-[#331A15] btn text-white text-lg font-Rancho font-medium hover:bg-[#331A15]">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
      <div className="max-w-2xl mx-auto mt-12 flex items-center gap-24 p-12 bg-[#F4F3F0] rounded-md">
        <img src={photo} className="w-52" alt="" />
        <div className="space-y-2">
          <h2>
            <strong>Name: </strong>
            {name}
          </h2>
          <p>
            <strong>Quantity: </strong>
            {quantity}
          </p>
          <p>
            <strong>Supplier: </strong>
            {supplier}
          </p>
          <p>
            <strong>Taste: </strong>
            {taste}
          </p>
          <p>
            <strong>Category: </strong>
            {category}
          </p>
          <p>
            <strong>Details: </strong>
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
