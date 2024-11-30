import logo from "../assets/more/logo1.png"

const Navbar = () => {
    return (
      <div className="px-4 md:px-8 lg:px-12 bg-[#362626]">
        <div className="flex items-center justify-center gap-2 bg-[#362626] py-3">
          <img src={logo} className="w-16" alt="" />
          <h2 className="font-Rancho text-3xl text-white font-medium">
            Espresso Emporium
          </h2>
          <ul className="flex items-center gap-6 text-white ml-12">
            <li><a href="">Home</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">Signup</a></li>
            <li><a href="">Update Profile</a></li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;