import "./NavBar.css";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
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

        <a href="#connect" className="nav-button">
         Hire Me
        </a>
      </nav>
    </header>
  );
}