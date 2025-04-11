import React from 'react';
import '../css/navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#education">Education & Experience</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;