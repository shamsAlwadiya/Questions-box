import { MdTranslate } from "react-icons/md";
import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CourseContext } from "../../Context/ThemeContext";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdNotificationsOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const [logoutPop, setLogoutPop] = useState(false);
  const { isLoggedIn, logout } = useContext(CourseContext);
  const courses = [
    { key: "frontendCourse", label: "Frontend Development" },
    { key: "backendCourse", label: "Backend Development" },
    { key: "fullStackCourse", label: "FullStack Development" },
    { key: "uxuiCourse", label: "UI/UX Design" },
  ];

  const [searchTerm, setSearchTerms] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerms(value);
    const filtered = courses.filter((course) =>
      course.label.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(filtered);
  };
  const handleSearchButtonClick = () => {
    const term = searchTerm.trim().toLowerCase();

    const foundCourse = courses.find(
      (course) => course.key === term || course.label.toLowerCase() === term
    );

    if (foundCourse) {
      navigate(`/course/${foundCourse.key.replace("Course", "")}`);
    } else {
      navigate(`/course/${term}`);
    }

    setSearchTerms("");
    setSearchResult([]);
  };

  const handleSelectCourse = (courseKey, courseName) => {
    localStorage.setItem("course", courseName.toLowerCase());
    setSearchTerms("");
    setSearchResult([]);
    selectCourse(courseKey);
    navigate(`/course/${courseKey.replace("Course", "")}`);
  };

  const { theme, handleTheme } = useContext(CourseContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [notification, setNotification] = useState(false);

  const toggleNotification = () => {
    setNotification(!notification);
  };
  const { selectCourse } = useContext(CourseContext);
  const handleLogout = () => {
    logout();
    setLogoutPop(false);
    navigate("/");
    
  };

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
                navigate("/course/frontend");
                localStorage.setItem("course", "frontend");
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
                navigate("/course/backend");
                localStorage.setItem("course", "backend");
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
                navigate("/course/fullStack");
                localStorage.setItem("course", "fullStack");
              }}
              whileTap={{ scale: 1.05 }}
              whileHover={{ scale: 0.95 }}
            >
              FullStack
            </motion.li>

            <motion.li
              onClick={() => {
                selectCourse("uxuiCourse");
                setShow(false);
                navigate("/course/uxui");
                localStorage.setItem("course", "uxui");
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
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchResult.length > 0 && (
            <ul className="search-results">
              {searchResult.map((course) => (
                <li
                  key={course.key}
                  onClick={() => handleSelectCourse(course.key, course.label)}
                >
                  {course.label}
                </li>
              ))}
            </ul>
          )}
          <button onClick={handleSearchButtonClick}>Search</button>
        </div>

        <button className="theme-toggle" onClick={handleTheme}>
          {" "}
          {theme ? <FaSun style={{ color: "#000" }} /> : <FaMoon />}
        </button>
        <button className="theme-notification" onClick={toggleNotification}>
          {" "}
         
        </button>
        {!isLoggedIn ? (
  <Link to="/register">
    <button className="sign-in-btn">Sign Up</button>
  </Link>
) : (
  <button className="sign-in-btn" onClick={() => setLogoutPop(true)}>
    Log Out
  </button>
)}

        {logoutPop && (
          <div className="logout-popup">
            <div className="popup-content">
              <p>Are you sure you want to log out?</p>
              <div className="popup-buttons">
                <button onClick={handleLogout}>Yes</button>
                <button onClick={() => setLogoutPop(false)}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
