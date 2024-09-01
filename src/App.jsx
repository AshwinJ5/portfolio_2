import React, { useEffect, useRef } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Skills from './Components/Skills';
import 'aos/dist/aos.css';

function App() {
  const toTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        toTopRef.current.classList.add('active');
      } else {
        toTopRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
        <Footer />
      </section>
      <a href="#" className="to-top" ref={toTopRef}>
        <i className="fa-solid fa-chevron-up"></i>
      </a>
    </>
  );
}

export default App;
