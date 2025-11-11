import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map display names to actual section IDs
  const navItems = [
    { label: 'Despre', id: 'despre' },
    { label: 'Servicii', id: 'servicii' },
    { label: 'Locații', id: 'locatii' },
    { label: 'Echipa', id: 'echipa' },
    { label: 'Prețuri', id: 'preturi' },
    { label: 'Testimoniale', id: 'testimoniale' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-light tracking-wider text-gray-800">
            Dr. Gheorghiade
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-gray-700 text-base hover:text-blue-500 transition-colors duration-300 font-heavy text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg text-sm font-light tracking-wide"
          >
            Programare
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 mt-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors font-light"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full shadow-lg text-sm font-light text-center"
            >
              Programare
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;