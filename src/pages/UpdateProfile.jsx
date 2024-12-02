import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const { UpdateUserProfile, setLoading, setUser } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;

    const updatedUser = { displaName: name, email: email, photoURL: photo };

    UpdateUserProfile(updatedUser).then(() => {
      setUser((prev) => ({ ...prev, updatedUser }));
      setLoading(true);

      // Fetch

      fetch(`http://localhost:5000/users/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data);
        });
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl mt-12">
        <h2 className="text-center text-4xl font-bold text-[#331A15] font-Rancho mt-8">
          Update Your Profile
        </h2>
        <form onSubmit={handleUpdateProfile} className="card-body">
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
          <div className="form-control mt-6">
            <button className="bg-[#331A15] btn text-white text-xl font-Rancho font-medium hover:bg-[#5a2e26]">
              Update Your Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
