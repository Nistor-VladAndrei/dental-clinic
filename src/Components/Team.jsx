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
const Team = () => {
  const prefersReducedMotion = useReducedMotion();
  const team = [
    {
      name: 'Dr. Gheorghiade Anita Giorgiana',
      role: 'Medic Dentist, Stomatologie Generală',
      bio: 'peste 20 de ani de experiență',
      emoji: '👩‍⚕️',
    },
    {
      name: 'Dr. Gheorghiade Valentin Dan',
      role: 'Medic Dentist, Stomatologie Generală',
      bio: 'peste 20 de ani de experiență',
      emoji: '👨‍⚕️',
    },
    {
      name: 'Ana Popescu',
      role: 'Igienist Dentar',
      bio: 'Igienist certificat',
      emoji: '👩‍⚕️',
    },
  ];

  return (
    <section id="echipa" className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Echipa Noastră</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Profesioniști experimentați dedicați sănătății tale dentare
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={prefersReducedMotion ? {} : { y: -10 }}
              className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-lg text-center transition-transform duration-300"
            >
              <motion.div 
                whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-32 h-32 bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-md rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border border-white/40"
              >
                {member.emoji}
              </motion.div>
              <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide">{member.name}</h3>
              <p className="text-blue-500 font-light mb-4 text-sm tracking-wide">{member.role}</p>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;