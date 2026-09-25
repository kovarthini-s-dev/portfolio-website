import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  return (
    <header className="navbar">
      <nav className="navbar_container">
        <a className="navbar_logo" href="#home" onClick={closeMenu}>
          Kovarthini
        </a>

        <div
          id="main-navigation"
          className={`navbar_links ${
            isMenuOpen ? "navbar_links-open" : ""
          }`}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="navbar_actions">
          <ThemeToggle />

          <button
            type="button"
            className="navbar_menu-toggle"
            onClick={toggleMenu}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;