import React, { useState } from "react";
import "../styles/SideBar.css";
import { useNavigate } from "react-router-dom";

const SideBarAdmin = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <div>
          <p
            onClick={() => handleClick("profile", "/editadmin")}
            className={activeItem === "profile" ? "active" : ""}
          >
            My Profile
          </p>

          <p
            onClick={() => handleClick("rooms", "/roommanagment")}
            className={activeItem === "rooms" ? "active" : ""}
          >
            Room's Management
          </p>

          <p
            onClick={() => handleClick("calendar", "/calendar")}
            className={activeItem === "calendar" ? "active" : ""}
          >
            Booking Calendar
          </p>
        </div>

        <div>
          <p
            onClick={() => handleClick("logout", "/")}
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
