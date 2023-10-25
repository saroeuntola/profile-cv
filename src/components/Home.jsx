import React from 'react'
import Logo from './image/logo.jpg'
import './Home.css';
import { Link } from 'react-router-dom';
const Home = (props) => {
  return (
    <main className={ props.darkMode ? "dark" : ""}>
      <div className="container">
        <div className="main-home">
          <div className="item-left">
            <img src={Logo} alt="logo" />
          </div>
          <div className="item-right">
            <h1>Hello</h1>
            <h5>A Bit About Me</h5>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <div className="btn d-lg-flex gap-4 justify-content-lg-center align-items-center ">
              <div className="item1">
                <Link to="/resume">
                  Resume
                </Link>
              </div>
              <div className="item2">
                <Link to="/project">
                  Projects
                </Link>
              </div>
              <div className="item3">
                <Link to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home