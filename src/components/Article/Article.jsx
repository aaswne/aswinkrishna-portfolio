import { useContext } from "react";
import ThemeContext from "../../Themes/ThemeContext";

import "./Article.css";

export default function Articles() {
  const { darkMode } = useContext(ThemeContext);

  const articles = [
    {
      id: 1,
      date: "April 15, 2025",
      title: "How I Built a JSON to XML & CSV Converter Using Next.js",
      description:
        "A walkthrough of building a developer utility tool and the decisions behind its design and implementation.",
      link:
        "https://medium.com/@ashhwin041/app-how-i-built-a-json-to-xml-csv-converter-using-next-js-4ceafbe02480",
    },
    {
      id: 2,
      date: "March 14, 2025",
      title: "Building Samsara AI: My First AI Chat Application",
      description:
        "A breakdown of how I built an AI chat application using Next.js, Firebase, and external APIs.",
      link:
        "https://medium.com/@ashhwin041/building-samsara-ai-my-first-ai-chat-web-application-with-next-js-and-firebase-106b1a510fa2",
    },
  ];

  return (
    <section
      className="articles"
      style={{
        background: darkMode ? "#ffffff" : "black",
        color: darkMode ? "#000000" : "#ffffff",
      }}
    >
      <div className="article-grid">
        {articles.map((article) => (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card"
            key={article.id}
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.7)"
                : "rgba(18,18,18,0.55)",

              color: darkMode ? "#000" : "#fff",

              border: darkMode
                ? "1px solid rgba(0,0,0,0.1)"
                : "1px solid rgba(255,255,255,0.1)",

              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <span
              className="article-date"
              style={{
                color: darkMode
                  ? "rgba(0,0,0,0.6)"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              {article.date}
            </span>

            <h3
              style={{
                color: darkMode ? "#000" : "#fff",
              }}
            >
              {article.title}
            </h3>

            <p
              style={{
                color: darkMode
                  ? "rgba(0,0,0,0.7)"
                  : "rgba(255,255,255,0.7)",
              }}
            >
              {article.description}
            </p>

            <span
              className="article-link"
              style={{
                color: darkMode ? "#000" : "#fff",
              }}
            >
              READ ON MEDIUM ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}