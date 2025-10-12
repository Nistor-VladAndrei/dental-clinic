import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const testimonials = [
    {
      name: 'Elena Radu',
      text: 'Dr. Gheorghiade și echipa sa sunt absolut minunați! M-au făcut să mă simt confortabil pe parcursul întregului tratament. Zâmbetul meu nu a arătat niciodată mai bine!',
      rating: 5,
    },
    {
      name: 'Mihai Constantinescu',
      text: 'Profesioniști, îngrijitori și eficienți. Clinica este modernă și curată. Recomand cu căldură Dr. Gheorghiade pentru oricine caută îngrijire dentară de calitate.',
      rating: 5,
    },
    {
      name: 'Sofia Dumitrescu',
      text: 'Eram nervosă în legătură cu implanturile dentare, dar Dr. Gheorghiade a explicat totul clar și procedura a fost nedureroasă. Rezultate uimitoare!',
      rating: 5,
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimoniale" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: prefersReducedMotion ? 0 : 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Testimoniale Pacienți</h2>
          <p className="text-xl text-gray-500 font-light">Ascultă ce spun pacienții noștri</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-blue-50/60 to-purple-50/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/40 shadow-lg text-center"
            >
              <div className="flex justify-center mb-6 gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-400 text-2xl"
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-6 italic leading-relaxed font-light">
                "{testimonials[current].text}"
              </p>
              <p className="text-lg font-light text-gray-800">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={prev}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-all border border-white/40"
            aria-label="Testimonialul anterior"
          >
            <ChevronLeft className="text-blue-600" />
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-all border border-white/40"
            aria-label="Următorul testimonial"
          >
            <ChevronRight className="text-blue-600" />
          </motion.button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index ? 'bg-blue-500 w-8' : 'bg-gray-300 w-3'
              }`}
              aria-label={`Mergi la testimonialul ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;