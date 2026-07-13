import { useState } from 'react';
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      });
  }, []);
  return (
    <div className={darkMode ? "app dark" : "app light"}> 
      <Navbar
         darkMode={darkMode}
         toggleTheme={toggleTheme}
      />
      
      <Hero />
      <About/>
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
      <BackToTop/>
      
    </div>
  );
}

export default App;