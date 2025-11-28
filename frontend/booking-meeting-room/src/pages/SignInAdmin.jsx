import React, { useState } from "react";
import "../styles/SignInAdmin.css";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const SignInAdmin = () => {
  const navigate = useNavigate();

  const [showPassword, SetShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ShowPasswordFunction = () => {
    SetShowPassword(!showPassword);
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    const res = await login(email, password);

    if (!res || res.error) {
      alert("Invalid email or password");
      return;
    }

    if (res.role !== "admin") {
      alert("Access denied — Admins only");
      return;
    }

    localStorage.setItem("token", res.token);
    localStorage.setItem("role", res.role);

    // 👇 redirect to correct page
    navigate("/roommanagment");
  };

  return (
    <div className="signin">
      <div className="signinadmin__container" id="signinadmin__container">
        <h1 className="text-center">Sign In</h1>
        <h5 className="text-center">ADMIN</h5>

        <div className="form-signin">
          <form onSubmit={handleAdminLogin}>
            <input
              type="text"
              placeholder="Email"
              className="my-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="d-flex align-items-center mb-5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <i
                className={"fas " + (showPassword ? "fa-eye-slash" : "fa-eye")}
                id="togglePassword"
                onClick={ShowPasswordFunction}
              ></i>
            </div>

            <button className="mb-2" type="submit">
              LOGIN ADMIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInAdmin;
