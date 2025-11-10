import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
            Dr. Gheorghiade – Implantologie și Estetică Dentară în Craiova
            </h2>

            <p className="text-lg text-gray-500 mb-6 leading-relaxed font-light">
              De peste <strong>20 de ani</strong> suntem alături de pacienții din <strong>Craiova</strong> cu servicii complete de <em>implantologie</em>, <em>endodonție</em>, <em>ortodonție</em> și <em>estetică dentară</em>. Folosim echipamente moderne (CBCT, tehnologii digitale) pentru planuri de tratament personalizate și rezultate durabile.
            </p>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
              La Clinica Dr. Gheorghiade prioritatea noastră este siguranța și confortul pacientului: evaluare completă, explicații clare despre opțiuni, și follow-up post-tratament. Avem două locații în Craiova (Preajba și zona Selgros) și program flexibil pentru consultații în afara orelor obișnuite.
            </p>
            
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { value: '20+', label: 'Ani experiență în Craiova' },
                { value: '5000+', label: 'Pacienți tratați' },
                { value: '98%', label: 'Satisfacție pacienți' }
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
              className="aspect-square bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/40 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="text-8xl" role="img" aria-label="Medic stomatolog">
                👨‍⚕️
              </div>
            </motion.div>

            {/* Optional: micro-CTA subtext */}
            <div className="mt-6 text-sm text-gray-600">
              <p>Programează o consultație în Clinica Dr. Gheorghiade — servicii de implant dentar, tratamente de canal și estetică dentară în Craiova.</p>
              <p className="mt-2 font-medium text-gray-800">Telefon: <a href="tel:0766863223" className="text-blue-600">076 686 3223</a> / <a href="tel:0757101077" className="text-blue-600">075 710 1077</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
