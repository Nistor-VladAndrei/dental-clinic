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
const ServiceCard = ({ title, description, icon, index }) => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={prefersReducedMotion ? {} : { y: -8 }}
      className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <motion.div 
        whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6"
      >
        <span className="text-3xl">{icon}</span>
      </motion.div>
      <h3 className="text-2xl font-light text-gray-800 mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
};
export default ServiceCard;
