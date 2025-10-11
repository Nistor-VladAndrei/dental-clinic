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
const About = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="despre" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-6 tracking-tight">
              Bine ați venit la Clinica Dr. Gheorghiade
            </h2>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed font-light">
              De peste 20 de ani, Dr. Gheorghiade oferă îngrijire dentară excepțională familiilor din comunitatea noastră. Practica noastră combină tehnologia de ultimă generație cu un mediu cald și primitiv.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
              Credem că fiecare pacient merită atenție personalizată și cel mai înalt standard de tratament. Echipa noastră este dedicată să facă experiența ta dentară confortabilă și eficientă.
            </p>
            
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { value: '20+', label: 'Ani' },
                { value: '5000+', label: 'Pacienți' },
                { value: '98%', label: 'Satisfacție' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                  className="text-center bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-md p-4 rounded-2xl border border-white/40 transition-transform duration-300"
                >
                  <div className="text-3xl font-light text-blue-500 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs font-light tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/40"
            >
              <div className="w-full h-full flex items-center justify-center text-8xl">
                👨‍⚕️
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
