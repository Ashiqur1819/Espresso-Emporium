import { Link } from "react-router-dom";
import errorImg from "../assets/404/404.gif";

const ErrorPage = () => {
  return (
    <div className="max-w-7xl px-4 md:px-8 lg:px-12 mx-auto">
      <div className="max-w-7xl mx-auto px:4 md:px-8 lg:px-12 my-6">
        <button className="bg-[#331A15] btn text-white text-lg font-Rancho font-medium hover:bg-[#331A15]">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
      <div className="max-w-5xl mx-auto">
        <img src={errorImg} className="mx-auto" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
