import React, { useState } from "react";
import "../styles/SideBar.css";

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("profile");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <div>
          <p
            onClick={() => handleClick("profile")}
            className={activeItem === "profile" ? "active" : ""}
          >
            My Profile
          </p>
          <p
            onClick={() => handleClick("booking")}
            className={activeItem === "booking" ? "active" : ""}
          >
            New Booking
          </p>
          <p
            onClick={() => handleClick("history")}
            className={activeItem === "history" ? "active" : ""}
          >
            Booking History
          </p>
        </div>
        <div>
          <p
            onClick={() => handleClick("logout")}
            className={activeItem === "logout" ? "active" : ""}
          >
            Log Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
