import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop"; // Import here
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundColor: "#030712", minHeight: "100vh", position: "relative" }}>
      <ScrollProgress />
      <Navbar />

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;