import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; 
import './Footer.css'
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer bg-dark text-white py-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="social-container">
                {/* Phone Icon */}
                <a href="tel:+918874856645" className="social-icon">
                  <FaPhone />
                </a>
                {/* LinkedIn Icon */}
                <a href="www.linkedin.com/in/manoj-kumar-4b38b4244" className="social-icon">
                  <FaLinkedin />
                </a>
                {/* Instagram Icon */}
                <a href="https://www.instagram.com/mano_jkumar6052/" className="social-icon">
                  <FaInstagram />
                </a>
                {/* GitHub Icon */}
                
                <a href="https://github.com/ManojKumar6645" className="social-icon">
                  <FaGithub />
                </a>

                <a href="mailto:manojkumar65927@gmail.com" className="social-icon">
                  <SiGmail />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="copyright bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-start">
              <p className="p-small mb-0">
                Copyright © 2025 <a className="no-line text-white" href="/">Manoj Kumar</a>
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;