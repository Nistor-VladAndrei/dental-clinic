import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};
const Services = () => {
  const services = [
    {
      title: 'Stomatologie Generală',
      description: 'Îngrijire completă a sănătății orale, incluzând curățări, plombe și tratamente preventive.',
      icon: '🦷',
    },
    {
      title: 'Stomatologie Cosmetică',
      description: 'Transformă-ți zâmbetul cu albire, fațete și proceduri estetice personalizate.',
      icon: '✨',
    },
    {
      title: 'Ortodonție',
      description: 'Îndreaptă-ți dinții cu aparate moderne și alignere transparente.',
      icon: '😁',
    },
    {
      title: 'Implante Dentare',
      description: 'Soluții permanente de înlocuire a dinților care arată și funcționează natural.',
      icon: '🔧',
    },
    {
      title: 'Tratament de Canal',
      description: 'Tratament blând și eficient pentru salvarea dinților infectați.',
      icon: '💙',
    },
    {
      title: 'Urgențe Dentare',
      description: 'Atenție imediată pentru urgențe dentare cu programări în aceeași zi.',
      icon: '🚨',
    },
  ];

  return (
    <section id="servicii" className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Serviciile Noastre</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Îngrijire dentară completă pentru fiecare membru al familiei tale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
