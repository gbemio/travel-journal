import React from "react";
import logo from "./images/fill.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav--group">
        <img src={logo} alt="" className="nav--logo" />
        <p className="nav--text">my travel journal.</p>
      </div>
    </div>
  );
};

export default Navbar;
