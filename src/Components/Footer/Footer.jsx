import React, { useContext } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "../About/About";
import Home from "../../Pages/Home";
import ContactUs from "../ContactUs/ContactUs";
import { CourseContext } from "../../Context/ThemeContext";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Questions Box</h2>
          <p>Your space to grow in frontend, backend, fullstack, and UX/UI.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <ul className="footer-links-ul">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contactUs">Contact</a>
              </li>
            </ul>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect with us</h3>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shams-alwadiya/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:shams32002@gmail.com?subject=استفسار&body=مرحباً شمس، عندي استفسار حول...">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Questions Box. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
