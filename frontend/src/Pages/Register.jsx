import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/style/Auth.css";
import Navbar from "../components/Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");  // For displaying error messages
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);
    setError("");  // Reset error before making the request

    // Make the API request to register the user
    axios
      .post("http://localhost:2000/api/v1/user/register", { name, email, password })
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // Handle errors from backend
        setError(err.response?.data?.error || "Something went wrong!");
      });
  };

  return (
    <div className="main">
      <div>
        <Navbar />
      </div>
      <div className="items-center justify-center flex mt-28">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl h-20">Register Now</h2>

          {/* Display error message if exists */}
          {error && <p className="text-red-500">{error}</p>}

          <div className="grid text-sm">
            <label htmlFor="name">Name</label>
            <input
              className="border border-black rounded-md text-2xl"
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="grid text-sm mt-5">
            <label htmlFor="email">Email</label>
            <input
              className="border border-black rounded-md text-2xl"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid text-sm mt-5">
            <label className="passwordlabel" htmlFor="password">
              Password
            </label>
            <input
              className="border border-black rounded-md text-2xl"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              className="mt-5 border pl-2 pr-2 border-blue-400 bg-blue-500 text-white rounded-md hover:font-bold"
              type="submit"
            >
              {loading ? "Registering..." : "Register"}
            </button>
            <div className="mt-3">
              <p>Already have an account?</p>
              <Link to="/login" className="underline font-bold">
                Login..
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
