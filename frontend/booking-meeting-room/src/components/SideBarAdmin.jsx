import React, { useState } from "react";
import "../styles/SideBar.css";

const SideBarAdmin = () => {
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
            onClick={() => handleClick("Room's Management")}
            className={activeItem === "Room's Management" ? "active" : ""}
          >
            Room's Management
          </p>
          <p
            onClick={() => handleClick("Booking Calendar")}
            className={activeItem === "Booking Calendar" ? "active" : ""}
          >
            Booking Calendar
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

export default SideBarAdmin;
