import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Custom CSS for additional styling
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="text-container">
                <h1 className="h1-large">
                  {t("home.heading")}
                </h1>
                <p className="p-large">
                  {t("home.description")}
                </p>
                <div className="button-container">
                  <Link
                    className="btn btn-primary btn-lg page-scroll"
                    to="/about"
                  >
                    {t("home.discover_button")}
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-lg page-scroll"
                    to="/contact"
                  >
                    <i className="fas fa-user"></i> {t("home.contact_button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <About />
      <Contact />
    </>
  );
};

export default Home;