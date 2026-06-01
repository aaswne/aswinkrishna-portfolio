import "./Hero.css";
import { useContext } from "react";
import ThemeContext from "../../Themes/ThemeContext";
export default function Hero({ open }) {
  const { darkMode, handleTheme } = useContext(ThemeContext);

  return (
    <section style={{backgroundColor:darkMode?"white":"black",color:darkMode?"black":"white"}} className="hero">
      <div className="hero-top">
        <p  className="hero-desc">
          I build modern and responsive web applications to solve real-world
          problems.
        </p>
      </div>

      <div className="hero-row">
        <h1 className="hero-title">
          Frontend Developer <br />
          Experience
        </h1>

        <div className="hero-bottom" >
          <a
            href="mailto:ashhwin041@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
             className={darkMode?"hero-btn":"hero-btn-dark"}

          >
            Hire Me ↗
          </a>

          <a
            href="https://github.com/aaswne"
            target="_blank"
            rel="noopener noreferrer"
             className={darkMode?"hero-btn":"hero-btn-dark"}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
