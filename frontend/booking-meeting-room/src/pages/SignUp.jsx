import React, { useState } from "react";
import "../styles/SignUp.css";
const SignUp = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const ShowPasswordFunction = () => {
    SetShowPassword(!showPassword);
  };
  return (
    <div className="signup">
      <div className="signup__container">
        <h1 className="text-center">Sign Up</h1>
        <div className="form-signup">
          <form>
            <input type="text" placeholder="Name" className="my-4" />
            <input type="email" placeholder="Email" className="mb-4" />
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
            <button className="mb-2">REGISTRE ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
