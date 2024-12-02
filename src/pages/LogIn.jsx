import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const LogIn = () => {
  const { signInWithGoogle, setUser, signIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };

    signIn(email, password)
      .then((result) => {
        form.reset();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl mt-12">
        <h2 className="text-center text-4xl font-bold text-[#331A15] font-Rancho mt-8">
          Login Your Account
        </h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-semibold">Email:</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-semibold">
                Password:
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt text-sm link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3 space-y-3">
            <button className="bg-[#331A15] btn text-white text-xl font-Rancho font-medium hover:bg-[#5a2e26]">
              Log In
            </button>
            <button
              type="button"
              onClick={handleSignInWithGoogle}
              className="bg-[#026fb8] btn text-white text-xl font-Rancho font-medium hover:bg-[#00858f]"
            >
              Sign Up With Google
            </button>
          </div>
          <p className="text-center">
            Haven't any account?
            <Link to="/signup" className="underline text-cyan-600 font-medium">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
