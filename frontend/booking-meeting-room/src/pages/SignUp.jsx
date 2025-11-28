import React, { useState } from "react";
import "../styles/SignUp.css";
import { signup } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, SetShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ShowPasswordFunction = () => {
    SetShowPassword(!showPassword);
  };

 const handleSignup = async (e) => {
  e.preventDefault();

  if (!name.trim()) {
    alert("Name is required");
    return;
  }

  const res = await signup(name, email, password);

  if (res.error) {
    alert("Email already exists or invalid input");
    return;
  }

  alert("Account created successfully!");
  navigate("/");
};


  return (
    <div className="signup">
      <div className="signup__container">
        <h1 className="text-center">Sign Up</h1>

        <div className="form-signup">
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              className="my-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="mb-4"
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
              REGISTRE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
