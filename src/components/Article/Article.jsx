import "./Article.css";

export default function Articles() {
    
    const articles = [
  {
    id: 1,
    date: "April 15, 2025",
    title: "How I Built a JSON to XML & CSV Converter Using Next.js",
    description:
      "A walkthrough of building a developer utility tool and the decisions behind its design and implementation.",
    link:"https://medium.com/@ashhwin041/app-how-i-built-a-json-to-xml-csv-converter-using-next-js-4ceafbe02480",
  },
  {
    id: 2,
    date: "March 14, 2025",
    title: "Building Samsara AI: My First AI Chat Application",
    description:
      "A breakdown of how I built an AI chat application using Next.js, Firebase, and external APIs.",
    link: "https://medium.com/@ashhwin041/building-samsara-ai-my-first-ai-chat-web-application-with-next-js-and-firebase-106b1a510fa2",}
];
  return ( 
      <section className="articles">
      <div className="article-grid">
        {articles.map((article) => (
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card"
            key={article.id}
          >
            <span className="article-date">{article.date}</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="article-link">READ ON MEDIUM ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}