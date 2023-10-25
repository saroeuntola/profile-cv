import React from 'react'
import "./Resume.css"
const Resume = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <div className="container main-resume ">
        <div className="row work-exp">
          <h1>Resume</h1>
          <h2>Download My Resume</h2>
          <button className='btn-download'>
            <a
              href="https://drive.google.com/file/d/13r_O1i3u6lKjAwJ6a43Zfa8D5ok-lLyJ/view?usp=sharing"
              target="blank"
            >
              Download Now
            </a>
          </button>
          <div className="mt-5 col-lg-6 col-md-12 col-sm-12">
            <h3>Work</h3>
            <h3>Experience</h3>
          </div>
          <div className="mt-5 col-lg-6 col-md-12 col-sm-12">
            <div className="row-item1 mb-5">
              <div className="year">
                <p>2023 - Present</p>
              </div>
              <div className="text">
                <h5>Editor</h5>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>

            <div className="row-item2 mb-5">
              <div className="year">
                <p>2023 - 2025</p>
              </div>
              <div className="text">
                <h5>Writer at Large</h5>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>

            <div className="row-item3 mb-5">
              <div className="year">
                <p>2022-2023</p>
              </div>
              <div className="text">
                <h5>Intern</h5>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* education */}
        <div className="row edu">
          <div className="mt-5 col-lg-6 col-md-12 col-sm-12">
            <h3>Education</h3>
          </div>
          <div className="mt-5 col-lg-6">
            <div className="row-item4 mb-5">
              <div className="year">
                <p>2023 - Present</p>
              </div>
              <div className="text">
                <h5>
                  Establishment Name |<br />
                  Master’s Degree
                </h5>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  Let your users get to know you
                </p>
              </div>
            </div>

            <div className="row-item5 mb-5">
              <div className="year">
                <p>2023 - 2025</p>
              </div>
              <div className="text">
                <h5>
                  Establishment Name |<br /> Bachelor's Degree
                </h5>
                <p>
                  I'm a paragraph. Click here to add your own text and edit me.
                  Let your users get to know you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resume