import "./Footer.css";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGooglemeet } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>
          I design and build modern, high-performance web applications with a
          focus on usability, scalability, and seamless user experience.
        </h2>

       <a
  href="https://calendar.app.google/kzme29jt4E4tEJxD8"
  className="footer-btn"
>
  <img
    src="https://www.gstatic.com/images/branding/product/1x/meet_2020q4_48dp.png"
    alt="Google Meet"
    width="22"
    height="22"
  />

  Book a 15 minutes call
</a>
        <p className="footer-credit">
          Designed & developed by <span> Aswin Krishna</span>
        </p>
      </div>

      <div className="footer-right">
        <h4>EXPLORE</h4>

        <div className="footer-links">
          <div>
            <a href="#work">Work</a>
            <a href="#lab">Lab</a>
            <a href="#connect">Connect</a>
          </div>

          <div>
            <a href="https://x.com/ashhwin041" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/aswin-krishna-07a848252/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedln
            </a>
            <a
              href="https://github.com/aaswne"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
