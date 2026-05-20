import "./NavBar.css";
import { useContext } from "react";
import ThemeContext from "../../Themes/ThemeContext"
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";



export default function Navbar() {

  const {darkMode,handleTheme}=useContext(ThemeContext)
  return (
    <header className="navbar-wrapper">
      <nav className="navbar" style={{color:darkMode?"black":"white"}}>
        <a href="/" className="logo">
          Aswin Krishna
        </a>

        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>

          <li>
            <a href="#lab">Lab</a>
          </li>

          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>

        <a onClick={handleTheme} className="nav-button">
        {darkMode?<CiDark />
:<MdOutlineLightMode />
}
        </a>
      </nav>
    </header>
  );
}