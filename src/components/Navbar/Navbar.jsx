import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BiduBooking</span>
        <div className="navItems">
          <button className="regbtn">Register</button>
          <button className="logbtn">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
