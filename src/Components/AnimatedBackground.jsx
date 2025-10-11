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
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 30px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.15); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.08); }
        }
        .float-1 { animation: float1 15s ease-in-out infinite; }
        .float-2 { animation: float2 18s ease-in-out infinite; }
        .float-3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
      
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-blue-400/20 rounded-full blur-3xl float-1" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-300/25 to-purple-400/15 rounded-full blur-3xl float-2" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-300/20 to-blue-300/15 rounded-full blur-3xl float-3" />
    </div>
  );
};
export default AnimatedBackground;