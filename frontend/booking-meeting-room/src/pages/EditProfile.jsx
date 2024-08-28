import React, { useState } from "react";
import "../styles/EditProfile.css";
import SideBar from "../components/SideBar";

const EditProfile = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const ShowPasswordFunction = () => {
    SetShowPassword(!showPassword);
  };
  return (
    <div className="edit-container">
      <SideBar />
      <div className="content">
        <h1>Profile Details</h1>
        <div className="content-form">
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
            <button className="mb-2">EDIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
