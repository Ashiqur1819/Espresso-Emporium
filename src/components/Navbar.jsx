import { NavLink } from "react-router-dom";
import logo from "../assets/more/logo1.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, setUser, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        setUser(result);
      })
      .catch((errror) => {
        alert(errror);
      });
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 bg-[#362626]">
      <div className="flex items-center justify-center gap-2 bg-[#362626] py-3">
        <img src={logo} className="w-16" alt="" />
        <h2 className="font-Rancho text-3xl text-white font-medium">
          Espresso Emporium
        </h2>
        <ul className="flex items-center gap-6 text-white ml-12">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/updateProfile">Update Profile</NavLink>
          </li>
          <li className="ml-24">
            <img src={user?.photoURL} className="w-12 rounded-full" alt="" />
          </li>
          <li>
            {user?.email ? (
              <NavLink
                onClick={handleSignOut}
                className="bg-[#331A15] btn text-white text-lg font-Rancho font-medium hover:bg-[#6e382d]"
                to="/"
              >
                Log Out
              </NavLink>
            ) : (
              <li>
                <NavLink
                  className="bg-[#331A15] btn text-white text-lg font-Rancho font-medium hover:bg-[#6e382d]"
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
