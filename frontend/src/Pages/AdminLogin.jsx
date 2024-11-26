import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/style/Auth.css";

const Login = () => {
  const [admin_email, setAdmin_email] = useState("");
  const [admin_password, setAdmin_password] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!admin_email || !admin_password) {
      alert("All fields are required!");
      return;
    }
    axios
      .post("http://localhost:2000/api/v1/admin/login", {
        admin_email,
        admin_password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Admin login successful") {
          navigate("/admin/AdminPanel");
        } else {
          alert(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="title">Admin Login</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="admin_email"
              onChange={(e) => setAdmin_email(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="admin_password"
              onChange={(e) => setAdmin_password(e.target.value)}
            />
          </div>
          <button type="submit">Get Access</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
