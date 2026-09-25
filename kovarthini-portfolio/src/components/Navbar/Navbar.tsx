import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar_container">
        <a className="navbar_logo" href="#home">
          Kovarthini
        </a>

        <div className="navbar_links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navbar_actions">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;