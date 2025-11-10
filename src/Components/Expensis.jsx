import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
};

const Expensise = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('implantologie');

  const priceCategories = {
    implantologie: {
      title: 'Implantologie',
      icon: '🦷',
      services: [
        { name: 'Implant dentar complet (implant + lucrare)', price: '2.500 - 3.500 RON' },
        { name: 'Implant dentar (doar implant)', price: '1.200 - 1.800 RON' },
        { name: 'Coroană pe implant (zirconiu)', price: '1.300 - 1.700 RON' },
        { name: 'Protezare completă pe implanturi (All-on-4)', price: '12.000 - 18.000 RON' },
        { name: 'Consultație implantologie + CBCT', price: '200 RON' }
      ]
    },
    estetica: {
      title: 'Estetică Dentară',
      icon: '✨',
      services: [
        { name: 'Fațetă dentară (porțelan)', price: '1.400 - 1.900 RON' },
        { name: 'Fațetă dentară (composite)', price: '600 - 900 RON' },
        { name: 'Albire dentară profesională', price: '800 - 1.200 RON' },
        { name: 'Coroană dentară (zirconiu)', price: '900 - 1.400 RON' },
        { name: 'Coroană dentară (metal-ceramică)', price: '600 - 800 RON' }
      ]
    },
    endodontie: {
      title: 'Endodonție',
      icon: '🔬',
      services: [
        { name: 'Tratament de canal (1 canal)', price: '300 - 450 RON' },
        { name: 'Tratament de canal (2 canale)', price: '450 - 650 RON' },
        { name: 'Tratament de canal (3-4 canale)', price: '650 - 900 RON' },
        { name: 'Retratament endodontic', price: '500 - 800 RON' },
        { name: 'Obturație provizorie', price: '100 - 150 RON' }
      ]
    },
    ortodontie: {
      title: 'Ortodonție',
      icon: '🎯',
      services: [
        { name: 'Aparat dentar metalic (o arcade)', price: '2.000 - 3.000 RON' },
        { name: 'Aparat dentar ceramic (o arcade)', price: '3.500 - 4.500 RON' },
        { name: 'Aliniatori invizibili (Invisalign)', price: '8.000 - 15.000 RON' },
        { name: 'Consultație ortodontică + plan tratament', price: '150 RON' },
        { name: 'Control lunar ortodonție', price: '150 - 200 RON' }
      ]
    },
    generale: {
      title: 'Servicii Generale',
      icon: '🏥',
      services: [
        { name: 'Consultație generală', price: '100 - 150 RON' },
        { name: 'Detartraj ultrasonete + periaj', price: '200 - 300 RON' },
        { name: 'Obturație simplă (composite)', price: '200 - 350 RON' },
        { name: 'Extracție dentară simplă', price: '150 - 250 RON' },
        { name: 'Radiografie panoramică (CBCT)', price: '150 - 200 RON' }
      ]
    }
  };

  const categories = Object.keys(priceCategories);

  return (
    <section id="preturi" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-blue-50/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-4 tracking-tight">
            Prețuri Transparente
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            Servicii stomatologice complete în Craiova. Prețurile sunt orientative și pot varia în funcție de complexitatea cazului.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className={`px-6 py-3 rounded-2xl font-light text-sm transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-lg'
                  : 'bg-white/70 backdrop-blur-md text-gray-600 border-gray-200/50 hover:border-blue-300/50'
              }`}
            >
              <span className="mr-2" role="img" aria-label={priceCategories[cat].title}>
                {priceCategories[cat].icon}
              </span>
              {priceCategories[cat].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Price Cards */}
        <motion.div
          key={activeCategory}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {priceCategories[activeCategory].services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/40 transition-all duration-300 hover:shadow-2xl"
            >
              <h3 className="text-lg font-normal text-gray-800 mb-3 leading-snug">
                {service.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-light text-blue-500">
                  {service.price.split(' ')[0]}
                </span>
                {service.price.includes('-') && (
                  <span className="text-lg text-gray-400 font-light">
                    {service.price.split(' ').slice(1).join(' ')}
                  </span>
                )}
                {!service.price.includes('-') && service.price.includes('RON') && (
                  <span className="text-lg text-gray-400 font-light">RON</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-md rounded-3xl p-8 border border-white/40"
        >
          <p className="text-gray-600 font-light mb-4 text-lg">
            Toate tratamentele includ consultație, plan de tratament personalizat și follow-up post-tratament.
          </p>
          <p className="text-gray-800 font-medium mb-6">
            Oferim și opțiuni de plată în rate pentru tratamente complexe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:0766863223"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-light shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📞 Programează consultație
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="inline-block px-8 py-4 bg-white/80 backdrop-blur-md text-gray-700 rounded-2xl font-light border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300"
            >
              ✉️ Contactează-ne
            </motion.a>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-8 font-light"
        >
          *Prețurile pot varia în funcție de materialele folosite și complexitatea tratamentului. Pentru o ofertă exactă, vă rugăm să programați o consultație.
        </motion.p>
      </div>
    </section>
  );
};

export default Expensise;