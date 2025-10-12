import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};
const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
      <AnimatedBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-extralight text-gray-800 mb-6 tracking-tight"
          >
            Zâmbetul Tău,
            <motion.span 
              className="block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"
              animate={prefersReducedMotion ? {} : { 
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Prioritatea Noastră
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto font-light tracking-wide"
          >
            Îngrijire dentară excepțională cu tehnologie de ultimă generație
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a 
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-light tracking-wide shadow-xl hover:shadow-2xl transition-shadow duration-300"
              href='#contact'
            >
              Programează Consultație
            </motion.a>
            
            <motion.a 
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="bg-white/80 backdrop-blur-md text-blue-600 px-10 py-4 rounded-full text-lg font-light tracking-wide border border-blue-200 hover:bg-white transition-all duration-300 shadow-lg"
              href='#servicii'
            >
              Află Mai Multe
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: 'Ani de experiență', value: '20+', icon: '⏱️' },
              { label: 'Pacienți fericiți', value: '500+', icon: '😊' },
              { label: 'Rată de succes', value: '99%', icon: '⭐' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                whileHover={prefersReducedMotion ? {} : { y: -5 }}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/30 shadow-lg"
              >
                <div className="text-2xl md:text-3xl mb-2">{item.icon}</div>
                <div className="text-xl md:text-2xl font-light text-blue-600 mb-1">{item.value}</div>
                <div className="text-xs md:text-sm text-gray-600 font-light">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={prefersReducedMotion ? {} : { y }}
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-400"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};
export default Hero;
