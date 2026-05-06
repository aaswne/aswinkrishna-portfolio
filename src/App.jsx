import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";

import CaseStudy from "./pages/CaseStudy";

function Home({ open, handleClick }) {
  return (
    <div className="app">
      <NavBar open={open} handleClick={handleClick} />

      <Hero />

      <section id="work">
        <Projects />
      </section>

      <About />

      <section id="lab">
        <Article />
      </section>

      <section id="connect">
        <Footer />
      </section>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              open={open}
              handleClick={handleClick}
            />
          }
        />

        {/* DYNAMIC CASE STUDY */}
        <Route
          path="/project/:id"
          element={<CaseStudy />}
        />

      </Routes>
    </BrowserRouter>
  );
}