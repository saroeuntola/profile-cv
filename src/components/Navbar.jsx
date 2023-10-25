import React from "react";
import "../components/Navbar.css";
import logo from "./image/logo.jpg";
import { Link } from "react-router-dom";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";


const Navbar = (props) => {
  const ChangeIconDarkModeToggle = () => {
    props.toggleDarkMode();
  };

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top py-1 px-4 ${
          props.darkMode ? "dark" : "bg-light"
        }`}
      >
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center gap-2">
            <Link
              className="nav-link d-flex align-items-center gap-2"
              to="profile-cv/"
            >
              <img src={logo} alt="logo" />
              <span id="logo-name">Saroeun Tola</span>
            </Link>
            <span id="job-title">| Web Developer</span>
          </div>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="menu-icon"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mt-3 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Projects
                </Link>
              </li>
            </ul>

            <div
              className="icon-dark-mode ps-lg-5 d-flex align-items-center flex-row-reverse float-md-start float-sm-start gap-3 px"
              onClick={ChangeIconDarkModeToggle}
            >
              {props.darkMode ? <FaToggleOn /> : <FaToggleOff />}
              <span>DarkMode</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
