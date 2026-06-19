import "./NavBar.css";
import { useContext } from "react";
import ThemeContext from "../../Themes/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

export default function Navbar({ setMenuOpen, menuOpen }) {
  const { darkMode, handleTheme } = useContext(ThemeContext);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" style={{ color: darkMode ? "black" : "white" }}>
        <a href="/" className="logo">
          Aswin Krishna
        </a>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
          </li>
          <li>
            <a href="#lab" onClick={() => setMenuOpen(false)}>
              Lab
            </a>
          </li>
          <li>
            <a href="#connect" onClick={() => setMenuOpen(false)}>
              Connect
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button onClick={handleTheme} className="nav-button">
            {darkMode ? <CiDark /> : <MdOutlineLightMode />}
          </button>

          <button
            className={`menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}