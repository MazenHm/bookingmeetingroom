import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
        <img
          src="/assets/images/Logo-Proxym-2020.png"
          alt="proxym"
          className="logo"
        />
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#a">What’s happening</a>
        <a href="#a">Web Community</a>
        <a href="#a">Booking</a>
      </div>
      <div className="nav-toggle" onClick={toggleNavbar}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
    </div>
  );
};

export default Navbar;
