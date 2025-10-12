import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }) => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer will-change-transform"
      style={{ transform: 'translateZ(0)' }}
    >
      <motion.div 
        whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
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