import "./NavBar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Navbar({ handleClick, open }) {
  return (
    <>
    <nav className="navbar">
      <div className="logo">Aswin Krishna</div>

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
        <li>
          <button className="remix-btn">day</button>
        </li>
      </ul>

      <button onClick={handleClick} className="hamburg">
        <span className={`icon ${open ? "open" : ""}`}>
          {open ? <IoClose /> : <RxHamburgerMenu />}
        </span>
      </button>
    </nav>
    </>
  );
}
