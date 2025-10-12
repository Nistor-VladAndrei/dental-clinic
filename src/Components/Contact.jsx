import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5, 
            delay: prefersReducedMotion ? 0 : 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Contactează-ne</h2>
          <p className="text-xl text-gray-500 font-light">Suntem aici să răspundem întrebărilor tale</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Adresă', info: 'Str. Dentară nr. 123, Craiova, România' },
                { icon: Phone, title: 'Telefon', info: '+40 123 456 789' },
                { icon: Mail, title: 'Email', info: 'contact@drgheoghiade.ro' },
                { icon: Clock, title: 'Program', info: 'Luni-Vineri: 9:00 - 18:00' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 transition-transform duration-300 hover:translate-x-2 will-change-transform"
                  style={{ transform: 'translateZ(0)' }}
                >
                  <div className="bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-md p-3 rounded-2xl border border-white/40">
                    <item.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-light text-gray-800 mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-gray-500 font-light">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Nume"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            />
            <input
              type="tel"
              placeholder="Telefon"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            />
            <textarea
              placeholder="Mesaj"
              rows="4"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md focus:border-blue-400 focus:outline-none transition-all font-light"
            ></textarea>
            <motion.button
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