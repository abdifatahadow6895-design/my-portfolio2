import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import BackToTopButton from "./components/BackToTopButton";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <CustomCursor />
      <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#020617_100%)] text-slate-900 transition-colors dark:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Services />
          <Certifications />
          <Testimonials />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
}