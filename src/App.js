import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import SkillsEnhanced from './components/SkillsEnhanced';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <SkillsEnhanced />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
