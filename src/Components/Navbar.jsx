import React from "react";
import "./Styles/Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h3>Yadav</h3>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
