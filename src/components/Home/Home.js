import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Custom CSS for additional styling
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";

const Home = () => {
  return (
    <>
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="text-container">
              <h1 className="h1-large">
                I love to create scalable and innovative web solutions
              </h1>
              <p className="p-large">
                Hi, I'm Manoj! I specialize in building modern, responsive, and user-friendly web applications using <strong>.NET</strong>, <strong>React</strong>, and <strong>Node.js</strong>. With expertise in e-learning, e-governance, and CRM systems, I deliver seamless digital experiences that drive efficiency and engagement.
              </p>
              <div className="button-container">
                <Link
                  className="btn btn-primary btn-lg page-scroll"
                  to="/about"
                >
                  Discover
                </Link>
                <Link
                  className="btn btn-outline-light btn-lg page-scroll"
                  to="/contact"
                >
                  <i className="fas fa-user"></i> Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <About/>
    <Contact/>
    </>
  );
};

export default Home;