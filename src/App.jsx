import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";

import CaseStudy from "./pages/CaseStudy";

/* =========================
   PAGE TRANSITION
========================= */

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 1.02,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   HOME PAGE
========================= */

function Home({ open, handleClick }) {
  return (
    <PageTransition>
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
    </PageTransition>
  );
}

/* =========================
   ROUTES
========================= */

function AnimatedRoutes({ open, handleClick }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home
              open={open}
              handleClick={handleClick}
            />
          }
        />

        <Route
          path="/project/:id"
          element={
            <PageTransition>
              <CaseStudy />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/* =========================
   APP
========================= */

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <AnimatedRoutes
        open={open}
        handleClick={handleClick}
      />
    </BrowserRouter>
  );
}