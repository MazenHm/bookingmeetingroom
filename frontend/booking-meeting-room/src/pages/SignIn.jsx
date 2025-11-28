import React, { useState } from "react";
import "../styles/SignIn.css";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, SetShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ShowPasswordFunction = () => {
    SetShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await login(email, password);

    if (!res || res.error) {
      alert("Invalid email or password");
      return;
    }

    // Save token & role
    localStorage.setItem("token", res.token);
    localStorage.setItem("role", res.role);

    // Redirects
    if (res.role === "admin") navigate("/admin/rooms");
    else navigate("/booking");
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="text-center">Sign In</h1>

        <div className="form-signin">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              className="my-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="d-flex align-items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-pass"
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
              LOGIN ACCOUNT
            </button>

            <p className="sign-text">
              Not a member yet ? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
