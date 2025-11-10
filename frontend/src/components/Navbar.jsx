import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-logo">
  <a href="#home" onClick={() => setMenuOpen(false)}>
    <img src="/images/zing_logo.png" alt="Gym Logo" className="logo-img" loading="lazy"/>
  </a>
</div>


      {/* Center: Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a></li>
  <li><a href="#trainers" onClick={() => setMenuOpen(false)}>Trainers</a></li>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
</ul>


      {/* Right: Contact Button */}
      <button className="contact-btn"><a href="#contact" style={{textDecoration: "none", color: "inherit"}}>Contact Us</a></button>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
