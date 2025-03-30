import React from 'react';
import '../css/navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#cards">My Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;