import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("");

 
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <div>
          <Link to="/edituser">
            <p
              onClick={() => handleClick("profile")}
              className={activeItem === "profile" ? "active" : ""}
            >
              My Profile
            </p>
          </Link>
          <Link to="/booking">
            <p
              onClick={() => handleClick("booking")}
              className={activeItem === "booking" ? "active" : ""}
            >
              New Booking
            </p>
          </Link>
          <Link to="/bookinghistory">
            <p
              onClick={() => handleClick("history")}
              className={activeItem === "history" ? "active" : ""}
            >
              Booking History
            </p>
          </Link>
        </div>
        <div>
          <Link to="/">
            <p
              onClick={() => handleClick("logout")}
              className={activeItem === "logout" ? "active" : ""}
            >
              Log Out
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
