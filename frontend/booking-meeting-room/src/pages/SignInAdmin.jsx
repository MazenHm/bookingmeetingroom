import React, { useState } from "react";
import "../styles/SignInAdmin.css";
const SignInAdmin = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const ShowPasswordFunction = () => {
    SetShowPassword(!showPassword);
  };
  return (
    <div className="signin">
      <div className="signinadmin__container" id="signinadmin__container">
        <h1 className="text-center">Sign In</h1>
        <h5 className="text-center">ADMIN</h5>

        <div className="form-signin">
          <form>
            <input type="text" placeholder="Email" className="my-4" />
            <div className="d-flex align-items-center mb-5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <i
                className={"fas " + (showPassword ? "fa-eye-slash" : "fa-eye")}
                id="togglePassword"
                onClick={ShowPasswordFunction}
              ></i>
            </div>
            <button className="mb-2">LOGIN ADMIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInAdmin;
