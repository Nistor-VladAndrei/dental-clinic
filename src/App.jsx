import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import './index.css';  

// Componenta Header cu efect de sticlă
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Despre', 'Servicii', 'Echipa', 'Testimoniale', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-light tracking-wider text-gray-800"
          >
            Dr. Gheorghiade
          </motion.div>

          {/* Navigație pentru desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-blue-500 transition-all duration-300 font-light text-sm tracking-wide"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg text-sm font-light tracking-wide"
          >
            Programează o consultație
          </motion.button>

          {/* Buton meniu mobil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Comută meniul"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Meniu mobil cu efect de sticlă */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 bg-white/60 backdrop-blur-xl rounded-2xl p-4 mt-2"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors font-light"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full transition-all shadow-lg text-sm font-light">
              Programează o consultație
            </button>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

// Componenta fundal animat îmbunătățit
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.2 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#818CF8', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 0.15 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06B6D4', stopOpacity: 0.35 }} />
            <stop offset="100%" style={{ stopColor: '#0EA5E9', stopOpacity: 0.2 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cercuri mari în mișcare */}
        <motion.circle
          cx="15%"
          cy="25%"
          r="180"
          fill="url(#grad1)"
          filter="url(#glow)"
          animate={{
            cx: ['15%', '25%', '10%', '15%'],
            cy: ['25%', '35%', '20%', '25%'],
            r: [180, 220, 200, 180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.circle
          cx="85%"
          cy="75%"
          r="220"
          fill="url(#grad2)"
          filter="url(#glow)"
          animate={{
            cx: ['85%', '75%', '90%', '85%'],
            cy: ['75%', '65%', '80%', '75%'],
            r: [220, 260, 240, 220],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.circle
          cx="50%"
          cy="50%"
          r="150"
          fill="url(#grad3)"
          filter="url(#glow)"
          animate={{
            cx: ['50%', '60%', '40%', '50%'],
            cy: ['50%', '45%', '55%', '50%'],
            r: [150, 190, 170, 150],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Orbe suplimentare */}
        <motion.circle
          cx="70%"
          cy="30%"
          r="100"
          fill="url(#grad1)"
          filter="url(#glow)"
          animate={{
            cx: ['70%', '75%', '65%', '70%'],
            cy: ['30%', '25%', '35%', '30%'],
            r: [100, 130, 110, 100],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.circle
          cx="30%"
          cy="70%"
          r="120"
          fill="url(#grad2)"
          filter="url(#glow)"
          animate={{
            cx: ['30%', '35%', '25%', '30%'],
            cy: ['70%', '75%', '65%', '70%'],
            r: [120, 150, 130, 120],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Linii curgătoare */}
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke="rgba(59, 130, 246, 0.15)"
          strokeWidth="3"
          fill="none"
          animate={{
            d: [
              'M0,50 Q25,30 50,50 T100,50',
              'M0,50 Q25,70 50,50 T100,50',
              'M0,50 Q25,30 50,50 T100,50',
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
};

// Componenta Hero îmbunătățită
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
      <AnimatedBackground />
      
      {/* Efect de suprapunere sticlă */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-6xl md:text-8xl font-extralight text-gray-800 mb-6 tracking-tight"
            >
              Zâmbetul tău,
              <motion.span 
                className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                prioritatea noastră
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto font-light tracking-wide"
          >
            Experimentează îngrijire dentară excepțională cu tehnologie de ultimă generație
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-light tracking-wide overflow-hidden backdrop-blur-xl shadow-2xl"
            >
              <span className="relative z-10">Programează o consultație</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/60 backdrop-blur-xl text-blue-600 px-10 py-4 rounded-full text-lg font-light tracking-wide border border-white/40 hover:border-blue-200 transition-all shadow-xl"
            >
              Află mai multe
            </motion.button>
          </motion.div>

          {/* Carduri plutitoare */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: '20+ ani', icon: '⏱️' },
              { label: '5000+ pacienți', icon: '😊' },
              { label: '98% succes', icon: '⭐' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-xl"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm text-gray-600 font-light">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ y }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-blue-400"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Componenta card serviciu îmbunătățită
const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -15, transition: { duration: 0.3 } }}
      className="group bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-xl"
      >
        <span className="text-3xl">{icon}</span>
      </motion.div>
      <h3 className="text-2xl font-light text-gray-800 mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-light">{description}</p>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-6 rounded-full"
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Secțiunea Servicii
const Services = () => {
  const services = [
    {
      title: 'Stomatologie generală',
      description: 'Îngrijire orală completă care include detartraj, obturații și tratamente preventive pentru a-ți menține zâmbetul sănătos.',
      icon: '🦷',
    },
    {
      title: 'Estetică dentară',
      description: 'Transformă-ți zâmbetul cu albire, fațete și proceduri estetice adaptate nevoilor tale.',
      icon: '✨',
    },
    {
      title: 'Ortodonție',
      description: 'Aliniază-ți dinții cu aparate moderne și gutiere transparente pentru un zâmbet perfect.',
      icon: '😁',
    },
    {
      title: 'Implanturi dentare',
      description: 'Soluții permanente pentru înlocuirea dinților care arată, se simt și funcționează ca dinții naturali.',
      icon: '🔧',
    },
    {
      title: 'Tratament de canal',
      description: 'Tratamente blânde și eficiente pentru salvarea dinților infectați și ameliorarea durerii cu tehnici avansate.',
      icon: '💙',
    },
    {
      title: 'Îngrijiri de urgență',
      description: 'Asistență rapidă pentru urgențe dentare, cu programări în aceeași zi și îngrijire compasională.',
      icon: '🚨',
    },
  ];

  return (
    <section id="servicii" className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Decorațiune subtilă în fundal */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Serviciile noastre</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Îngrijire dentară completă pentru fiecare membru al familiei tale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Secțiunea Despre
const About = () => {
  return (
    <section id="despre" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-8 tracking-tight">
              Bine ați venit la Dr. Gheorghiade
            </h2>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed font-light">
              De peste 20 de ani, Dr. Gheorghiade este dedicat oferirii unei îngrijiri dentare excepționale familiilor din comunitatea noastră. Practica noastră combină tehnologie de ultimă generație cu un mediu cald și primitor.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
              Credem că fiecare pacient merită atenție personalizată și tratament de cea mai înaltă calitate.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: '20+', label: 'Ani' },
                { value: '5000+', label: 'Pacienți' },
                { value: '98%', label: 'Satisfacție' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-xl p-6 rounded-2xl border border-white/40"
                >
                  <div className="text-4xl font-light text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm font-light tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40"
            >
              <div className="w-full h-full flex items-center justify-center text-8xl">
                👨‍⚕️
              </div>
            </motion.div>
            
            {/* Decorațiune plutitoare */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 backdrop-blur-xl rounded-3xl border border-white/40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Secțiunea Echipa
const Team = () => {
  const team = [
    {
      name: 'Dr. Alexandru Gheorghiade',
      role: 'Medic stomatolog principal și fondator',
      bio: 'DDS, peste 20 de ani experiență în stomatologie generală și estetică',
      emoji: '👨‍⚕️',
    },
    {
      name: 'Dr. Maria Ionescu',
      role: 'Ortodontist',
      bio: 'Specialist în ortodonție, cu experiență în Invisalign și aparate ortodontice',
      emoji: '👩‍⚕️',
    },
    {
      name: 'Ana Popescu',
      role: 'Igienistă dentară',
      bio: 'Igienistă certificată dedicată îngrijirii preventive și educației pacienților',
      emoji: '👩‍⚕️',
    },
  ];

  return (
    <section id="echipa" className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute top-40 left-20 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Cunoaște echipa noastră</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Profesioniști cu experiență dedicați sănătății tale dentare
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white/50 backdrop-blur-xl p-8 rounded-3xl border border-white/40 shadow-xl text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-32 h-32 bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-xl rounded-full mx-auto mb-6 flex items-center justify-center text-6xl border border-white/40"
              >
                {member.emoji}
              </motion.div>
              <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide">{member.name}</h3>
              <p className="text-blue-500 font-light mb-4 text-sm tracking-wide">{member.role}</p>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Secțiunea Testimoniale
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      name: 'Elena Radu',
      text: 'Dr. Gheorghiade și echipa sa sunt absolut minunați! M-au făcut să mă simt confortabil pe toată durata tratamentului. Zâmbetul meu nu a arătat niciodată mai bine!',
      rating: 5,
    },
    {
      name: 'Mihai Constantinescu',
      text: 'Profesioniști, atenți și eficienți. Clinica este modernă și curată. Recomand cu încredere Dr. Gheorghiade pentru oricine caută îngrijire dentară de calitate.',
      rating: 5,
    },
    {
      name: 'Sofia Dumitrescu',
      text: 'Eram emoționată înainte de implanturi, dar Dr. Gheorghiade a explicat totul clar și procedura a fost nedureroasă. Rezultate uimitoare!',
      rating: 5,
    },
  ];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimoniale" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Testimoniale pacienți</h2>
          <p className="text-xl text-gray-500 font-light">Află ce spun pacienții noștri</p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-gradient-to-br from-blue-50/60 to-purple-50/40 backdrop-blur-xl p-12 rounded-3xl border border-white/40 shadow-2xl text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-yellow-400 text-2xl"
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-xl text-gray-600 mb-8 italic leading-relaxed font-light">
              "{testimonials[current].text}"
            </p>
            <p className="text-lg font-light text-gray-800">{testimonials[current].name}</p>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/70 backdrop-blur-xl p-3 rounded-full shadow-lg hover:bg-white transition-all border border-white/40"
            aria-label="Testimonial anterior"
          >
            <ChevronLeft className="text-blue-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/70 backdrop-blur-xl p-3 rounded-full shadow-lg hover:bg-white transition-all border border-white/40"
            aria-label="Următorul testimonial"
          >
            <ChevronRight className="text-blue-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? 'bg-blue-500 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Mergi la testimonialul ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Secțiunea Contact
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">Contactează-ne</h2>
          <p className="text-xl text-gray-500 font-light">Suntem aici pentru a răspunde întrebărilor tale</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {[
                { icon: MapPin, title: 'Adresă', info: 'Str. Dentală 123, Craiova, România' },
                { icon: Phone, title: 'Telefon', info: '+40 123 456 789' },
                { icon: Mail, title: 'Email', info: 'contact@drgheoghiade.ro' },
                { icon: Clock, title: 'Program', info: 'Lun-Vin: 09:00 - 18:00' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gradient-to-br from-blue-100/70 to-purple-100/70 backdrop-blur-xl p-3 rounded-2xl border border-white/40">
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {['Numele tău', 'Email-ul tău', 'Număr de telefon'].map((placeholder, i) => (
              <motion.input
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                type={placeholder.includes('Email') ? 'email' : placeholder.includes('Telefon') ? 'tel' : 'text'}
                placeholder={placeholder}
                className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-xl focus:border-blue-400 focus:outline-none transition-all font-light"
              />
            ))}
            <motion.textarea
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              placeholder="Mesajul tău"
              rows="4"
              className="w-full px-6 py-4 rounded-2xl border border-white/40 bg-white/50 backdrop-blur-xl focus:border-blue-400 focus:outline-none transition-all font-light"
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-light tracking-wide hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl"
            >
              Trimite mesaj
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// Componenta Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-xl text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-wider">Dr. Gheorghiade</h3>
            <p className="text-gray-400 font-light">Îngrijire dentară de calitate pentru întreaga familie</p>
          </div>
          <div>
            <h4 className="font-light mb-6 text-lg tracking-wide">Link-uri rapide</h4>
            <ul className="space-y-3">
              {['Despre', 'Servicii', 'Echipa', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-lg tracking-wide">Servicii</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>Stomatologie generală</li>
              <li>Estetică dentară</li>
              <li>Ortodonție</li>
              <li>Implanturi dentare</li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-lg tracking-wide">Informații contact</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li>Str. Dentală 123</li>
              <li>Craiova, România</li>
              <li>+40 123 456 789</li>
              <li>contact@drgheoghiade.ro</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-light">
          <p>&copy; 2025 Clinica Stomatologică Dr. Gheorghiade. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

// Componenta principală App
function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
