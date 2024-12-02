import { CiEdit } from "react-icons/ci";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDeleteCoffee = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== _id
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center justify-between gap-6 bg-[#F5F4F1] p-6 h-[200px] rounded-md">
      <div className="w-32">
        <img src={photo} className="w-24" alt="" />
      </div>
      <div className="space-y-2">
        <h3>
          <strong>Name: </strong>
          {name}
        </h3>
        <p>
          <strong>Supplier: </strong>
          {supplier}
        </p>
        <p>
          <strong>Taste: </strong>
          {taste}
        </p>
      </div>
      <div className="flex items-center flex-col gap-3 justify-center">
        <button className="bg-orange-300 text-white p-3 text-lg rounded-md">
          <Link to={`/coffeeDetails/${_id}`}>
            <FaEye />
          </Link>
        </button>
        <button className="bg-gray-800 text-white p-3 text-lg rounded-md">
          <Link to={`/updateCoffee/${_id}`}>
            <CiEdit />
          </Link>
        </button>
        <button
          onClick={() => handleDeleteCoffee(_id)}
          className="bg-red-700 text-white p-3 text-lg rounded-md"
        >
          <Link>
            <FaTrash />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
