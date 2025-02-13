import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path) => {
    if (path === "/") return location.pathname === path; // Exact match for Home
    return location.pathname.startsWith(path); // Match for other paths
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Global Academy Logo" className="navbar-logo" />
        <div className="navbar-title-container">
          <h1 className="navbar-title">Global Academy</h1>
          <p className="navbar-tagline">"Future Ready with AI & Maths"</p>
        </div>
      </div>
      <div className={`navbar-right ${showMenu ? "show-menu" : ""}`}>
        <Link to="/" className={`navbar-link ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/admissions"
          className={`navbar-link ${isActive("/admissions") ? "active" : ""}`}
        >
          Admissions
        </Link>
        <Link
          to="/academics"
          className={`navbar-link ${isActive("/academics") ? "active" : ""}`}
        >
          Academics
        </Link>
        <Link
          to="/parents"
          className={`navbar-link ${isActive("/parents") ? "active" : ""}`}
        >
          Parents
        </Link>
        <Link
          to="/students"
          className={`navbar-link ${isActive("/students") ? "active" : ""}`}
        >
          Students
        </Link>
        <Link
          to="/events"
          className={`navbar-link ${isActive("/events") ? "active" : ""}`}
        >
          Events
        </Link>
        <Link
          to="/about"
          className={`navbar-link ${isActive("/about") ? "active" : ""}`}
        >
          About
        </Link>
        <FontAwesomeIcon
          icon={faSearch}
          className="navbar-search-icon"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>
      {showSearch && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
      )}
      <FontAwesomeIcon
        icon={showMenu ? faTimes : faBars}
        className="navbar-menu-icon"
        onClick={() => setShowMenu(!showMenu)}
      />
    </nav>
  );
};

export default Navbar;
