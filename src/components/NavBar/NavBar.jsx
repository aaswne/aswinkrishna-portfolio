import "./NavBar.css";
import { useContext, useState } from "react";
import ThemeContext from "../../Themes/ThemeContext";
import { MdOutlineLightMode, MdMenu } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const { darkMode, handleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav
        className="navbar"
        style={{ color: darkMode ? "black" : "white" }}
      >
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
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <MdMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}