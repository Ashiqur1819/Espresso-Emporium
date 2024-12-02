import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";

const UpdateCoffee = ({}) => {
  const coffee = useLoaderData();
  const { _id } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px:4 md:px-8 lg:px-12 my-6">
        <button className="bg-[#331A15] btn text-white text-lg font-Rancho font-medium hover:bg-[#331A15]">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
      <div className="max-w-3xl mx-auto mt-6 bg-[#F4F3F0] p-12 rounded-md">
        <h2 className="text-center text-4xl font-bold text-[#331A15] font-Rancho">
          Update Existing Coffee Details
        </h2>
        <p className="text-center text-sm text-gray-600 mt-3">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          onSubmit={handleUpdateCoffee}
          className="grid grid-cols-2 items-center gap-3 mt-6"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text font-semibold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo"
              className="input input-bordered"
            />
          </div>
          <input
            className="mt-3 bg-[#331A15] btn text-white text-xl font-Rancho font-medium hover:bg-[#331A15] col-span-2"
            type="submit"
            value="Update Coffee Details"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
