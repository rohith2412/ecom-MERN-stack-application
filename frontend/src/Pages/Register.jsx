import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/style/Auth.css";
import Navbar from "../components/Navbar";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmt = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }
    axios
      .post("http://localhost:2000/api/v1/user/register", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div>
        <Navbar />
      </div>
      <div className="items-center justify-center flex mt-28 ">
        <form onSubmit={handleSubmt}>
          <h2 className="text-4xl h-20">Register Now</h2>
          <div className="grid text-sm">
            <label htmlFor="name">Name</label>
            <input
              className="border border-black rounded-md text-2xl"
              type="text"
              placeholder="  Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid text-sm mt-5">
            <label htmlFor="email">Email</label>
            <input
              className="border border-black  rounded-md text-2xl"
              type="text"
              placeholder="  Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid text-sm mt-5">
            <label className="passwordlabel" htmlFor="password">
              Password
            </label>
            <input
              className="border border-black  rounded-md text-2xl"
              type="password"
              placeholder="  Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
          <button className="mt-5 border pl-2 pr-2 border-blue-400 bg-blue-500 text-white rounded-md hover:font-bold" type="submit">Login</button>
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
