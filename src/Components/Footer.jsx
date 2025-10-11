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
const Footer = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-md text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-light mb-4 tracking-wider">Dr. Gheorghiade</h3>
            <p className="text-gray-400 font-light text-sm">Îngrijire dentară de calitate pentru familia ta</p>
          </div>
          <div>
            <h4 className="font-light mb-4 tracking-wide">Link-uri</h4>
            <ul className="space-y-2">
              {['Despre', 'Servicii', 'Echipa', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors font-light text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-4 tracking-wide">Servicii</h4>
            <ul className="space-y-2 text-gray-400 font-light text-sm">
              <li>Stomatologie Generală</li>
              <li>Stomatologie Cosmetică</li>
              <li>Ortodonție</li>
              <li>Implante Dentare</li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-4 tracking-wide">Contact</h4>
            <ul className="space-y-2 text-gray-400 font-light text-sm">
              <li>Craiova, România</li>
              <li>+40 123 456 789</li>
              <li>contact@drgheoghiade.ro</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-light text-sm">
          <p>&copy; 2025 Clinica Dentară Dr. Gheorghiade. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;