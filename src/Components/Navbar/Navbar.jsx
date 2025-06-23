import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { CourseContext } from "../../Context/ThemeContext";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdNotificationsOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [notification, setNotification] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
    if (!theme) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };
  const toggleNotification = () => {
    setNotification(!notification);
  };
  const { selectCourse } = useContext(CourseContext);
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li
          className="dropdown"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          Courses{" "}
          <span className="arrow-icon" style={{ color: "green" }}>
            {show ? <FaChevronUp /> : <FaChevronDown />}
          </span>
          <ul className={`dropdown-menu ${show ? "active" : ""}`}>
            <motion.li
              onClick={() => {
                selectCourse("frontendCourse");
                setShow(false);
                navigate('/levelSelection')
                localStorage.setItem( 'course' ,'frontend')
              }}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.05 }}
            >
          Frontend Development
            </motion.li>
            <motion.li
              onClick={() => {
                selectCourse("backendCourse");
                setShow(false);
                navigate('/levelSelection')
                localStorage.setItem( 'course', 'backend')

              }}
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.05 }}
            >
              Backend Development
            </motion.li>
            <motion.li
              onClick={() => {
                selectCourse("fullStackCourse");
                setShow(false);
                navigate('/levelSelection')
                localStorage.setItem( 'course' ,'fullstack')
              }}
              whileTap={{ scale: 1.05 }}
              whileHover={{ scale: 0.95 }}
            >
             Fullstack
            </motion.li>

            <motion.li
              onClick={() => {
                selectCourse("uxuiCourse");
                setShow(false);
                navigate('/levelSelection')
                localStorage.setItem('course' ,'uxui')
              }}
              whileTap={{ scale: 1.05 }}
              whileHover={{ scale: 0.95 }}
            >
              UI/UX Design
            </motion.li>
          </ul>
        </li>

        <Link to={"/about"}>
          <li>About</li>{" "}
        </Link>
        <Link to={"/contactUs"}>
          <li>Contact</li>
        </Link>
      </ul>
      <Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
        <div className="logo">
          <h1>Ask Me </h1>
          <RiQuestionAnswerLine
            style={{ fontSize: "35px", color: "green", marginTop: "5px" }}
          />
        </div>
      </Link>
      <div className="user-actions">
        <div className="search-input">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {" "}
          {theme ? <FaSun style={{ color: "#fff" }} /> : <FaMoon />}
        </button>
        <button className="theme-notification" onClick={toggleNotification}>
          {" "}
          {notification ? (
            <IoMdNotificationsOff />
          ) : (
            <IoMdNotificationsOutline />
          )}
        </button>
        <MdTranslate />
        <button className="sign-in-btn">Sign In </button>
      </div>
    </div>
  );
};

export default Navbar;
