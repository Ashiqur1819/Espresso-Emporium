import { useContext, useNavigate } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { signInWithGoogle, setUser, setLoading, signUp, UpdateUserProfile } =
    useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const user = { name, email, photo, password };
    const dbUser = { name, email };

    signUp(email, password)
      .then((result) => {
        UpdateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
          setLoading(true);

          //  Fetch
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dbUser),
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data);
            });
        });
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
          Create A New Account
        </h2>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-semibold">Name:</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
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
                Photo URL:
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
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
          </div>
          <div className="form-control mt-6 space-y-3">
            <button className="bg-[#331A15] btn text-white text-xl font-Rancho font-medium hover:bg-[#5a2e26]">
              Sign Up
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
            Already have an account?
            <Link to="/login" className="underline text-cyan-600 font-medium">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
