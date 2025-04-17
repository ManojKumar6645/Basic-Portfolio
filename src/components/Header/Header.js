import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css"; // Custom CSS for additional styling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("offcanvas-open");
    } else {
      document.body.classList.remove("offcanvas-open");
    }
  }, [isOpen]);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand logo-text" to="/" onClick={closeMenu}>
            Manoj Kumar
          </Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse offcanvas-collapse ${isOpen ? "show" : ""}`}
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/")}`}
                  to="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/about")}`}
                  to="/about"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
             
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/contact")}`}
                  to="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="nav-item social-icons">
              <a
                href="tel:+918874856645"
                className="social-icon"
                aria-label="Call Manoj Kumar"
              >
                <FaPhone />
              </a>
              <a
                href="https://www.linkedin.com/in/manoj-kumar-4b38b4244"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Visit Manoj Kumar's LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    </>
  );
};

export default Header;