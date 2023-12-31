import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resume from "./components/Resume";
import { useState, useEffect } from "react";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  const [darkMode, setDarkMode] = useState (localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
    
  }

  return (
    <>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="profile-cv/"
            element={
              <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/resume"
            element={
              <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/project"
            element={
              <Project darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
        </Routes>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </BrowserRouter>
    </>
  );
}

export default App;
