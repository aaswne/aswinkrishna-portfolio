import "./Hero.css";
export default function Hero() {

  return (
    <section className="hero">
      <div className="hero-top">
        <p className="hero-desc">
          I build modern and responsive web applications to solve real-world problems.
        </p>
      </div>

      <div className="hero-row">
        <h1 className="hero-title">
          Frontend Developer <br />
          Experience
        </h1>

       <div className="hero-bottom">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-btn"
  >
    Resume ↗
  </a>

  <a
    href="https://github.com/aaswne"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-btn"
  >
    GitHub ↗
  </a>
</div>
      </div>
    </section>
  );
}