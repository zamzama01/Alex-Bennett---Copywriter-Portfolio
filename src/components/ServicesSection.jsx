import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData.js';

export const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleExpand = (id) => {
    setExpandedService((prev) => (prev === id ? null : id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="relative bg-[#0E0E0E] text-[#F7F4EB] py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-white/5"
    >
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#CD8A4A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#F7F4EB] tracking-tight leading-[1.06]">
              <span className="block">What I can</span>
              <span className="block">do for you</span>
            </h2>

            <p className="mt-6 text-sm text-[#F7F4EB]/50 font-mono uppercase tracking-widest hidden lg:block">
              Core Specialties // 01 — 03
            </p>
          </motion.div>

          {/* Right Column: 3 Services & CTA Button */}
          <div className="lg:col-span-7 flex flex-col space-y-10 sm:space-y-12">
            {servicesData.map((service, index) => {
              const isExpanded = expandedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group border-b border-white/10 pb-8 sm:pb-10 transition-colors"
                >
                  <div
                    onClick={() => toggleExpand(service.id)}
                    className="cursor-pointer select-none"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#F7F4EB] group-hover:text-[#CD8A4A] transition-colors">
                        {service.title}
                      </h3>
                      <button
                        type="button"
                        className="p-1 rounded-full text-[#F7F4EB]/50 group-hover:text-[#CD8A4A] transition-colors"
                        aria-label={`Toggle deliverables for ${service.title}`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            isExpanded ? 'rotate-180 text-[#CD8A4A]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <p className="font-sans text-base sm:text-lg text-[#F7F4EB]/75 font-normal leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Expandable Deliverables Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 pt-4 border-t border-white/5"
                      >
                        <p className="text-xs uppercase tracking-wider font-semibold text-[#CD8A4A] mb-3">
                          Included Deliverables:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-[#F7F4EB]/80"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#CD8A4A] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* "Get in touch" Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <motion.button
                id="services-get-in-touch-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F7F4EB] text-[#0E0E0E] text-base font-semibold tracking-tight shadow-lg hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
