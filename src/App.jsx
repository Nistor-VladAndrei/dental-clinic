import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AnimatedBackground from './Components/AnimatedBackground';
import Locations from './Components/locatii';
import Expensis from './Components/Expensis';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

// Main App Component
function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <About />
      <Services />
      <Locations></Locations>
      <Team />
      <Expensis/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
