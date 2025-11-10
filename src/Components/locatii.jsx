import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } }
};

const Locations = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeLocation, setActiveLocation] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const locations = [
    {
      name: 'Cabinet Stomatologic Craiova Centru',
      address: 'Str. Caracal, bl. 29, sc. B, ap. 3',
      city: 'Craiova, Dolj',
      phone: '0766 863 223',
      email: 'contact@drghiorghiade.ro',
      schedule: [
        { day: 'Luni - Vineri', hours: '09:00 - 19:00' },
        { day: 'Sâmbătă', hours: '09:00 - 14:00' },
        { day: 'Duminică', hours: 'Închis' }
      ],
      features: [
        'Cabinet complet echipat',
        'Implantologie & estetică',
        'Parcare în zonă',
        'Acces facil transport public'
      ],
      mapUrl: 'https://maps.google.com/?q=Strada+Caracal+bl+29+Craiova',
      images: [
        { emoji: '🏢', label: 'Exterior clădire', bg: 'from-blue-400 to-cyan-400' },
        { emoji: '🪑', label: 'Sala de așteptare', bg: 'from-blue-500 to-cyan-500' },
        { emoji: '🦷', label: 'Cabinet tratamente', bg: 'from-cyan-500 to-blue-500' },
        { emoji: '💉', label: 'Echipamente moderne', bg: 'from-blue-600 to-cyan-600' }
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Cabinet Stomatologic Craiova Preajba',
      address: 'Str. Capsunilor nr. 11, zona Selgros',
      city: 'Preajba, Craiova, Dolj',
      phone: '0757 101 077',
      email: 'preajba@drghiorghiade.ro',
      schedule: [
        { day: 'Luni - Vineri', hours: '10:00 - 20:00' },
        { day: 'Sâmbătă', hours: '10:00 - 15:00' },
        { day: 'Duminică', hours: 'Închis' }
      ],
      features: [
        'Clinică modernă cu CBCT',
        'Toate specialitățile',
        'Parcare privată gratuită',
        'Lângă Selgros Preajba'
      ],
      mapUrl: 'https://maps.google.com/?q=Strada+Capsunilor+11+Preajba+Craiova',
      images: [
        { emoji: '🏥', label: 'Exterior clinică', bg: 'from-purple-400 to-pink-400' },
        { emoji: '🛋️', label: 'Recepție modernă', bg: 'from-purple-500 to-pink-500' },
        { emoji: '🔬', label: 'Laborator CBCT', bg: 'from-pink-500 to-purple-500' },
        { emoji: '✨', label: 'Salon estetică', bg: 'from-purple-600 to-pink-600' },
        { emoji: '🅿️', label: 'Parcare privată', bg: 'from-pink-400 to-purple-400' }
      ],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const currentLocation = locations[activeLocation];
  const totalImages = currentLocation.images.length;

  // Auto-advance carousel
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalImages, prefersReducedMotion, activeLocation]);

  // Reset image index when location changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeLocation]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <section id="locatii" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-blue-50/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">
            Cabinetele Noastre în Craiova
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Două locații moderne în Craiova pentru servicii stomatologice complete: implantologie, estetică dentară, endodonție și ortodonție.
          </p>
        </motion.div>

        {/* Location Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          {locations.map((loc, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveLocation(idx)}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className={`px-6 py-4 rounded-2xl font-light transition-all duration-300 border ${
                activeLocation === idx
                  ? `bg-gradient-to-r ${loc.gradient} text-white border-transparent shadow-xl`
                  : 'bg-white/70 backdrop-blur-md text-gray-600 border-gray-200/50 hover:border-blue-300/50'
              }`}
            >
              <span className="text-2xl mr-3" role="img" aria-label={loc.name}>
                {loc.images[0].emoji}
              </span>
              <span className="text-sm sm:text-base">{loc.city.split(',')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Location Details */}
        <motion.div
          key={activeLocation}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left Column - Carousel & Map */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Image Carousel */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40">
              <div className="aspect-video relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-br ${currentLocation.images[currentImageIndex].bg} flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="text-9xl relative z-10" role="img" aria-label={currentLocation.images[currentImageIndex].label}>
                      {currentLocation.images[currentImageIndex].emoji}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Imagine anterioară"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
                  aria-label="Imagine următoare"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-10">
                  <h3 className="text-white font-medium text-lg mb-1">
                    {currentLocation.name}
                  </h3>
                  <p className="text-white/90 text-sm font-light">
                    {currentLocation.images[currentImageIndex].label}
                  </p>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="bg-white/90 backdrop-blur-md p-4 flex gap-2 overflow-x-auto">
                {currentLocation.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 rounded-xl transition-all duration-300 ${
                      idx === currentImageIndex
                        ? `bg-gradient-to-br ${img.bg} scale-110 shadow-lg`
                        : 'bg-gray-100 hover:scale-105 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="text-2xl flex items-center justify-center h-full">
                      {img.emoji}
                    </div>
                  </button>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 z-20">
                <span className="text-white text-sm font-light">
                  {currentImageIndex + 1} / {totalImages}
                </span>
              </div>
            </div>

            {/* Map Button */}
            <motion.a
              href={currentLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="block bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-md rounded-3xl p-6 border border-white/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-800 font-medium mb-1">Deschide în Google Maps</p>
                  <p className="text-gray-500 text-sm font-light">Obține indicații către cabinet</p>
                </div>
                <div className="text-4xl">🗺️</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/40">
              <h3 className="text-2xl font-light text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">📞</span>
                Contact și Program
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">☎️</div>
                  <div>
                    <p className="text-sm text-gray-500 font-light mb-1">Telefon</p>
                    <a 
                      href={`tel:${currentLocation.phone.replace(/\s/g, '')}`}
                      className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {currentLocation.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <p className="text-sm text-gray-500 font-light mb-1">Email</p>
                    <a 
                      href={`mailto:${currentLocation.email}`}
                      className="text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {currentLocation.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <p className="text-sm text-gray-500 font-light mb-1">Adresă</p>
                    <p className="text-lg font-medium text-gray-800">
                      {currentLocation.address}
                    </p>
                    <p className="text-sm text-gray-600 font-light">
                      {currentLocation.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/40">
              <h3 className="text-xl font-light text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-2xl">🕐</span>
                Program
              </h3>
              
              <div className="space-y-3">
                {currentLocation.schedule.map((s, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600 font-light">{s.day}</span>
                    <span className="text-gray-800 font-medium">{s.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 border border-white/40"
        >
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            Programează o Consultație în Craiova
          </h3>
          <p className="text-gray-600 font-light mb-6 max-w-2xl mx-auto">
            Alege locația preferată și vino să discutăm despre sănătatea ta dentară. Oferim consultații personalizate pentru implantologie, estetică dentară și toate serviciile stomatologice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:0766863223"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-light shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📞 Sună acum - Centru
            </motion.a>
            <motion.a
              href="tel:0757101077"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-light shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📞 Sună acum - Preajba
            </motion.a>
          </div>
        </motion.div>

        {/* SEO Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 font-light max-w-4xl mx-auto leading-relaxed">
            Clinica Dr. Gheorghiade oferă servicii stomatologice complete în două locații în Craiova: cabinet stomatologic în centrul orașului pe Strada Caracal și clinică modernă în Preajba, zona Selgros, Strada Capsunilor. Ambele cabinete dispun de echipamente moderne pentru implantologie dentară, estetică dentară, endodonție, ortodonție și tratamente de canal. Programări disponibile în Craiova la telefoanele 0766 863 223 (Centru) și 0757 101 077 (Preajba, Selgros).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;