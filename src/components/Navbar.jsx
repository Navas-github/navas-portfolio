import { useState } from "react";
import "./Navbar.css";
import {FaBars} from "react-icons/fa";
import {FaTimes, FaMoon, FaSun} from "react-icons/fa";

function Navbar({darkMode, toggleTheme}){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
      setMenuOpen(false);
    }
  return (
    <nav className="navbar">
      <h2 className="logo">Navas</h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Hamburger icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun/> : <FaMoon/>}
      </button>
    </nav>
  );
}

export default Navbar;