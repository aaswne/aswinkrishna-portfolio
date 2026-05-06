import "./NavBar.css";
import { useState, useEffect } from "react";

export default function Navbar({ handleClick, open }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

        <p className="time" >{time.toLocaleTimeString()}</p>
      </nav>
    </>
  );
}
