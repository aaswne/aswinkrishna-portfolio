import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import CaseStudy from "./pages/CaseStudy";
import LoadingPage from "./pages/LoadingPage";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Home({ open, handleClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <PageTransition>
      <div className="app">
        <NavBar open={open} handleClick={handleClick} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        <Hero menuOpen={menuOpen} />
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

function AnimatedRoutes({ open, handleClick }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home open={open} handleClick={handleClick} />}
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

export default function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  if (loading) {
    return <LoadingPage onComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <AnimatedRoutes open={open} handleClick={handleClick} />
    </BrowserRouter>
  );
}
