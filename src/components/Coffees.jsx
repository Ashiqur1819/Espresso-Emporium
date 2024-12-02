import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Coffees = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      {coffees.map((coffee) => (
        <CoffeeCard
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          key={coffee._id}
        ></CoffeeCard>
      ))}
    </div>
  );
};

export default Coffees;
