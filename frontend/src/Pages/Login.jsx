import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/style/Auth.css";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are required!");
      return;
    }
    axios
      .post("http://localhost:2000/api/v1/user/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "login succesfull") {
          navigate("/");
        } else {
          alert(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="items-center justify-center flex mt-28 ">
        <form className="" onSubmit={handleSubmit}>
          <h2 className="text-4xl h-20">Login Now</h2>
          <div className="">
            <div className="grid text-sm ">
              <label htmlFor="email">email</label>
              <input className=" border border-black rounded-md text-2xl"
                type="text"
                placeholder="  Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid text-sm mt-5">
              <label htmlFor="password">Password</label>
              <input className=" border border-black  rounded-md text-2xl"
                type="password"
                placeholder="  Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between">
          <button className="mt-5 border pl-2 pr-2 border-blue-400 bg-blue-500 text-white rounded-md hover:font-bold" type="submit">Login</button>
          <div className="mt-3">
            <p>Dont have an account?</p>
            <Link to="/register" className="underline font-bold">
              Register..
            </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
