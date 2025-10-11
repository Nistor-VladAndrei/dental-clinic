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
const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Contactează-ne</h2>
          <p className="text-xl text-gray-500 font-light">Suntem aici să răspundem întrebărilor tale</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Adresă', info: 'Str. Dentară nr. 123, Craiova, România' },
                { icon: Phone, title: 'Telefon', info: '+40 123 456 789' },
                { icon: Mail, title: 'Email', info: 'contact@drgheoghiade.ro' },
                { icon: Clock, title: 'Program', info: 'Luni-Vineri: 9:00 - 18:00' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={prefersReducedMotion ? {} : { x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-md p-3 rounded-2xl border border-white/40">
                    <item.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-light text-gray-800 mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-gray-500 font-light">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              type="text"
              placeholder="Nume"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            />
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            />
            <motion.input
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              type="tel"
              placeholder="Telefon"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            />
            <motion.textarea
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              placeholder="Mesaj"
              rows="4"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            ></motion.textarea>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-light tracking-wide hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl"
            >
              Trimite Mesaj
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
