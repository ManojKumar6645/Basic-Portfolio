import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("offcanvas-open");
    } else {
      document.body.classList.remove("offcanvas-open");
    }
  }, [isOpen]);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand logo-text" to="/" onClick={closeMenu} >
          {t("header.logo")}
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
                <Link className={`nav-link ${isActive("/")}`} to="/" onClick={closeMenu}>
                  {t("header.about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/about")}`} to="/about" onClick={closeMenu}>
                  {t("header.about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/contact")}`} to="/contact" onClick={closeMenu}>
                  {t("header.contact")}
                </Link>
              </li>

              {/* 🌐 Language Selector Dropdown */}
              <li className="nav-item dropdown">
                <select
                  className="form-select form-select-sm ms-3"
                  style={{ width: "120px" }}
                  onChange={handleLanguageChange}
                  value={i18n.language}
                >
                  <option value="en">English</option>
                  <option value="hi">हिन्दी</option>
                </select>
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
                aria-label="Visit LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
