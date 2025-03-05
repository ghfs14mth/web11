import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path) => {
    if (path === "/") return location.pathname === path; // Exact match for Home
    return location.pathname.startsWith(path); // Match for other paths
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest(".navbar-right") && !event.target.closest(".navbar-menu-icon")) {
        setTimeout(() => setShowMenu(false), 50);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);
  const handleLinkClick = () => {
    setTimeout(() => setShowMenu(false), 50); // Ensures smooth closing
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
      <div className={`navbar-right ${showMenu === true ? "show-menu" : ""} ${showMenu === false ? "hide-menu" : ""}`}>
        <Link to="/" className={`navbar-link ${isActive("/") ? "active" : ""}`} onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/admissions" className={`navbar-link ${isActive("/admissions") ? "active" : ""}`} onClick={handleLinkClick}>
          Admissions
        </Link>
        <Link to="/academics" className={`navbar-link ${isActive("/academics") ? "active" : ""}`} onClick={handleLinkClick}>
          Academics
        </Link>
        <Link to="/parents" className={`navbar-link ${isActive("/parents") ? "active" : ""}`} onClick={handleLinkClick}>
          Parents
        </Link>
        <Link to="/students" className={`navbar-link ${isActive("/students") ? "active" : ""}`} onClick={handleLinkClick}>
          Students
        </Link>
        <Link to="/events" className={`navbar-link ${isActive("/events") ? "active" : ""}`} onClick={handleLinkClick}>
          Events
        </Link>
        <Link to="/about" className={`navbar-link ${isActive("/about") ? "active" : ""}`} onClick={handleLinkClick}>
          About
        </Link>

        <FontAwesomeIcon
          icon={faClock}
          className="navbar-search-icon"
        />
      </div>
      <FontAwesomeIcon
        icon={showMenu ? faTimes : faBars}
        className="navbar-menu-icon"
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering the outside click handler
          setShowMenu(!showMenu);
        }}
      />
    </nav>
  );
};

export default Navbar;
