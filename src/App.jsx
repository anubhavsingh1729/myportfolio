// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import "./css/home.css";
import VerticalTimeline from './components/timeline';
import Projects from './components/projects';
import Skills from './components/skills';
import "./css/contactform.css"
import owl from "/owl.png";
import Education from './components/education';

const App = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on mouse move
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return(
    <div className='parent-container'>
            {/* Radial light effect */}
          {/* <div
          className="wand-light"
          style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          }}
          ></div> */}
        <div className='header-container'>
          <header className='header'>
            <div className='header-left'>
              <a href="https://www.linkedin.com/in/anubhavsingh10/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="header-icon" />
              </a>
              <a href="https://github.com/anubhavsingh1729" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="header-icon" />
              </a>
            </div>

            <h1 className='heading'>Anubhav Singh</h1>
            <div className='header-right'>
                <img src={owl} alt="Email" className="owlpost" 
                onClick={toggleContactForm} /* Open the contact form */
                />
            </div>
          </header>
        </div>
        <div className="main">
        <Introduction />
        <Skills />
        <Education />
        <Projects />
        </div>
      {/* <footer className='footer'>
        <p>© 2023 Anubhav Singh. All rights reserved.</p>
      </footer> */}

      {/* Contact form */}
      {showContactForm && (
        <div className="contact-form-modal">
          <div className="contact-form-container">
            <h2>Send an Owl</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
              <button
                type="button"
                className="close-button"
                onClick={toggleContactForm} /* Close the form */
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
};

export default App;
