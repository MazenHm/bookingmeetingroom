import React, { useState } from "react";
import "../styles/SignIn.css";
const SignIn = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const ShowPasswordFunction = () => {
    SetShowPassword(!showPassword);
  };
  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="text-center">Sign In</h1>
        <div className="form-signin">
          <form action="">
            <input type="text" placeholder="Email" className="my-4" />
            <div className="d-flex align-items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-pass"
              />
              <i
                className={"fas " + (showPassword ? "fa-eye-slash" : "fa-eye")}
                id="togglePassword"
                onClick={ShowPasswordFunction}
              ></i>
            </div>
            <button className="mb-2">LOGIN ACCOUNT</button>
            <p className="sign-text">
              Not a member yet ? <a href="/signin">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
