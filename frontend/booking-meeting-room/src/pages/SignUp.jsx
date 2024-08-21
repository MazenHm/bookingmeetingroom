import React from "react";
import "../styles/SignUp.css";
import Navbar from "../components/Navbar";
const SignUp = () => {
  return (
    <div className="signup">
      <Navbar />
      <div className="signup__container">
        <h1 className="text-center">Sign Up</h1>
        <div className="form-signup">
          <form>
            <input type="text" placeholder="Name" className="my-4" />
            <input type="email" placeholder="Email" className="mb-4" />
            <div className="d-flex align-item-center">
              <input type="password" placeholder="Password" className="input-pass" />
              <i class="fas fa-eye" id="togglePassword"></i>
            </div>
            <button className="mb-2">REGISTRE ACCOUNT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
