import "./About.css";
import ThemeContext from "../../Themes/ThemeContext";
import { useContext } from "react";
export default function AboutSection() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className="about" style={{backgroundColor:darkMode?"white":"black",color:darkMode?"black":"white"}}>
      <div className="about-container">
        <p className="about-text">
          I'm Aswin Krishna T, a frontend developer based in India, focused on
          building clean and scalable web applications using React and Next.js.
          I enjoy working at the intersection of design and engineering —
          writing code that is not only maintainable, but also delivers a smooth
          and intuitive user experience. I also share what I learn through
          writing, which helps me deepen my understanding and communicate ideas
          more clearly.
        </p>
      </div>
    </section>
  );
}
