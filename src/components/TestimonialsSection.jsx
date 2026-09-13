import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData.js';

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-[#0E0E0E] text-[#F7F4EB] py-20 sm:py-28 lg:py-36 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#F7F4EB] tracking-tight">
            What clients say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              {/* Client Avatar Thumbnail */}
              <div className="shrink-0">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-md border border-white/15 bg-neutral-800">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Quote & Author Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <Quote className="w-5 h-5 text-[#CD8A4A]/60 mb-2 rotate-180" />
                  <p className="font-sans text-base sm:text-lg text-[#F7F4EB]/90 font-normal leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-2">
                  <span className="block font-sans font-bold text-base sm:text-lg text-[#F7F4EB]">
                    {item.name}
                  </span>
                  <span className="block font-sans text-sm text-[#CD8A4A] font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
