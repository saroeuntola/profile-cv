import React from 'react'
import './Project.css'
import pic1 from './image/pic1.webp'
const Project = (props) => {
  return (
    <main className={props.darkMode ? "dark": ""}>
      <div className="container main-project">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="row-pro">
          <div className="mt-5">
            <h3>Project Name 01</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="mt-lg-5">
            <img src={pic1} alt="pic1" />
          </div>
        </div>

        <div className="row-pro mt-5">
          <div className="mt-5">
            <h3>Project Name 01</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="mt-lg-5">
            <img src={pic1} alt="pic1" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project