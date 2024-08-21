import React from "react";
import "../styles/SignIn.css";
import Navbar from "../components/Navbar";
const SignIn = () => {
  return (
    <div className="signin">
      <Navbar />
      <div className="signin__container">
        <h1 className="text-center">Sign In</h1>
        <div className="form-signin">
          <form>
            <input type="text" placeholder="Email" className="my-4" />
            <input type="password" placeholder="Password" className="mb-5" />
            <button className="mb-2">LOGIN ACCOUNT</button>
            <p>
              Not a member yet ? <a href="/signin">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
